import { useEffect, useState } from 'react';
import ProductItem from '~/components/Product/Product';
import classNames from 'classnames/bind';
import styles from './Shop.module.scss';

const cx = classNames.bind(styles);

function Shop() {
    const [productItem, setProductItem] = useState([]);
    useEffect(() => {
        fetch(`https://dung010402.github.io/data/db.json`)
            .then((res) => res.json())
            .then((res) => {
                setProductItem(res.data);
                console.log(res.data);
            });
    }, [setProductItem]);

    return (
        <div className={cx('wrapper')}>
            {productItem.map((result) => (
                <ProductItem key={result.id} data={result} />
            ))}
        </div>
    );
}

export default Shop;
