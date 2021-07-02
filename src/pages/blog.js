import Head from 'next/head'
import Link from 'next/link'
import { getAllFilesFrontMatter } from '../mdx'
import Layout from '../components/Layout'
import Section from '../components/Section'
import HeadingSecondary from '../components/Headings'
import { isDev, postDateTemplate } from './index'

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter(isDev ? 'sample' : 'blog')

    return { props: { posts } }
}

export default function Home({ posts }) {
    return (
        <Layout>
            <Head>
                <title>Florin Cosmin | Personal Website</title>
            </Head>

            <Section extraClasses={'bg-gray-200'}>
                <div className='space-y-4'>
                    <HeadingSecondary headingText={'Blog posts tags'} />
                    <ul className='flex flex-wrap py-2 gap-x-4 gap-y-2'>
                        <li className='inline-block px-4 py-2 text-gray-500 bg-yellow-300 rounded-full'><a className='' href='#'>JavaScript</a></li>
                        <li className='inline-block px-4 py-2 text-white bg-blue-500 rounded-full'><a className='' href='#'>TypeScript</a></li>
                        <li className='inline-block px-4 py-2 text-white bg-red-500 rounded-full'><a className='' href='#'>Angular</a></li>
                        <li className='inline-block px-4 py-2 text-white bg-blue-700 rounded-full'><a className='' href='#'>React.js</a></li>
                        <li className='inline-block px-4 py-2 text-white bg-green-500 rounded-full'><a className='' href='#'>Node.js</a></li>
                        <li className='inline-block px-4 py-2 text-gray-200 bg-yellow-600 rounded-full'><a className='' href='#'>Bash</a></li>
                    </ul>
                </div>
            </Section>

            <Section extraClasses='bg-white'>
                <div className='space-y-4'>
                    <HeadingSecondary headingText={'Latest Blog Posts'} />

                    {isDev && !posts.length && <p className=''>No posts found...</p>}

                    {isDev && posts.length && (
                        <div className='flex flex-col space-y-2'>
                            {posts.map((frontMatter) => {
                                const { slug, date, title, summary, tags } = frontMatter
                                return (

                                    <article className='px-1 py-2 transition-all duration-300 rounded-md md:px-2 md:py-4 hover:bg-gray-100' key={slug}>
                                        <div className='text-sm leading-6 text-gray-400 uppercase md:text-base'>
                                            <dl>
                                                <dt className='sr-only'>Published on</dt>
                                                <dd className=''>
                                                    <time dateTime={date}>
                                                        {new Date(date).toLocaleDateString('en-us', postDateTemplate)}
                                                    </time>
                                                </dd>
                                            </dl>
                                        </div>
                                        <Link href={`/blog/${slug}`}>
                                            <a className='inline-block text-xl leading-8 text-gray-700 transition-all duration-300 transform md:text-2xl hover:text-purple-500 hover:translate-x-1'>{`${isDev ? 'DEV' + title : title}`}</a>
                                        </Link>
                                    </article>
                                )
                            })}
                        </div>
                    )}

                    {
                        !isDev && (
                            <div className='flex flex-col space-y-2'>
                                <article className='px-2 py-4 transition-all duration-300 rounded-md hover:bg-gray-100'>
                                    <div className='text-base leading-6 text-gray-400 uppercase'>May 21, 2021</div>
                                    <a href='#' className='inline-block text-2xl leading-8 text-gray-700 transition-all duration-300 transform hover:text-purple-500 hover:translate-x-1'>How to share data between browser tabs</a>
                                </article>
                                <article className='px-2 py-4 transition-all duration-300 rounded-md hover:bg-gray-100'>
                                    <div className='text-base leading-6 text-gray-400 uppercase'>May 16, 2021</div>
                                    <a href='#' className='inline-block text-2xl leading-8 text-gray-700 transition-all duration-300 transform hover:text-purple-500 hover:translate-x-1'>Use esbuild to speed up your development</a>
                                </article>
                                <article className='px-2 py-4 transition-all duration-300 rounded-md hover:bg-gray-100'>
                                    <div className='text-base leading-6 text-gray-400 uppercase'>April 12, 2021</div>
                                    <a href='#' className='inline-block text-2xl leading-8 text-gray-700 transition-all duration-300 transform hover:text-purple-500 hover:translate-x-1'>Create your first React, Node and TypeScript project</a>
                                </article>
                                <article className='px-2 py-4 transition-all duration-300 rounded-md hover:bg-gray-100'>
                                    <div className='text-base leading-6 text-gray-400 uppercase'>April 12, 2021</div>
                                    <a href='#' className='inline-block text-2xl leading-8 text-gray-700 transition-all duration-300 transform hover:text-purple-500 hover:translate-x-1'>How to get started with Next.js, Preact and TypeScript</a>
                                </article>
                                <article className='px-2 py-4 transition-all duration-300 rounded-md hover:bg-gray-100'>
                                    <div className='text-base leading-6 text-gray-400 uppercase'>April 8, 2021</div>
                                    <a href='#' className='inline-block text-2xl leading-8 text-gray-700 transition-all duration-300 transform hover:text-purple-500 hover:translate-x-1'>TypeScript tips and tricks (part 1)</a>
                                </article>
                            </div>
                        )
                    }
                </div>
            </Section>
        </Layout>
    )
}
