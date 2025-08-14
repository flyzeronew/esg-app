import React, { Component } from "react"
import classnames from "classnames/bind"
import LazyLoad from 'react-lazyload'
import styles from './InfluenceList.module.css'


const cx = classnames.bind(styles);
const appUrl = process.env.APP_URL;

function InfluenceList(props) {
    const impact = props.data;
    return (   
        <>
            { impact && impact.length > 0 ? (
                <div className={cx("influence")}>
                    <div className={cx("frameBox")}>
                        <h2 className={cx("title")}>
                            永續影響力
                        </h2>
                    </div>
                    <div className={cx("list")}>
                        <div className={cx("list")}>
                            <ul>
                                {impact.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.link_url} target={item.is_blank === 1 ? "_blank" : ""}>
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
                                                <div className={cx("txtBox")}>
                                                    <h3 className={cx("title")}>{item.title}</h3>
                                                    <p className={cx("txt")}>{item.description}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div> 
            ) : ""}
        </>     
        
    )
}
export default InfluenceList;