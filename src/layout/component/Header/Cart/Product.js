import classNames from 'classnames/bind';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx('item')}>
            <img
                className={cx('item-img')}
                src="https://down-vn.img.susercontent.com/file/vn-11134201-23030-5xm3nkmg1mov60_tn"
                alt="Anh"
            />
            <div className={cx('item-title')}>
                Hạt điều rang muối A+ nguyên vỏ lụa LOẠI NGON - Hạt điều Bình Phước nguyên hạt, điều vỡ giòn thơm
            </div>
            <div className={cx('item-coin')}>
                50.000<u>đ</u>
            </div>
        </div>
    );
}

export default Product;
