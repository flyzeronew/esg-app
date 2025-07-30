import React, { Component } from "react"
import classnames from "classnames/bind"
import styles from './ViewListNew.module.css';


const cx = classnames.bind(styles)
function ViewList(props) {
    return (        
        <div className={cx("view")}>
            <div className={cx("frameBox")}>
                <div className={cx("title")}>永續觀點</div>
                <div className={cx("list")}>
                    <ul>
                        <li>
                            <div className={cx("img")}>
                                <img src="/images/view/view-1.jpg" alt="img" />
                            </div>
                        </li>
                        <li>
                            <div className={cx("img")}>
                                <img src="/images/view/view-1.jpg" alt="img" />
                            </div>
                        </li>
                        <li>
                            <div className={cx("img")}>
                                <img src="/images/view/view-1.jpg" alt="img" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div> 
    )
}
export default ViewList;