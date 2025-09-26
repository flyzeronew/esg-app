import LazyLoad from 'react-lazyload'
import styles from './TipsList.module.css';
import classnames from "classnames/bind";
import ScrollContainer from 'react-indiana-drag-scroll';

const cx = classnames.bind(styles)
function TipsList(props) {
    const appUrl = process.env.APP_URL
    const tips = props.data

    return (
        <div className={cx("tips")}>
            <div className={cx("frameBox")}>
                <div className={cx("titleBox")}>
                    <h2 className={cx("title")}>
                        永續小撇步
                    </h2>
                    <div className={cx("more")}>
                        <a href={`${appUrl}/tips`}>
                            看更多 <img src={`${appUrl}/images/more-arraw.svg`} alt="img" width={12} height={12} loading="lazy" />
                        </a>                        
                    </div>
                </div>
            </div>
            <ScrollContainer
                className={cx("list")}
                vertical={false}
                ignoreElements={'.no-drag'}
                nativeMobileScroll
                activationDistance={30}
                style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch', cursor:"grab" }}
            >
                <div className={cx("frameBox")}>
                    <ul>
                        {tips && tips.length > 0 ?
                            tips.map((item, index) => (
                                <li key={index}>
                                    <a href={`${appUrl}/tips/${item.id}`}>
                                        <div className={cx("img")}>
                                            <LazyLoad
                                                width={560}
                                                height={315}
                                                offset={100}
                                                style={{width: "100%", aspectRatio: "5/7"}}
                                                placeholder={<img src={process.env.IMG_DEFAULT} alt="loading..." />}
                                                once
                                            >
                                                <img src={item.tip_galleries[0].image_url} alt={item.title} width={560} height={315} draggable={false} />
                                            </LazyLoad>
                                        </div>
                                        <div className={cx("txt")}>
                                            <p>
                                                {item.title}
                                            </p>
                                        </div>
                                    </a>
                                </li>
                            ))
                            : ''
                        }
                    </ul>
                </div>
            </ScrollContainer>
        </div>
    )
}
export default TipsList
