import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './ShopCategory.scss';
import Header from '~/layout/component/Header';
import Footer from '~/layout/component/Footer';

const cx = classNames.bind(styles);

function ShopCategory(props) {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Dung010402/data/data/`)
            .then((res) => res.json())
            .then((res) => {
                setProduct(res);
            });
    }, [setProduct]);
    return (
        <div>
            <Header />
            <div className={cx('wrapper')}>
                {product.map((item) => {
                    if (props.category === item.category) {
                        return (
                            <Link to={`/product/${item.id}`} className={cx('item')} key={item.id}>
                                <img className={cx('item--img')} src={item.imageMain} alt="" />
                                <div className={cx('item--title')}>{item.title}</div>
                                <div className={cx('item--discount')}>Giảm {item.discount}%</div>
                                <div className={cx('item--bottom')}>
                                    <div className={cx('item--price')}>{item.coinsAfter}.000đ</div>
                                    <div className={cx('item--sold')}>Đã bán {item.sold}</div>
                                </div>
                            </Link>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
            <Footer />
        </div>
    );
}

export default ShopCategory;
