import CallToAction from './CallToAction'

export default function HeroSection() {
    // <div className='relative py-12 text-center bg-red-200 sm:pt-14 md:pt-16 lg:pt-18'>
    //     <img className='absolute top-0 left-0 right-0 z-10 w-24 mx-auto transition-all duration-500 transform sm:w-28 md:w-32 lg:w-36 xl:w-40 animate-slide-top' src='/images/logo-yellow-black-white.svg' alt='website logo'></img>
    //     <div className='relative py-24 bg-no-repeat bg-gradient-to-tr from-yellow-200 to-purple-300 skewed-polygon-sm md:skewed-polygon-lg'>
    //         <div className='container flex flex-col px-4 pt-6 mx-auto text-gray-600 sm:px-6 md:px-8 '>
    //             <h1 className='text-2xl font-semibold sm:text-3xl lg:text-4xl xl:text-6xl lg:text-left'><span className='tracking-wide'>Florin Onciu</span> / Software Developer</h1>
    //             <h2 className='max-w-4xl mt-4 text-xl leading-8 text-gray-700 lg:text-left sm:text-2xl lg:text-3xl selection:bg-yellow-300'>Hi! My name is Florin and I am a <span className='px-2 bg-yellow-300 selection:bg-purple-500 selection:text-gray-200'>Software Developer</span> with a focus on <strong>Frontend Development</strong>. I care about simple and performant code, clean design and well architected apps. Welcome to my personal page!</h2>
    //             <CallToAction btnText={'Download Resume'} linkProps={{ href: '/cv-florin-cosmin-pstbst.pdf', download: true }} />
    //         </div>
    //     </div>
    // </div>

    return (
        <div className='relative z-0 py-4 text-center border border-gray-100 bg-gray-50 sm:pt-8 md:pt-12'>
            <img className='inline-block w-24 transition-all duration-500 transform sm:w-28 md:w-32 lg:w-36 xl:w-40 animate-slide-top' src='/images/logo-yellow-black-white.svg' alt='website logo'></img>
            <div className='relative py-12 -top-12 md:py-16 md:-top-16 before:absolute before:inset-0 before:transform before:origin-center before:backface-hidden before:bg-gradient-to-tr before:from-yellow-200 before:to-purple-300 before:-skew-y-3 sm:before:-skew-y-2 before:-z-1'>
                <div className='container flex flex-col px-4 pt-6 mx-auto text-gray-600 sm:px-6 md:px-8 '>
                    <h1 className='text-2xl font-semibold sm:text-3xl lg:text-4xl xl:text-6xl lg:text-left'><span className='tracking-wide'>Florin Onciu</span> / Software Developer</h1>
                    <h2 className='max-w-4xl mt-4 text-xl leading-8 text-gray-700 lg:text-left sm:text-2xl lg:text-3xl selection:bg-yellow-300'>Hi! My name is Florin and I am a <span className='px-2 bg-yellow-300 selection:bg-purple-500 selection:text-gray-200'>Software Developer</span> with a focus on <strong>Frontend Development</strong>. I care about simple and performant code, clean design and well architected apps. Welcome to my personal page!</h2>
                    <CallToAction btnText={'Download Resume'} linkProps={{ href: '/florin-onciu-resume.pdf', download: true }} />
                </div>
            </div>
        </div>
    )
}
