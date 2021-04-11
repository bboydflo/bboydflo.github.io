import Head from 'next/head'

export default function ExampleBlogPost() {
    /**
     * how to customize head tag from within components and pages
     */
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <p>Example blog post</p>
        </>
    )
  }
