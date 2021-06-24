export default function CallToAction({ linkProps, btnText }) {
    return (
        <a {...linkProps} className='flex self-center justify-center px-8 py-4 mt-6 text-xl text-gray-200 transition-all bg-purple-500 border border-purple-200 rounded-lg lg:self-start hover:bg-purple-600 align-center hover:-translate-y-1'>
            <span className='inline-block mr-2 text-purple-300'>
                <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10' />
                </svg>
            </span>{btnText}
        </a>
    )
}
