import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Shop } from '~/components/Shop';
import styles from './Cart.module.scss';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('inner')}>
                    <div className={cx('logo')}>
                        <Link to="/" className={cx('logo-img')}>
                            <img
                                src="//bizweb.dktcdn.net/100/438/408/themes/916476/assets/logo.svg?1691124644531"
                                alt="shop"
                            />
                        </Link>
                        <div className={cx('title')}>Giỏ hàng</div>
                    </div>
                    <div className={cx('input')}>
                        <input placeholder="Tìm kiếm ở đây" />
                        <FontAwesomeIcon className={cx('icon')} icon={faSearch} />
                    </div>
                </div>
            </div>
            <div className={cx('container')}>
                <div className={cx('container--title')}>
                    <div>
                        <input type="checkbox" />
                        <span>Sản phẩm</span>
                    </div>
                    <div className={cx('title--young')}>
                        <span>Đơn giá</span>
                        <span>Số lượng</span>
                        <span>Số tiền</span>
                        <span>Thao tác</span>
                    </div>
                </div>
                <Shop />
                <Shop />

                <div className={cx('operation')}>
                    <div>
                        <input type="checkbox" />
                        <span>Chọn tất cả</span>
                        <span>Xóa</span>
                    </div>
                    <div>
                        <span>Tổng thanh toán:</span>
                        <span>0</span>
                        <button>Mua hàng</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
