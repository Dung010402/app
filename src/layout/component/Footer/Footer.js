import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('list')}>
                    <div className={cx('list-item')}>
                        <div className={cx('item-name')}>Chăm sóc khách hàng</div>
                        <div className={cx('item-descr')}>
                            <Link className={cx('description-text')}>Trung tâm trợ giúp</Link>
                            <Link className={cx('description-text')}>Chính sách bảo hành</Link>
                            <Link className={cx('description-text')}>Hoàn hàng và trả tiền</Link>
                        </div>
                    </div>
                    <div className={cx('list-item')}>
                        <div className={cx('item-name')}>Về chúng tôi</div>
                        <div className={cx('item-descr')}>
                            <Link className={cx('description-text')}>Giới thiệu</Link>
                            <Link className={cx('description-text')}>Điều khoản</Link>
                            <Link className={cx('description-text')}>Chính sách bảo mật</Link>
                            <Link className={cx('description-text')}>Liên hệ</Link>
                        </div>
                    </div>
                    <div className={cx('list-item')}>
                        <div className={cx('item-name')}>Chăm sóc khách hàng</div>
                        <div className={cx('item-descr')}>
                            <Link className={cx('description-text')}>Trung tâm trợ giúp</Link>
                            <Link className={cx('description-text')}>Chính sách bảo hành</Link>
                            <Link className={cx('description-text')}>Hoàn hàng và trả tiền</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
