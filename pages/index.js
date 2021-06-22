import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Florin Cosmin | Personal Website</title>
      </Head>

      {/* <!-- menubar --> */}
      <div className='flex flex-col items-center bg-white border border-b border-purple-100 md:flex-row md:justify-end'>
        <a className='w-full px-8 py-2 text-center transition-all duration-300 border-l-4 border-transparent md:border-l-0 md:border-b-4 md:w-auto md:py-6 hover:bg-purple-200 hover:cursor-pointer hover:text-purple-900 hover:underline hover:border-purple-800'>Blog</a>
        <a className='w-full px-8 py-2 text-center transition-all duration-300 border-l-4 border-transparent md:border-l-0 md:border-b-4 md:w-auto md:py-6 hover:bg-purple-200 hover:cursor-pointer hover:text-purple-900 hover:underline hover:border-purple-800'>Projects</a>
        <a className='w-full px-8 py-2 text-center transition-all duration-300 border-l-4 border-transparent md:border-l-0 md:border-b-4 md:w-auto md:py-6 hover:bg-purple-200 hover:cursor-pointer hover:text-purple-900 hover:underline hover:border-purple-800'>Skills</a>
        <a className='w-full px-8 py-2 text-center transition-all duration-300 border-l-4 border-transparent md:border-l-0 md:border-b-4 md:w-auto md:py-6 hover:bg-purple-200 hover:cursor-pointer hover:text-purple-900 hover:underline hover:border-purple-800'>Contact</a>
      </div>

      <div className='pt-4 text-center sm:pt-8 md:pt-12'>
        <img className='inline-block w-24 transition-all duration-500 transform sm:w-28 md:w-32 lg:w-36 xl:w-40 animate-slide-top' src="/images/logo-yellow-black-white.svg" alt="website logo"></img>
        <div className='relative py-12 -top-12 md:py-16 md:-top-16 before:absolute before:inset-0 before:transform before:origin-center before:backface-hidden before:bg-gradient-to-tr before:from-yellow-200 before:to-purple-300 before:-skew-y-3 sm:before:-skew-y-2 before:-z-1'>
          <div className='container flex flex-col px-4 mx-auto sm:px-6 md:px-8'>
            <h1 className='my-4 text-2xl text-center text-purple-600 md:my-8 sm:text-3xl lg:text-4xl xl:text-6xl lg:text-left'><span className='font-semibold tracking-wide'>Florin Onciu</span> / <span className='font-light text-purple-800'>Software Developer</span></h1>
            <h2 className='max-w-4xl text-xl font-normal leading-8 text-left text-gray-600 sm:text-2xl lg:text-4xl'>Hi! My name is Florin and I am a <span className='px-2 bg-yellow-300'>Software Developer</span> with a focus on <strong>Frontend Development</strong>. Welcome to my personal page!</h2>
          </div>
        </div>
      </div >

    </>
  )
}
