import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Cart.module.scss';
import Product from './Product';
const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('header')}>Giỏ hàng của bạn</h4>
            <Product />
            <Product />
            <Product />

            <div>
                <Link to="/cart">
                    <button className={cx('button')}>Xem giỏ hàng</button>
                </Link>
            </div>
        </div>
    );
}

export default Cart;
