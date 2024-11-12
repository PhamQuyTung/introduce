import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <a href='/' className={cx('logo')}>Tung</a>
            <ul className={cx('menu-list')}>
                <a href='/' className={cx('menu-item')}>Home</a>
                <a href='/about' className={cx('menu-item')}>About</a>
                <a href='/portfolio' className={cx('menu-item')}>PortFolio</a>
                <a href='/skills' className={cx('menu-item')}>Skills</a>
                <a href='/experience' className={cx('menu-item')}>Experience</a>
                <a href='/contact' className={cx('menu-item')}>Contact</a>
            </ul>
        </div>
    );
}

export default Header;
