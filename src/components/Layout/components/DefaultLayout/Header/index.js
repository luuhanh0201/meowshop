/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './Header.scss'
import  {images}  from '~/assets/images'
function Header(children) {
    return (
        <header className='wrapper'>
            <div className='detail'>
                <p>
                    <span>free shipping</span> with $20 Purchase <a href='#'>Detail</a>
                </p>
            </div>
            <div className='inner'>

                <img src={images.logo} alt='MeoShop' />





                {/* logo */}
                {/* search */}
                Header
                {/* icon */}
            </div>
        </header>
    );
}

export default Header
