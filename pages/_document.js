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
    return (
      <Html lang='en'>
        <Head />
        <body className={`bg-gradient-to-br from-gray-50 to-purple-100 ${process.env.DEVELOPMENT === 'true' ? 'debug-screens' : ''}`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
