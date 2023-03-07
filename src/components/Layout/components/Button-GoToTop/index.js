/* eslint-disable jsx-a11y/alt-text */
import { images } from "~/assets/images";
import styles from './Button-GoToTop.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)
function ButtonGoToTop() {
    return ( 
        <div>
            <button className={cx('button')}>
                <img src={images.iconArrowTop} />
            </button>
        </div>
     );
}

export default ButtonGoToTop;