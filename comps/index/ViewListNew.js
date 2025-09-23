import React, { Component } from "react"
import LazyLoad from 'react-lazyload'
import classnames from "classnames/bind"
import styles from './ViewListNew.module.css';


const cx = classnames.bind(styles);
const appUrl = process.env.APP_URL;

// 時間格式化函數
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthName = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date).toUpperCase();
    return {
        month: monthName,
        day: date.getDate()
    };
};

function ViewList(props) {
    const articles = props.data;
    return (
        <div className={cx("view")}>
            <div className={cx("frameBox")}>
                <h2 className={cx("title")}>永續觀點</h2>
                <div className={cx("list")}>
                    <ul>
                        {articles && articles.length > 0 ?
                            articles.slice(0, 3).map((item, index) => {
                                const { month, day } = formatDate(item.updated_at);
                                return (
                                    <li key={index}>
                                        <a href={`${appUrl}/view/${item.article_genres?.[0]?.en_name || 'unknown'}/${item.id}`}>
                                            <div className={cx('imgBox')}>
                                                <div className={cx('time')}>
                                                    <div className={cx('t1')}>{month}</div>
                                                    <div className={cx('t2')}>{day}</div>
                                                </div>
                                                <div className={cx("img")}>
                                                    <LazyLoad
                                                        width={560}
                                                        height={315}
                                                        offset={100}
                                                        placeholder={<img src={process.env.IMG_DEFAULT} alt="loading..." />}
                                                        once
                                                    >
                                                        <img src={item.cover_img} alt="img" width={560} height={315}/>
                                                    </LazyLoad>
                                                </div>
                                            </div>
                                            <div className={cx("txtBox")}>
                                                <div className={cx('time')}>
                                                    <div className={cx('t1')}>{month}</div>
                                                    <div className={cx('t2')}>{day}</div>
                                                </div>
                                                <div>
                                                    <h4 className={cx("subTitle")}>{item.article_genres?.[0]?.name || '未知分類'}</h4>
                                                    <h3 className={cx("title")}>{item.title}</h3>
                                                </div>
                                            </div>
                                            <div className={cx("arraw")}>
                                                <img src={`${appUrl}/images/icon_arraw_no_bg.svg`} alt="img" width={48} height={48} loading="lazy" />
                                            </div>
                                        </a>
                                    </li>
                                );
                            }) : ""
                        }
                    </ul>
                </div>
                <div className={cx("btnBox")}>
                    <a href={`${appUrl}/view`}>更多好文</a>
                </div>
            </div>
        </div>
    )
}
export default ViewList;
