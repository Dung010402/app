import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPhone, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser, faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react/';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import images from '~/assets/images';
import Cart from '~/layout/component/Header/Cart';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <Link to="/" className={cx('logo')}>
                        <img className={cx('logo-image')} src={images.logo} alt="shop" />
                    </Link>
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm" />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                    <div className={cx('action')}>
                        <Tippy delay={[0, 0]} content="Trợ giúp" placement="bottom">
                            <Link to="/support" className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCircleQuestion} />
                            </Link>
                        </Tippy>

                        <Tippy delay={[0, 0]} content="0334099685" placement="bottom">
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faPhone} />
                            </button>
                        </Tippy>

                        <HeadlessTippy
                            interactive
                            placement="bottom"
                            delay={[100, 200]}
                            render={() => (
                                <PopperWrapper>
                                    <Link to="/login" className={cx('account-login')}>
                                        Đăng Nhập
                                    </Link>
                                    <Link to="/register" className={cx('account-login')}>
                                        Đăng Ký
                                    </Link>
                                </PopperWrapper>
                            )}
                        >
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faUser} />
                            </button>
                        </HeadlessTippy>

                        <HeadlessTippy
                            interactive
                            placement="bottom-end"
                            delay={[0, 300]}
                            render={() => (
                                <PopperWrapper>
                                    <Cart />
                                </PopperWrapper>
                            )}
                        >
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faBagShopping} />
                            </button>
                        </HeadlessTippy>
                    </div>
                </div>
            </header>
            <div className={cx('category')}>
                <Link to={`/`} className={cx('category-item')}>
                    Trang chủ
                </Link>
                <Link to={`/category/male`} className={cx('category-item')}>
                    Nam
                </Link>
                <Link to={`/category/female`} className={cx('category-item')}>
                    Nữ
                </Link>
                <Link to={`/category/young`} className={cx('category-item')}>
                    Trẻ em
                </Link>
            </div>
        </div>
    );
}

export default Header;
