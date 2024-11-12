import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('info')}>
                    <h1 className={cx('title')}>Hello everyone, I'm Pham Quy Tung</h1>
                    <p className={cx('discription')}>Web designer, Application Programming and sports enthusiast</p>
                </div>
                <div className={cx('social-media')}>
                    
                </div>
            </div>
            <div className={cx('mypmg')}>
                <img src="http://127.0.0.1:5500/For-my-job/Introduce-Myself/access/img/Slider/sliderimg.jpg" alt="my-photo" className={cx('img')} />
            </div>
        </div>
    );
}

export default Home;
