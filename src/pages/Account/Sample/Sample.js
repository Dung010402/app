import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import { Link } from 'react-router-dom';
import styles from '~/pages/Account/Account.module.scss';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles);
function Sample() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('logo')}>
                    <Link to="/" className={cx('logo-img')}>
                        <img
                            src="//bizweb.dktcdn.net/100/438/408/themes/916476/assets/logo.svg?1691124644531"
                            alt="shop"
                        />
                    </Link>
                    <div className={cx('header-title')}> Đăng nhập</div>
                </div>
                <Link className={cx('header-support')} to="/support">
                    Bạn cần trợ giúp?
                </Link>
            </div>
            <div className={cx('inner')}>
                <div className={cx('container')}>
                    <div className={cx('container-logo')}>
                        <FontAwesomeIcon icon={faHouse} />
                        <div className={cx('container-title')}>Shop của tôi</div>
                    </div>
                    <PopperWrapper>
                        <div className={cx('box')}>
                            <div className={cx('box-title')}>Đăng nhập</div>
                            <input className={cx('box-input')} placeholder="Email/ Số điện thoại" />
                            <input className={cx('box-input')} placeholder="Mật khẩu" />
                            <button className={cx('box-btn')}>Đăng nhập</button>
                            <div className={cx('box-')}>
                                <div className={cx('reset-pass')}>Quên mật khâu</div>
                                <div className={cx('login-sms')}>Đăng nhập với SMS</div>
                            </div>
                            <div className={cx('seperate')}>
                                <div className={cx('seperate-item')}></div>
                                <span>Hoặc</span>
                                <div className={cx('seperate-item')}></div>
                            </div>
                            <div className={cx('box-network')}>
                                <div className={cx('network-item')}>
                                    <FontAwesomeIcon className={cx('network-icon')} icon={faFacebook} />
                                    <span>Facebook</span>
                                </div>
                                <div className={cx('network-item')}>
                                    <FontAwesomeIcon className={cx('network-icon')} icon={faGoogle} />
                                    <span>Google</span>
                                </div>
                            </div>
                            <div className={cx('box-bottom')}>
                                <span>Bạn chưa có tài khoản?</span>
                                <Link to="/register">Đăng kí</Link>
                            </div>
                        </div>
                    </PopperWrapper>
                </div>
            </div>
        </div>
    );
}

export default Sample;
