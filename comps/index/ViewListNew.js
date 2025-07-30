import React, { Component } from "react"
import classnames from "classnames/bind"
import styles from './ViewListNew.module.css';


const cx = classnames.bind(styles);
const appUrl = process.env.APP_URL;

function ViewList(props) {
    return (        
        <div className={cx("view")}>
            <div className={cx("frameBox")}>
                <h2 className={cx("title")}>永續觀點</h2>
                <div className={cx("list")}>
                    <ul>
                        <li>
                            <a href="##">
                                <div className={cx('imgBox')}>
                                    <div className={cx('time')}>
                                        <div className={cx('t1')}>MAY</div>
                                        <div className={cx('t2')}>26</div>
                                    </div>
                                    <div className={cx("img")}>
                                        <img src={`${appUrl}/images/esg05.jpg`} alt="img" />
                                    </div>
                                </div>
                                <div className={cx("txtBox")}>
                                    <h4 className={cx("subTitle")}>
                                        永續生活
                                    </h4>
                                    <h3 className={cx("title")}>
                                        一趟環島、一場拳擊賽，一次翻越山脈的挑戰——運動，正悄悄改變孩子的人生
                                    </h3>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div> 
    )
}
export default ViewList;