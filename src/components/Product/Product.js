import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Product.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Product({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('shop')}>
                <input type="checkbox" />
                <Link className={cx('shop--name')}>{data.nameShop}</Link>
                <Link>
                    <FontAwesomeIcon className={cx('shop--icon')} icon={faComments} />
                </Link>
            </div>
            <div className={cx('item')}>
                <div>
                    <input type="checkbox" />

                    <img className={cx('image')} src={data.imageMain} alt={data.nickNameShop} />
                    <div className={cx('property')}>{data.title}</div>
                </div>
                <div>
                    <div className={cx('unit--coin')}>{data.coins}</div>
                    <div className={cx('quantity')}>3</div>
                    <div className={cx('coin')}>{data.coins}</div>
                    <div className={cx('action')}>Xóa</div>
                </div>
            </div>
        </div>
    );
}

Product.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Product;
