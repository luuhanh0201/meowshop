/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { images } from '~/assets/images'
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss'

const cx = classNames.bind(styles)
function Header(children) {
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
                    <li className={cx('sub-menu__item')}><a href='#' className={cx('sub-menu__name')}>Signup</a></li>
                </ul>
                <div className={cx('header-width-search')}>
                    {/* logo */}
                    <Link to='/'><img className={cx('logo')} src={images.logo} alt='MeoShop' /></Link>
                    {/* search */}
                    <div className={cx('search')}>
                        <input className={cx('input')} type='text' placeholder='What can we help you find?' />
                        <button>Search</button>
                        <img className={cx('icon-search')} src={images.iconSearch}/>
                    </div>

                    {/* icon */}
                    <div className={cx('icon')}>
                        <a className={cx('item__icon item__icon-user')} href='#'><img src={images.iconUser} /></a>
                        <a className={cx('item__icon item__icon-heart')} href='#'><img src={images.iconHeart} /></a>
                        <a className={cx('item__icon item__icon-cart')} href='#'><img src={images.iconCart} /></a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header
