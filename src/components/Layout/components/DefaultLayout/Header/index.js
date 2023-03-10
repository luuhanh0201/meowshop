/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { icons } from '~/assets/icons'
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss'

const cx = classNames.bind(styles)
function Header(children) {
    // const [search, setSearch] = useState('')
    // const [searchHistory, setSearchHistory] = useState([])
    // const handleSetHistory = function () {
        // // setSearchHistory([...searchHistory, search])
        // setSearch('')
        // localStorage.setItem('setHistory',)
    // }

    // function handleKeyPress(event) {
    //     if (event.key === 'Enter') {
    //         handleSetHistory()
    //     }
    // }
    return (
        <header className={cx('wrapper')}>
            <div className={cx('detail')}>
                <p>
                    <span>free shipping</span> with $20 Purchase <a href='#'>Detail</a>
                </p>
            </div>
            <div className={cx('inner')}>
                <ul className={cx('sub-menu')}>
                    <li className={cx('sub-menu__item')}><a href='#' className={cx('sub-menu__name')}>Help</a></li>
                    <li className={cx('sub-menu__item')}><a href='#' className={cx('sub-menu__name')}>Order Tracker</a></li>
                    <li className={cx('sub-menu__item')}><a href='#' className={cx('sub-menu__name')}>About Us</a></li>
                    <li className={cx('sub-menu__item')}><a href='#' className={cx('sub-menu__name')}>Newsletter</a></li>
                    <li className={cx('sub-menu__item')}><Link to='/signup'>Signup</Link></li>
                </ul>
                <div className={cx('header-width-search')}>
                    {/* logo */}
                    <Link to='/'><img className={cx('logo')} src={icons.logo} alt='MeoShop' /></Link>
                    {/* search */}


                    {/* Search history */}



                    <div className={cx('search')}>
                        <input 
                        //  onChange={e => setSearch(e.target.value)} 
                         className={cx('input')} type='text' placeholder='What can we help you find?' />
                        <button
                            // onClick={handleSetHistory}
                        >Search</button>
                        <img className={cx('icon-search')} src={icons.iconSearch} />

                        {/* {
                            searchHistory.length !== 0 ? (
                                <div className={cx('result-search')}>
                                    <p className={cx('history')}>History</p>
                                    <ul>
                                        {searchHistory.map((a, b) => (
                                            <li>{a}</li>
                                        ))}
                                    </ul>
                                </div>) : null
                        } */}
                    </div>


                    {/* icon */}
                    <div className={cx('icon')}>
                        <a className={cx('item__icon item__icon-user')} href='#'><img src={icons.iconUser} /></a>
                        <a className={cx('item__icon item__icon-heart')} href='#'><img src={icons.iconHeart} /></a>
                        <a className={cx('item__icon item__icon-cart')} href='#'><img src={icons.iconCart} /></a>
                    </div>
                </div>
            </div>


            
        </header>
    );
}

export default Header
