import LazyLoad from 'react-lazyload'
import styles from './IgPosts.module.css';
import classnames from "classnames/bind";

const cx = classnames.bind(styles)
function IgPosts(props) {
    const initialData = props.data?.data || []
    const MAX_POSTS = 6;
    const data = initialData.slice(0, MAX_POSTS)
    const appUrl = process.env.APP_URL || '';

    // 如果沒有資料，不顯示此區塊
    if (data.length === 0) {
        return null;
    }

    return (
        <div className={cx("igPosts")}>
            <div className={cx("frameBox")}>
                <div className={cx("object")}>
                    <div className={cx("logoBox")}>
                        <div className={cx("img")}>
                            <img src={`${appUrl}/images/small-logo.webp`} alt="logo" />
                        </div>
                        <div className={cx("nameBox")}>
                            <p className={cx("name")}>TVBS GOOD</p>
                            <p className={cx("txt")}>永續生活有你一起 每天都是 GOOD Day🌱</p>
                        </div>
                        
                    </div>
                    <div className={cx("followBtn")}>
                        <a href="https://www.instagram.com/tvbs_good" target="_blank" rel="noopener noreferrer">
                            <span>追蹤我們</span>
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
