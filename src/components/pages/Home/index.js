/* eslint-disable jsx-a11y/alt-text */
import styles from './Home.module.scss'
import classNames from "classnames/bind";
import { Category, Product, Blogs } from '~/assets/FakeData/Data';
import { icons } from '~/assets/icons';
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
                    <img src={images.banner} alt='err' />
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
                                                title={product.name}
                                            >
                                                <span className={cx('sale-product')}>{product.selling}</span>
                                                <img
                                                    onClick={() => handleToggleFavorite(index)}
                                                    className={cx('like-product')}
                                                    src={isFavorite ? icons.iconFullHeart : icons.iconBorderHeart}
                                                />
                                            </div>
                                            <div className={cx('info-product')}>
                                                <p className={cx('name-product')}>
                                                    {product.name}
                                                </p>
                                                <div className='reviews-product'>
                                                    <img src={icons.iconStar} />
                                                    <img src={icons.iconStar} />
                                                    <img src={icons.iconStar} />
                                                    <img src={icons.iconStar} />
                                                    <img src={icons.iconNonStar} />
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

                    <button className={cx('prev')}><img src={icons.iconPrev} /></button>
                    <button className={cx('next')}><img src={icons.iconNext} /></button>


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
                                                    title={product.name}
                                                >

                                                    <img
                                                        onClick={() => handleToggleFavorite(index)}
                                                        className={cx('like-product')}
                                                        src={isFavorite ? icons.iconFullHeart : icons.iconBorderHeart}
                                                    />
                                                </div>
                                                <div className={cx('info-product')}>
                                                    <p className={cx('name-product')}>
                                                        {product.name}
                                                    </p>
                                                    <div className='reviews-product'>
                                                        <img src={icons.iconStar} />
                                                        <img src={icons.iconStar} />
                                                        <img src={icons.iconStar} />
                                                        <img src={icons.iconStar} />
                                                        <img src={icons.iconNonStar} />
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
                        <button className={cx('prev')}><img src={icons.iconPrev} /></button>
                        <button className={cx('next')}><img src={icons.iconNext} /></button>

                    </div>
                </div>
                <div className={cx('best-selling')}>
                    <div className={cx('sale')}>
                        <p className={cx('title')}>Best Selling</p>
                        <div className={cx('inner-sale')}>
                            {/* items */}
                            {
                                Product.map((product, index) => {
                                    if (index >=10 && index < 15) {
                                        const isFavorite = favorites.includes(index);
                                        return (
                                            <div key={index} className={cx('item-sale')}>
                                                <div
                                                    style={{ backgroundImage: `url(${product.image})` }}
                                                    className={cx('img-product')}
                                                    title={product.name}
                                                >

                                                    <img
                                                        onClick={() => handleToggleFavorite(index)}
                                                        className={cx('like-product')}
                                                        src={isFavorite ? icons.iconFullHeart : icons.iconBorderHeart}
                                                    />
                                                </div>
                                                <div className={cx('info-product')}>
                                                    <p className={cx('name-product')}>
                                                        {product.name}
                                                    </p>
                                                    <div className='reviews-product'>
                                                        <img src={icons.iconStar} />
                                                        <img src={icons.iconStar} />
                                                        <img src={icons.iconStar} />
                                                        <img src={icons.iconStar} />
                                                        <img src={icons.iconNonStar} />
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
                        <button className={cx('prev')}><img src={icons.iconPrev} /></button>
                        <button className={cx('next')}><img src={icons.iconNext} /></button>

                    </div>
                </div>
                <div className={cx('blog')}>
                    <p className={cx('title')}>Recent Blogs</p>
                    <div className={cx('inner-blog')}>

                        {Blogs.map((blog, index) => {
                            if (index < 3) {
                                return (
                                    <div key={index} className={cx('item-blog')}>
                                        <div className={cx('img-blog')}>
                                            <img src={blog.image} />
                                        </div>
                                        <div className={cx('container-blog')}>
                                            <div className={cx('blog-name')}><p className={cx('name-blog')}>{blog.title}</p></div>
                                            <div className={cx('blog-content')}> <p className={cx('content-blog')}>{blog.previewContent}</p></div>

                                        </div>
                                    </div>
                                )
                            }
                        })}


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home