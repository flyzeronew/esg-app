import React, { Component } from 'react'
import styles from './TipsList.module.css';
import classnames from "classnames/bind";
import ScrollContainer from 'react-indiana-drag-scroll';

const cx = classnames.bind(styles)
function TipsList(props) {
    const appUrl = process.env.APP_URL
    const tips = props.data
    const colorMapping = props.colorMapping

    return (
        <div className={cx("tips")}>
            <div className={cx("frameBox")}>
                <h2 className={cx("title")}>
                    <a href={`${appUrl}/tips`}>
                        永續小撇步
                        <img src={`${appUrl}/images/icon_arraw_no_bg2.svg`} alt="img" width={40} height={40} />
                    </a>
                </h2>
            </div>
            <ScrollContainer
                className={cx("list")}
                vertical={false}
                ignoreElements={'.no-drag'}
                nativeMobileScroll
                style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
                onWheel={e => {
                    if (window.matchMedia('(pointer: fine)').matches) {
                        if (e.deltaY !== 0) {
                            e.preventDefault();
                            e.currentTarget.scrollLeft += e.deltaY;
                        }
                    }
                }}
            >
                <div className={cx("frameBox")}>
                    <ul>
                        {tips && tips.length > 0 ?
                            tips.map((item, index) => (
                                <li key={index}>
                                    <a href={`${appUrl}/tips/${colorMapping[item.genre - 1].en_name}/${item.id}`}>
                                        <div className={cx("img")}>
                                            <img src={item.tip_galleries[0].image_url} alt="img" width={560} height={315} draggable={false} />
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
