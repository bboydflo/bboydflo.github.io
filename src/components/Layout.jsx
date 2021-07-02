import Menubar from './Menubar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div className='flex flex-col min-h-screen'>
            <Menubar/>
            {children}
            <div className='mt-auto'>
                <Footer/>
            </div>
        </div>
    )
}
