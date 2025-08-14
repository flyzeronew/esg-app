import React, { Component } from "react"
import classnames from "classnames/bind"
import LazyLoad from 'react-lazyload'
import styles from './FocusList.module.css'


const cx = classnames.bind(styles);
const appUrl = process.env.APP_URL;

function FocusList(props) {
    const focus = props.data;
    return (
        <div className={cx("focus")}>
            <div className={cx("frameBox")}>
                <h2 className={cx("title")}>
                    專題報導
                    <img src={`${appUrl}/images/icon_arraw_no_bg2.svg`} alt="img" width={40} height={40} />
                </h2>
                { focus && focus.length > 0 ? (
                    <div className={cx("report")}>
                        <div className={cx("first")}>
                            <a href={focus[0].url} target={1 === focus[0].is_blank ? "_blank" : ""}>
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
                                            <img src={focus[0].cover_img} alt="img" width={560} height={315} />
                                        </LazyLoad>
                                    </div>
                                </div>
                                <div className={cx("txtBox")}>
                                    <h4 className={cx("subTitle","pc")}>{focus[0].sub_title}</h4>
                                    <h3 className={cx("title")}>{focus[0].sub_title}</h3>
                                    <h4 className={cx("subTitle","mo")}>{focus[0].sub_title}</h4>
                                    <p className={cx("txt")}>{focus[0].description}</p>
                                </div>
                            </a>
                        </div>
                        <div className={cx("list")}>
                            {focus.map((item, index) => (
                                index > 0 ? (
                                <a key={index} href={item.url} target={1 === focus[0].is_blank ? "_blank" : ""} >
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
