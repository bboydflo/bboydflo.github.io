import Section from './Section'

export default function Footer() {
    // <footer className='container flex flex-col px-4 py-8 mx-auto space-y-4 text-lg sm:px-6 md:px-8 lg:flex-row lg:space-y-0 lg:space-between lg:align-center'>
    //     <ul className='flex justify-center text-gray-500 gap-x-4'>
    //         <li><a href='#' className='hover:text-purple-500'>Github</a></li>
    //         <li><a href='#' className='hover:text-purple-500'>Linkedin</a></li>
    //         <li><a href='#' className='hover:text-purple-500'>Twitter</a></li>
    //     </ul>
    //     <p className='flex-1 pt-4 text-center text-gray-400 border-t border-gray-200 lg:text-right lg:pt-0 lg:border-t-0'>Built with <span className='text-red-500'>❤️</span> using Next.js, Preact and Tailwind CSS. © 2021 <span className=''>florin-cosmin.dk</span></p>
    // </footer>
    return (
        <Section extraClasses=''>
            <footer className='flex flex-col mx-auto space-y-4 text-lg lg:flex-row lg:space-y-0 lg:space-between lg:align-center'>
                <ul className='flex justify-center text-gray-500 gap-x-4'>
                    <li><a href='#' className='hover:text-purple-500'>Github</a></li>
                    <li><a href='#' className='hover:text-purple-500'>Linkedin</a></li>
                    <li><a href='#' className='hover:text-purple-500'>Twitter</a></li>
                </ul>
                <p className='flex-1 pt-4 text-center text-gray-400 border-t border-gray-200 lg:text-right lg:pt-0 lg:border-t-0'>Built with <span className='text-red-500'>❤️</span> using Next.js, Preact and Tailwind CSS. © 2021 <span className=''>florin-cosmin.dk</span></p>
            </footer>
        </Section>
    )
}
