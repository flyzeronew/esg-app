import classnames from "classnames/bind"
import LazyLoad from 'react-lazyload'
import styles from './FocusList.module.css'

const cx = classnames.bind(styles);
const appUrl = process.env.APP_URL;

function FocusList(props) {
    const focus = props.data || [];
    const focusFirst = focus.length > 0 ? focus[0] : null;
    return (
        <div className={cx("focus")}>
            <div className={cx("frameBox")}>
                <h2 className={cx("title")}>
                    <a href={`${appUrl}/focus`}>
                        專題報導
                        <img src={`${appUrl}/images/icon_arraw_no_bg2.svg`} alt="img" width={40} height={40} />
                    </a>
                </h2>
                { focusFirst ? (
                    <div className={cx("report")}>
                        <div className={cx("first")}>
                            <a href={focusFirst.url} target={1 === focusFirst.is_blank ? "_blank" : undefined}>
                                <div className={cx("imgBox")}>
                                    <div className={cx("arraw")}>
                                        <img src={`${appUrl}/images/icon_arraw_no_bg.svg`} alt="img" width={48} height={48} />
                                    </div>
                                    <div className={cx("img")}>
                                        <LazyLoad
                                            width={560}
                                            height={315}
                                            offset={100}
                                            placeholder={<img src={process.env.IMG_DEFAULT} alt="loading..." />}
                                            once
                                        >
                                            <img src={focusFirst.cover_img} alt="img" width={560} height={315} />
                                        </LazyLoad>
                                    </div>
                                </div>
                                <div className={cx("txtBox")}>
                                    <h4 className={cx("subTitle","pc")}>{focusFirst.sub_title}</h4>
                                    <h3 className={cx("title")}>{focusFirst.sub_title}</h3>
                                    <h4 className={cx("subTitle","mo")}>{focusFirst.sub_title}</h4>
                                    <p className={cx("txt")}>{focusFirst.description}</p>
                                </div>
                            </a>
                        </div>
                        <div className={cx("list")}>
                            {focus.map((item, index) => (
                                index > 0 ? (
                                <a key={index} href={item.url} target={1 === item.is_blank ? "_blank" : undefined} >
                                    <div className={cx("imgBox")}>
                                        <div className={cx("arraw")}>
                                            <img src={`${appUrl}/images/icon_arraw_no_bg.svg`} alt="img" width={48} height={48} />
                                        </div>
                                        <div className={cx("img")}>
                                            <LazyLoad
                                                width={560}
                                                height={315}
                                                offset={100}
                                                placeholder={<img src={process.env.IMG_DEFAULT} alt="loading..." />}
                                                once
                                            >
                                                <img src={item.cover_img} alt="img" width={560} height={315} />
                                            </LazyLoad>
                                        </div>
                                    </div>
                                    <div className={cx("txtBox")}>
                                        <h4 className={cx("subTitle","pc")}>
                                            {item.sub_title}
                                        </h4>
                                        <h3 className={cx("title")}>
                                            {item.title}
                                        </h3>
                                        <h4 className={cx("subTitle","mo")}>
                                            {item.sub_title}
                                        </h4>
                                        <p className={cx("txt")}>
                                            {item.description}
                                        </p>
                                    </div>
                                </a>
                                ) : ""
                            ))}
                        </div>
                    </div>
                ) : ""}
            </div>
        </div>
    )
}
export default FocusList;
