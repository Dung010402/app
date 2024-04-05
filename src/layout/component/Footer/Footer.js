import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('list')}>
                    <div className={cx('list-item')}>
                        <div className={cx('item-name')}>Thông tin liên hệ</div>
                        <div className={cx('item-descr')}>
                            <span className={cx('description-text')}>
                                <p>Địa chỉ: Hà Nội</p>
                            </span>
                            <span className={cx('description-text')}>
                                <p>Điện thoại: 0334099685</p>
                            </span>
                            <span className={cx('description-text')}>
                                <p>Email: dinhvandung2002s@gmail.com</p>
                            </span>
                        </div>
                    </div>
                    <div className={cx('list-item')}>
                        <div className={cx('item-name')}>Chăm sóc khách hàng</div>
                        <div className={cx('item-descr')}>
                            <Link className={cx('description-action')}>
                                <p>Trung tâm trợ giúp</p>
                            </Link>
                            <Link className={cx('description-action')}>
                                <p>Chính sách bảo hành</p>
                            </Link>
                            <Link className={cx('description-action')}>
                                <p>Hoàn hàng và trả tiền</p>
                            </Link>
                        </div>
                    </div>
                    <div className={cx('list-item')}>
                        <div className={cx('item-name')}>Về chúng tôi</div>
                        <div className={cx('item-descr')}>
                            <Link className={cx('description-action')}>
                                <p>Giới thiệu</p>
                            </Link>
                            <Link className={cx('description-action')}>
                                <p>Điều khoản</p>
                            </Link>
                            <Link className={cx('description-action')}>
                                <p>Chính sách bảo mật</p>
                            </Link>
                            <Link className={cx('description-action')}>
                                <p>Liên hệ</p>
                            </Link>
                        </div>
                    </div>
                    <div className={cx('list-item')}>
                        <div className={cx('item-name')}>Theo dõi trên</div>
                        <div className={cx('item-descr')}>
                            <Link className={cx('description-action')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faFacebook} />
                                <p>Facebook</p>
                            </Link>
                            <Link className={cx('description-action')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faInstagram} />
                                <p>Instagram</p>
                            </Link>
                            <Link className={cx('description-action')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faGoogle} />
                                <p>Google</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('copyright')}>
                Copyright © All rights reserved | This template is made with by <span>Đinh Dũng</span>
            </div>
        </div>
    );
}

export default Home;
