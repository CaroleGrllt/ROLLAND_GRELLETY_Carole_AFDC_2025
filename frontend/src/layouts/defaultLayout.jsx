import Header from './header'; 
import Footer from './footer';

export default function DefaultLayout({ children }) {
    return (
        <div className="default-layout-display">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}