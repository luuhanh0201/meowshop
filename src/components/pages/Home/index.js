/* eslint-disable jsx-a11y/alt-text */
import styles from './Home.module.scss'
import classNames from "classnames/bind";
import { Category, Product } from '~/assets/FakeData/Data';
import { images } from '~/assets/images';
const cx = classNames.bind(styles)
function Home() {

    return (
        <div className={cx('wrapper')} >
            <div className={cx('inner')}>
                <div className={cx('banner')}>
                    <img src="https://lh3.googleusercontent.com/TZJXZBRLeaYuY7plSNyZNXZ3hftpjBjcO0TLnN0E4usjLXp2QK-DElPxBcDP0kEG06Zwz4n7WGSGTTlBdOov7UWzj99CUDEGAKXxQs6a9w" />

                    <div className={cx('seller')}>
                        <p className={cx('title-banner')}>CAT SUPPLIES</p>
                        <p className={cx('sale-banner')}>SALE UP TO 50%</p>
                        <button className={cx('button')} >Explore Now</button>
                    </div>
                </div>
                <div className={cx('category')}>
                    {Category.map((item, index) => (
                        <div key={index} className={cx('item')}>
                            <img src={item.images} />
                            <button className={cx('button')}>
                                {item.type}
                            </button>
                        </div>
                    ))}
                </div>
                <div className={cx('sale')}>
                    <p className={cx('title')}>Deals Of The Month</p>
                    <div className={cx('inner-sale')}>
                        <div className={cx('item-sale')}>
                            <div
                                style={{ background: 'url(https://lh3.googleusercontent.com/W5KS8dpgxSe3CQkzDIoXEzHDyMZroUbFAkZN-YUrbrjimgy7Z-yYHdU1KepGDJ_MtWZYKVzB9rJif___2p1-7dXTYZKol8V9qNc5dziHZQ)' }}
                                className={cx('img-product')}
                            ></div>
                            <div className={cx('info-product')}>
                                <p className={cx('name-product')}>
                                    New Petkit Pura MAX
                                </p>
                                <div className='reviews-product'>
                                    <img src={images.iconStar} />
                                    <img src={images.iconStar} />
                                    <img src={images.iconStar} />
                                    <img src={images.iconStar} />
                                    <img src={images.iconNonStar} />
                                    <span className={cx('review')}>(73)</span>
                                </div>
                                <div>
                                    <span className={cx('price')}>$999</span>
                                    <span className={cx('sold')}>99 sold</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={cx('new-product')}></div>
                <div className={cx('best-selling')}></div>
                <div className={cx('blog')}></div>
            </div>
        </div >
    );
}

export default Home