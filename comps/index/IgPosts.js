import LazyLoad from 'react-lazyload'
import styles from './IgPosts.module.css';
import classnames from "classnames/bind";

const cx = classnames.bind(styles)
function IgPosts(props) {
    const initialData = props.data.data || []
    // 限制資料為6筆
    const data = initialData.slice(0, 6)
    const appUrl = process.env.APP_URL || '';

    return (
        <div className={cx("igPosts")}>
            <div className={cx("frameBox")}>
                <div className={cx("object")}>
                    <div className={cx("logoBox")}>
                        <img src={`${appUrl}/images/small-logo.webp`} alt="logo" />
                        <span>TVBS GOOD</span>
                    </div>
                    <div className={cx("followBtn")}>
                        <a href="https://www.instagram.com/tvbs_good" target="_blank" rel="noopener noreferrer">
                            <img src={`${appUrl}/images/small-ig.svg`} alt="logo" />
                            <span>Follow</span>
                        </a>
                    </div>
                </div>
                <div className={cx("list")}>
                    <ul>
                        {data.map((item, index) => (
                            <li key={item.id}>
                                <a href={item.permalink} target="_blank" rel="noopener noreferrer">
                                    <div className={cx("img")}>
                                        <LazyLoad
                                            width={360}
                                            height={360}
                                            offset={100}
                                            placeholder={<img src={`${appUrl}/images/ig-lazy-img.webp`} alt="loading..." />}
                                            once
                                        >
                                            <img src={item.thumbnail_url || item.media_url || `${appUrl}/images/ig-lazy-img.webp`} alt={item.caption || ''} />
                                        </LazyLoad>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default IgPosts
