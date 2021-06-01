import Head from 'next/head'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Florin Cosmin | Personal Website</title>
      </Head>

      <main>
        <p className='black'>Hello, World!</p>
      </main>

      <style jsx>{`
        .black {
          color: black;
        }
      `}</style>
    </div>
  )
}
