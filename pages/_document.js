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
        <body className={`bg-gray-50 ${process.env.DEVELOPMENT ? 'debug-screens' : ''}`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
