/* eslint-disable jsx-a11y/alt-text */
import styles from './Home.module.scss'
import classNames from "classnames/bind";
import { Category, Product } from '~/assets/FakeData/Data';
import { images } from '~/assets/images';
import { useState } from 'react';
const cx = classNames.bind(styles)
function Home() {
    const [favorites, setFavorites] = useState([])
    function handleToggleFavorite(index) {
        if (favorites.includes(index)) {
            setFavorites(favorites.filter((i) => i !== index));
        } else {
            setFavorites([...favorites, index]);
        }
    }

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
                        {/* items */}
                        {
                            Product.map((product, index) => {
                                if (index < 5) {
                                    const isFavorite = favorites.includes(index);
                                    return (
                                        <div key={index} className={cx('item-sale')}>
                                            <div
                                                style={{ backgroundImage: `url(${product.image})` }}
                                                className={cx('img-product')}
                                            >
                                                <span className={cx('sale-product')}>{product.selling}</span>
                                                <img
                                                    onClick={() => handleToggleFavorite(index)}
                                                    className={cx('like-product')}
                                                    src={isFavorite ? images.iconFullHeart : images.iconBorderHeart}
                                                />
                                            </div>
                                            <div className={cx('info-product')}>
                                                <p className={cx('name-product')}>
                                                    {product.name}
                                                </p>
                                                <div className='reviews-product'>
                                                    <img src={images.iconStar} />
                                                    <img src={images.iconStar} />
                                                    <img src={images.iconStar} />
                                                    <img src={images.iconStar} />
                                                    <img src={images.iconNonStar} />
                                                    <span className={cx('review')}>(73)</span>
                                                </div>
                                                <div className={cx('buy')}>
                                                    <span className={cx('price')}>{product.price}</span>
                                                    <span className={cx('sold')}>({product.sold}) sold</span>
                                                </div>
                                                <button className={cx('button-buy')}>ADD TO CART</button>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                    <div className={cx('dots')}>
                        <span className={cx('dot', 'active')}></span>
                        <span className={cx('dot')}></span>
                        <span className={cx('dot')}></span>
                    </div>

                    <button className={cx('prev')}><img src={images.iconPrev} /></button>
                    <button className={cx('next')}><img src={images.iconNext} /></button>


                </div>
                <div className={cx('new-product')}>'
                    <div className={cx('sale')}>
                        <p className={cx('title')}>New  Arrivals</p>
                        <div className={cx('inner-sale')}>
                            {/* items */}
                            {
                                Product.map((product, index) => {
                                    if (index >= 5 && index < 10) {
                                        const isFavorite = favorites.includes(index);
                                        return (
                                            <div key={index} className={cx('item-sale')}>
                                                <div
                                                    style={{ backgroundImage: `url(${product.image})` }}
                                                    className={cx('img-product')}
                                                >

                                                    <img
                                                        onClick={() => handleToggleFavorite(index)}
                                                        className={cx('like-product')}
                                                        src={isFavorite ? images.iconFullHeart : images.iconBorderHeart}
                                                    />
                                                </div>
                                                <div className={cx('info-product')}>
                                                    <p className={cx('name-product')}>
                                                        {product.name}
                                                    </p>
                                                    <div className='reviews-product'>
                                                        <img src={images.iconStar} />
                                                        <img src={images.iconStar} />
                                                        <img src={images.iconStar} />
                                                        <img src={images.iconStar} />
                                                        <img src={images.iconNonStar} />
                                                        <span className={cx('review')}>(73)</span>
                                                    </div>
                                                    <div className={cx('buy')}>
                                                        <span className={cx('price')}>{product.price}</span>
                                                        <span className={cx('sold')}>({product.sold}) sold</span>
                                                    </div>
                                                    <button className={cx('button-buy')}>ADD TO CART</button>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div className={cx('dots')}>
                            <span className={cx('dot', 'active')}></span>
                            <span className={cx('dot')}></span>
                            <span className={cx('dot')}></span>
                        </div>
                        <button className={cx('prev')}><img src={images.iconPrev} /></button>
                        <button className={cx('next')}><img src={images.iconNext} /></button>

                    </div>
                </div>
                <div className={cx('best-selling')}>
                <div className={cx('sale')}>
                        <p className={cx('title')}>Best Selling</p>
                        <div className={cx('inner-sale')}>
                            {/* items */}
                            {
                                Product.map((product, index) => {
                                    if (index >= 6 && index <= 11) {
                                        const isFavorite = favorites.includes(index);
                                        return (
                                            <div key={index} className={cx('item-sale')}>
                                                <div
                                                    style={{ backgroundImage: `url(${product.image})` }}
                                                    className={cx('img-product')}
                                                >

                                                    <img
                                                        onClick={() => handleToggleFavorite(index)}
                                                        className={cx('like-product')}
                                                        src={isFavorite ? images.iconFullHeart : images.iconBorderHeart}
                                                    />
                                                </div>
                                                <div className={cx('info-product')}>
                                                    <p className={cx('name-product')}>
                                                        {product.name}
                                                    </p>
                                                    <div className='reviews-product'>
                                                        <img src={images.iconStar} />
                                                        <img src={images.iconStar} />
                                                        <img src={images.iconStar} />
                                                        <img src={images.iconStar} />
                                                        <img src={images.iconNonStar} />
                                                        <span className={cx('review')}>(73)</span>
                                                    </div>
                                                    <div className={cx('buy')}>
                                                        <span className={cx('price')}>{product.price}</span>
                                                        <span className={cx('sold')}>({product.sold}) sold</span>
                                                    </div>
                                                    <button className={cx('button-buy')}>ADD TO CART</button>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div className={cx('dots')}>
                            <span className={cx('dot', 'active')}></span>
                            <span className={cx('dot')}></span>
                            <span className={cx('dot')}></span>
                        </div>
                        <button className={cx('prev')}><img src={images.iconPrev} /></button>
                        <button className={cx('next')}><img src={images.iconNext} /></button>

                    </div>
                </div>
                <div className={cx('blog')}></div>
            </div>
        </div>
    );
}

export default Home