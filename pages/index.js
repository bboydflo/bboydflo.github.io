import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Florin Cosmin | Personal Website</title>
      </Head>
      {/* <!-- hero section --> */}
      <div className='relative'>
        <div className='container flex flex-col justify-center px-10 mx-auto'>
          <img className='self-center w-20 mt-8 mb-4 text-center sm:w-32 lg:w-40' src="/images/logo-bboydflo.svg" alt="website logo"></img>
          <h1 className='relative z-0 max-w-4xl text-4xl font-normal leading-10 text-left text-gray-700'>Hi! My name is Florin and I am a <span className='px-2 bg-yellow-300'>Software Developer</span> with a focus on <strong>Frontend Development</strong>. Welcome to my personal page!</h1>
          {/* <div className='absolute inset-0 w-[6000px] transform -translate-x-1/2 bg-purple-300 h-[240px] sm:h-[180px] top-40 -rotate-12 sm:-rotate-6 md:-rotate-3 -z-1'></div> */}
          <div className='h-[400px] sm:h-[320px] absolute inset-0 -z-1 bg-purple-300' style={{ clipPath: 'polygon(100% 0, 100% 75%, 0 100%, 0 25%)' }}></div>
        </div>
      </div>
    </>
  )
}
