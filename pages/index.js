import Head from 'next/head'

export default function Home() {

  return (
    <>
      <Head>
        <title>Florin Cosmin | Personal Website</title>
      </Head>

      {/* <!-- menubar --> */}
      <div className='flex flex-col items-center md:flex-row justify-end border-b border-purple-100'>
        <a className='w-full px-8 py-2 text-center transition-all duration-300 border-l-4 border-transparent md:border-l-0 md:border-b-4 md:w-auto md:py-6 hover:bg-purple-200 hover:cursor-pointer hover:text-purple-900 hover:underline hover:border-purple-800'>Blog</a>
        <a className='w-full px-8 py-2 text-center transition-all duration-300 border-l-4 border-transparent md:border-l-0 md:border-b-4 md:w-auto md:py-6 hover:bg-purple-200 hover:cursor-pointer hover:text-purple-900 hover:underline hover:border-purple-800'>Projects</a>
        <a className='w-full px-8 py-2 text-center transition-all duration-300 border-l-4 border-transparent md:border-l-0 md:border-b-4 md:w-auto md:py-6 hover:bg-purple-200 hover:cursor-pointer hover:text-purple-900 hover:underline hover:border-purple-800'>Skills</a>
        <a className='w-full px-8 py-2 text-center transition-all duration-300 border-l-4 border-transparent md:border-l-0 md:border-b-4 md:w-auto md:py-6 hover:bg-purple-200 hover:cursor-pointer hover:text-purple-900 hover:underline hover:border-purple-800'>Contact</a>
        <a className='w-full px-8 py-2 text-center transition-all duration-300 border-l-4 border-transparent md:border-l-0 md:border-b-4 md:w-auto md:py-6 hover:bg-purple-200 hover:cursor-pointer hover:text-purple-900 hover:underline hover:border-purple-800 flex gap-x-1 align-center justify-center'>
          <svg className='w-6 h-6 text-gray-66' viewBox='0 0 16 16' aria-hidden='true'>
            <path fill-rule='evenodd' d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'></path>
          </svg>
          Github
        </a>
      </div>

      <div className='relative z-0 pt-4 text-center sm:pt-8 md:pt-12 bg-white'>
        <img className='inline-block w-24 transition-all duration-500 transform sm:w-28 md:w-32 lg:w-36 xl:w-40 animate-slide-top' src='/images/logo-yellow-black-white.svg' alt='website logo'></img>
        <div className='relative py-12 -top-12 md:py-16 md:-top-16 before:absolute before:inset-0 before:transform before:origin-center before:backface-hidden before:bg-gradient-to-tr before:from-yellow-200 before:to-purple-300 before:-skew-y-3 sm:before:-skew-y-2 before:-z-1'>
          <div className='container flex flex-col px-4 mt-6 mx-auto text-gray-600 sm:px-6 md:px-8 '>
            <h1 className='text-2xl font-semibold sm:text-3xl lg:text-4xl xl:text-6xl lg:text-left'><span className='tracking-wide'>Florin Onciu</span> / Software Developer</h1>
            <h2 className='mt-4 max-w-4xl text-xl leading-8 lg:text-left text-gray-700 sm:text-2xl lg:text-3xl selection:bg-yellow-300'>Hi! My name is Florin and I am a <span className='px-2 bg-yellow-300 selection:bg-purple-500 selection:text-gray-200'>Software Developer</span> with a focus on <strong>Frontend Development</strong>. I care about simple and performant code, clean design and well architected apps. Welcome to my personal page!</h2>
            <a href='#' className='mt-6 self-center lg:self-start bg-purple-500 text-gray-200 px-8 py-4 border-1 rounded-lg border-purple-200 hover:bg-purple-600 text-xl flex justify-center align-center transition-all hover:-translate-y-1'>
              <span className='text-purple-300 inline-block mr-2'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10' />
                </svg>
              </span>Download Resume
            </a>
          </div>
        </div>
      </div>

      <section className='px-4 bg-white'>
        <div className='container px-4 pb-8 mx-auto sm:px-6 md:px-8'>
          <h2 className='mb-4 text-2xl font-semibold text-gray-700'><span className='inline-block pb-1 border-b-4 border-yellow-400'>Latest Blog Posts</span></h2>

          <div className='flex flex-col space-y-2 mb-4'>
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

          <a href='#' className='bg-purple-200 text-gray-700 px-4 py-2 border-1 rounded-lg border-purple-400 hover:bg-purple-300 text-xl transition-all hover:-translate-y-1'>
            Check all blogs
          </a>
        </div>
      </section>

      <section className='px-4 py-8 bg-gray-200'>
        <div className='container px-4 mx-auto sm:px-6 md:px-8'>
          <h2 className='mb-4 text-2xl font-semibold text-gray-700'><span className='inline-block pb-1 border-b-4 border-yellow-400'>Blog posts tags</span></h2>
          <ul className='flex flex-wrap gap-x-4 gap-y-2 py-4'>
            <li className='px-4 py-2 rounded-full inline-block text-gray-500 bg-yellow-300'><a className='' href='#'>JavaScript</a></li>
            <li className='px-4 py-2 rounded-full inline-block text-white bg-blue-500'><a className='' href='#'>TypeScript</a></li>
            <li className='px-4 py-2 rounded-full inline-block text-white bg-red-500'><a className='' href='#'>Angular</a></li>
            <li className='px-4 py-2 rounded-full inline-block text-white bg-blue-700'><a className='' href='#'>React.js</a></li>
            <li className='px-4 py-2 rounded-full inline-block text-white bg-green-500'><a className='' href='#'>Node.js</a></li>
            <li className='px-4 py-2 rounded-full inline-block text-gray-200 bg-yellow-600'><a className='' href='#'>Bash</a></li>
          </ul>
        </div>
      </section>

      <footer className='container py-8 px-4 mx-auto sm:px-6 md:px-8 text-lg flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-between lg:align-center'>
        <ul className='flex gap-x-4 justify-center text-gray-500'>
          <li><a href='#' className='hover:text-purple-500'>Github</a></li>
          <li><a href='#' className='hover:text-purple-500'>Linkedin</a></li>
          <li><a href='#' className='hover:text-purple-500'>Twitter</a></li>
        </ul>
        <p className='text-center lg:text-right pt-4 border-t border-gray-200 text-gray-400 flex-1 lg:pt-0 lg:border-t-0'>Built with <span className='text-red-500'>❤️</span> using Next.js, Preact and Tailwind CSS. © 2021 <span className=''>florin-cosmin.dk</span></p>

      </footer>
    </>
  )
}
