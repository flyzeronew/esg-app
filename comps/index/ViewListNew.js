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
                                    <div className={cx('time')}>
                                        <div className={cx('t1')}>MAY</div>
                                        <div className={cx('t2')}>26</div>
                                    </div>
                                    <div>
                                        <h4 className={cx("subTitle")}>
                                            永續生活
                                        </h4>
                                        <h3 className={cx("title")}>
                                            大雨滂沱也不怕！新北市如何用 AI 科技 打造一座「不怕水」的智慧城市？
                                        </h3>
                                    </div>
                                </div>
                                <div className={cx("arraw")}>
                                    <img src={`${appUrl}/images/icon_arraw_no_bg.svg`} alt="img" width={48} height={48} />
                                </div>
                            </a>
                        </li>
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
                                    <div className={cx('time')}>
                                        <div className={cx('t1')}>MAY</div>
                                        <div className={cx('t2')}>26</div>
                                    </div>
                                    <div>
                                        <h4 className={cx("subTitle")}>
                                            永續生活
                                        </h4>
                                        <h3 className={cx("title")}>
                                            大雨滂沱也不怕！新北市如何用 AI 科技 打造一座「不怕水」的智慧城市？
                                        </h3>
                                    </div>
                                </div>
                                <div className={cx("arraw")}>
                                    <img src={`${appUrl}/images/icon_arraw_no_bg.svg`} alt="img" width={48} height={48} />
                                </div>
                            </a>
                        </li>
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
                                    <div className={cx('time')}>
                                        <div className={cx('t1')}>MAY</div>
                                        <div className={cx('t2')}>26</div>
                                    </div>
                                    <div>
                                        <h4 className={cx("subTitle")}>
                                            永續生活
                                        </h4>
                                        <h3 className={cx("title")}>
                                            大雨滂沱也不怕！新北市如何用 AI 科技 打造一座「不怕水」的智慧城市？
                                        </h3>
                                    </div>
                                </div>
                                <div className={cx("arraw")}>
                                    <img src={`${appUrl}/images/icon_arraw_no_bg.svg`} alt="img" width={48} height={48} />
                                </div>
                            </a>
                        </li>
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