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
        <meta name='description' content='Personal Website of Florin Cosmin Onciu. Here is my personal space where I will mostly post about technology and my personal project'></meta>
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />

        {/* https://realfavicongenerator.net */}
        <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
        <link rel='manifest' href='/favicons/site.webmanifest' />
        <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#5bbad5' />

      </Head>
      <Component {...pageProps} />
    </>
  )
}
