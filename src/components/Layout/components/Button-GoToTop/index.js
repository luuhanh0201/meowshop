/* eslint-disable jsx-a11y/alt-text */
import { icons } from "~/assets/icons";
import styles from './Button-GoToTop.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)
function ButtonGoToTop() {
    return ( 
        <div>
            <button className={cx('button')}>
                <img src={icons.iconArrowTop} />
            </button>
        </div>
     );
}

export default ButtonGoToTop;