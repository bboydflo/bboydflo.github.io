import Menubar from './Menubar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <Menubar/>
            {children}
            <Footer/>
        </>
    )
}
