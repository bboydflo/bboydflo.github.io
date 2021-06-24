export default function HeadingSecondary({ headingText }) {
    return (
        <h2 className='text-2xl font-semibold text-gray-700 md:text-4xl'>
            <span className='inline-block pb-1 border-b-4 border-yellow-400'>{headingText}</span>
        </h2>
    )
}
