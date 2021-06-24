/**
 * https://nextjs.org/docs/advanced-features/custom-document
 * how to customize your own global/common document
 */
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const isDev = process.env.NEXT_PUBLIC_DEVELOPMENT === 'true'

    return (
      <Html lang='en'>
        <Head />
        <body className={`bg-gradient-to-br from-gray-50 to-purple-100 bg-no-repeat min-h-screen ${isDev ? 'debug-screens' : ''}`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
