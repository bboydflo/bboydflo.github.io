import Head from 'next/head'

/**
 * https://nextjs.org/learn/basics/assets-metadata-css/global-styles
 * how to add global styles
 */
import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return (
        <>
          <Head>
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          </Head>
          <Component {...pageProps} />
        </>
    )
}
