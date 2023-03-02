import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';
const cx = classNames.bind(styles)

const listMenu = [
    {
        path: '/cat-accessories',
        name: 'Cat Accessories',
        className: 'cat-accessories'
    },
    {
        path: '/cat-food',
        name: 'Cat Food',
        className: 'cat-food'
    },
    {
        path: '/cat-furniture',
        name: 'Cat Furniture',
        className: 'cat-furniture'
    },
    {
        path: '/cat-proof-home',
        name: 'Cat Proof Home',
        className: 'cat-proof'
    },
    {
        path: '/cat-feeders',
        name: 'Cat Feeders',
        className: 'cat-feeders'
    },
    {
        path: '/cat-little-boxes',
        name: 'Cat Little Boxes',
        className: 'cat-little'
    },
    {
        path: '/cat-houses',
        name: 'Cat Houses',
        className: 'cat-houses'
    },
    {
        path: '/blog',
        name: 'Blog',
        className: 'blog'
    },


]
function NavBar() {
    const [focusPage, setFocusPage] = useState('')
    // handleFocusPage
    const handleFocusPage = (page) => {
        setFocusPage(page)
    }
    console.log(focusPage)

    return (
        <div className={cx("wrapper")}>
            <ul className={cx("max-width")}>
                {listMenu.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                    >
                        <li
                            className={cx(focusPage === item.className ? 'active' : '' )}
                            onClick={()=>handleFocusPage(`${item.className}`)}
                        >{item.name}</li>

                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default NavBar
