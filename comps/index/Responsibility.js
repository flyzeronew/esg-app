import React, { useEffect, useState } from "react";
import classnames from "classnames/bind";
import styles from './Responsibility.module.css';

const cx = classnames.bind(styles);
const appUrl = process.env.APP_URL;

function Responsibility(props) {
    const [showBg, setShowBg] = useState(true);

    useEffect(() => {
        const checkWidth = () => {
            setShowBg(window.innerWidth > 1023);
        };
        checkWidth();
        window.addEventListener("resize", checkWidth);
        return () => window.removeEventListener("resize", checkWidth);
    }, []);

    const bgStyle = showBg
        ? { background: `url(${appUrl}/images/responsibility_bg01.jpg) no-repeat center center` }
        : {};

    return (
        <div className={cx("responsibility")} style={bgStyle}>
            <div className={cx("img")}>
                <img src={`${appUrl}/images/responsibility_bg01.jpg`} alt="responsibility_img01" width={768} height={641}/>
            </div>
            <div className={cx("box")}>
                <h2 className={cx("title")}>
                    Better Future, Together<br/>
                    永續共好
                </h2>
                <h1 className={cx("txt")}>
                    TVBS持續為閱聽眾帶來更全面，更淺顯易懂的永續體驗，共創關懷環境生態與新聞學的永續殿堂。
                </h1>
                <div className={cx("btn")}>
                    <a href={`${appUrl}/responsibility`}>
                        TVBS永續責任
                        <img src={`${appUrl}/images/icon_arraw_no_bg.svg`} alt="arrow_right" width={32} height={32}/>
                    </a>
                </div>
                <div className={cx("breadcrumbs")}>
                    <a href={`${appUrl}/responsibility/reports`}>
                        永續影響力報告
                        <img src={`${appUrl}/images/icon_arraw11.svg`} alt="arrow_right" width={12} height={12}/>
                    </a>
                    <a href={`${appUrl}/responsibility/guide`}>
                        永續e指南
                        <img src={`${appUrl}/images/icon_arraw11.svg`} alt="arrow_right" width={12} height={12}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Responsibility;
