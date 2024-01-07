import { useEffect, useState } from 'react';
import ProductItem from '~/components/Product/Product';

function Shop() {
    const [productItem, setProductItem] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/data`)
            .then((res) => res.json())
            .then((res) => {
                setProductItem(res);
                console.log(res);
            })
            .catch(() => {
                console.log('lỗi');
            });
    }, [setProductItem]);

    return (
        <div>
            {productItem.map((result) => (
                <ProductItem key={result.id} data={result} />
            ))}
        </div>
    );
}

export default Shop;
