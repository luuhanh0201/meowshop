/* eslint-disable jsx-a11y/alt-text */
import styles from "./Footer.module.scss"
import classNames from "classnames/bind";
import { images } from "~/assets/images";

const cx = classNames.bind(styles)


function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Footer 1 */}
                <div className={cx('footer1')}>
                    <img className={cx('logo')} src={images.logo} />
                    <p className={cx('title')}>We Have Everything For Cat Here!</p>
                    <div className={cx('information')}>
                        <p>Subscribe To Our Newsletter</p>
                        <span>New blogs about cats every week!</span>
                        <div className={cx('input-email')}>
                            <input type='text' placeholder="YOUR EMAIL ADDRESS" />
                            <button type="submit">SUBSCRIBE</button>

                        </div>
                    </div>
                </div>
                {/* Footer 2 */}
                <div className={cx('footer2')} >
                    <div className={cx("item1")}>
                        <p className={cx('title')}>Where's my order?</p>
                        <button className={cx('order')}>TRACK ORDER</button>
                        <p className={cx('text')}>Please note, it may take longer
                            than usual to fulfill orders due
                            to the impacts of COVID-19.</p>
                    </div>
                    <div className={cx("item2")}>
                        <p className={cx('title')}>Shipping</p>
                        <p className={cx('text')}>About Free Shipping</p>
                        <p className={cx('text')}>Shipping Information</p>
                    </div>
                    <div className={cx("item3")}>
                        <p className={cx('title')}>Shopping App</p>
                        <p className={cx('text')}>Try our View in Your Room
                            feature, manage registries
                            and save payment info.</p>
                        <img style={{cursor: 'pointer'}} src={images.appStore} />
                    </div>
                    <div className={cx("item4")}>
                        <p className={cx('title')}>Our Company</p>
                        <p className={cx('text')}>About Us</p>
                        <p className={cx('text')}>Careers</p>
                        <p className={cx('text')}>Contact</p>
                        <p className={cx('text')}>Store locations</p>
                    </div>
                    <div className={cx("item5")}>
                        <p className={cx('title')}>Social Media</p>
                        <div className={cx('icon-social')}>
                            <img onClick={()=>{window.open("https://www.facebook.com/ldh211");}} src={images.iconFacebook} />
                            <img onClick={()=>{window.open("https://www.instagram.com/")}} src={images.iconInstagram} />
                            <img onClick={()=>{window.open("https://www.youtube.com/")}} src={images.iconYoutube} />
                            <img onClick={()=>{window.open("https://twitter.com/")}} src={images.iconTwitter} />

                        </div>
                        <ul>
                            <li>Show us your cat with:</li>
                            <li>#meowshop</li>
                            <li>#themeowshop</li>
                        </ul>
                    </div>
                    <div className={cx("item6")}>
                        <p className={cx('title')}>Policies</p>
                        <p className={cx('text')}>Shipping Policy</p>
                        <p className={cx('text')}>Refund Policy</p>
                        <p className={cx('text')}>Privacy Policy</p>
                        <p className={cx('text')}>Terms of Service</p>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Footer;