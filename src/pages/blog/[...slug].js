import fs from 'fs-extra'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import Layout from '../../components/Layout'
import Section from '../../components/Section'
import { HeadingPrimary } from '../../components/Headings'
import { POSTS_PATH, getFiles, formatSlug } from '../../mdx'
import { isDev } from '../index'

/**
 * This function gets called at build time.
 * check docs: https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 */
export async function getStaticProps({ params }) {
    const getDataFromFiles = ['md', 'mdx'].map(ext => {
        const filePath = path.join(POSTS_PATH, isDev ? 'sample' : 'blog', `${params.slug.join('/')}.${ext}`)
        return fs.pathExists(filePath)
            .then(exists => {
                if (!exists) {
                    return
                }
                const source = fs.readFileSync(filePath)
                const { content, data } = matter(source)

                const serializeOptions = {
                    // Optionally pass remark/rehype plugins
                    mdxOptions: {
                        remarkPlugins: [],
                        rehypePlugins: [],
                    },
                    scope: data,
                }

                return serialize(content, serializeOptions)
                    .then(mdxSource => {
                        return {
                            source: mdxSource,
                            frontMatter: data
                        }
                    })
            })
    })

    const data = await Promise.all(getDataFromFiles)
    const props = data.filter(result => {
        return typeof result !== 'undefined'
    })[0]

    return {
        props
    }
}

export async function getStaticPaths() {
    const posts = getFiles(isDev ? 'sample' : 'blog')

    return {
        paths: posts.map(p => {
            return {
                params: {
                    // TODO: find out exactly why we need to split path here. perhaps because of nested routes feature?
                    slug: formatSlug(p).split('/'),
                },
            }
        }),
        fallback: false,
    }
}

export default function Post({ source, frontMatter }) {
    return (
        <Layout>
            <Section extraClasses={'bg-gradient-to-r from-purple-200 to-yellow-100 py-8 flex align-center justify-center text-center'}>
                <HeadingPrimary headingText={frontMatter.title}/>
            </Section>
            <Section extraClasses={'mx-auto bg-gray-50'}>
                <div className='prose md:prose-md lg:prose-lg xl:prose-xl'>
                    <MDXRemote {...source} components={{}} />
                </div>
            </Section>
        </Layout>
    )
}
