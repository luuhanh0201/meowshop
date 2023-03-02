import Footer from './Footer';
import Header from './Header'
import NavBar from './NavBar'

function DefaultLayout({children}) {
    return ( 
        <div>
            <Header/>
            <NavBar/>
            <div className='container'>
                {children}
            </div>
            <Footer/>
        </div>
     );
}

export default DefaultLayout;