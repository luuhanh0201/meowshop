import ButtonGoToTop from '../Button-GoToTop';
import Footer from './Footer';
import Header from './Header'
import NavBar from './NavBar'
// import styles from ''
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <NavBar />
            <div className='container'>
                <ButtonGoToTop  />
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;