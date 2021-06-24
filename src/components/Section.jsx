export default function Section({ extraClasses, children }) {
    return (
        <section className={`px-4 py-4 sm:py-6 md:py-8 sm:px-6 md:px-8  ${extraClasses ? extraClasses : ''}`}>
            <div className='container mx-auto'>
                {children}
            </div>
        </section>
    )
}
