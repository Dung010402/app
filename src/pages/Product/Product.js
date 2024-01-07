import { useState, useEffect } from 'react';

import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Product.module.scss';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Product() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/product`)
            .then((res) => res.json())
            .then((res) => {
                setProduct(res);
            });
        console.log();
    }, [setProduct]);

    return (
        <div>
            {product.map((result) => (
                <div className={cx('wrapper')}>
                    <div className={cx('image')}>
                        <img className={cx('image-main')} src={result.imageMain} alt="" />

                        <div className={cx('image-group')}>
                            {result.image.map((image) => (
                                <img className={cx('image-child')} src={image.src} alt="ảnh" />
                            ))}
                        </div>
                    </div>

                    <div className={cx('inner')}>
                        <div className={cx('title')}>{result.title}</div>
                        <div className={cx('vote')}>
                            <span>
                                5
                                <span className={'vote-icon'}>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                            </span>
                            <span className={cx('vote-separate')}></span>
                            <span>{result.reviews}</span>
                            Đánh giá
                            <span className={cx('vote-separate')}></span>
                            <span>{result.sold}</span>
                            Đã bán
                        </div>
                        <div className={cx('property')}>
                            <div className={cx('coin')}>
                                <div className={cx('coin-before')}>₫{result.coinsBefore}.000</div>
                                <div className={cx('coin-after')}>đ{result.coinsAfter}.000</div>
                                <div className={cx('coin-discount')}>{result.discount}% giảm</div>
                            </div>

                            <div className={cx('voucher')}>
                                <span className={cx('voucher-title')}>Mã giảm giá của shop</span>
                                <span className={cx('voucher-child')}>{result.discountShop}% Giảm</span>
                            </div>
                            <div className={cx('delivery')}>
                                <div className={cx('delivery-title')}>Vận chuyển</div>
                                <span className={cx('delivery-child')}>Miễn phí vận chuyển</span>
                            </div>
                            <div className={cx('color')}>
                                <div className={cx('color-title')}>Màu</div>
                                <button className={cx('color-types')}>Đen</button>
                                <button className={cx('color-types')}>Trắng</button>
                            </div>
                            <div className={cx('quantity')}>
                                <div className={cx('quantity-title')}>Số lượng</div>

                                <div className={cx('quantity-stock')}>{result.quantityStock} sản phẩm</div>
                            </div>
                            <div className={cx('action')}>
                                <button className={cx('btn-add')}>Thêm vào giỏ</button>
                                <button className={cx('btn-buy')}>Mua ngay</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Product;
