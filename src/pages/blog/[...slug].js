import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import Layout from '../../components/Layout'
import Section from '../../components/Section'
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

    /* const paths = postFilePaths
        // Remove file extensions for page paths
        .map(postPath => postPath.replace(/\.mdx?$/, ''))
        // Map the path into the static paths object required by Next.js
        .map(slug => ({ params: { slug } }))

    return {
        paths,
        fallback: false,
    } */
}

export default function Post({ source, frontMatter }) {

    return (
        <Layout>
            <Section extraClasses={'bg-gradient-to-tr from-yellow-200 to-purple-300 py-8 flex align-center justify-center'}>
                {/* <h2 className='mb-4 text-2xl font-semibold text-gray-700 md:text-3xl lg:text-4xl xl:text-9xl'>
                    <span className='inline-block pb-1 border-b-4 border-yellow-400'>{frontMatter.title}</span>
                </h2>
                {frontMatter.description && (
                    <p className=''>{frontMatter.description}</p>
                )} */}
                <h1 className='text-gray-500 bg-purple-300'>{frontMatter.title}</h1>
            </Section>
            <Section extraClasses={'prose md:prose-lg lg:prose-xl xl:prose-2xl mx-auto'}>
                <MDXRemote {...source} components={{}} />
            </Section>
        </Layout>
    )
}
