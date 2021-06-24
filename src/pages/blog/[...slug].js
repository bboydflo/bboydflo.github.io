import fs from 'fs'
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
    const postFilePath = path.join(POSTS_PATH, isDev ? 'sample': 'blog', `${params.slug}.mdx`)
    const source = fs.readFileSync(postFilePath)

    const { content, data } = matter(source)

    const mdxSource = await serialize(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
        },
        scope: data,
    })

    return {
        props: {
            source: mdxSource,
            frontMatter: data,
        },
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
            <Section extraClasses={'prose md:prose-md lg:prose-lg xl:prose-xl mx-auto'}>
                <MDXRemote {...source} components={{}} />
            </Section>
        </Layout>
    )
}
