import React, { useState, useEffect } from 'react';
import styles from './MainVisionNew.module.css';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

function MainVision(props) {

    const data = props.data;
    const [current, setCurrent] = useState(props.initialSlide || 0);
    const [fadeIn, setFadeIn] = useState(true);
    const [nextBg, setNextBg] = useState(props.initialSlide ? (props.initialSlide + 1) % data.length : 1);
    const dataLength = data.length;

    useEffect(() => {
        if (dataLength <= 1) return;
        const timer = setInterval(() => {
            // 開始淡出當前圖片
            setFadeIn(false);

            setTimeout(() => {
                // 切換到下一張圖片（前景層）
                setCurrent(prev => (prev + 1) % dataLength);
                setFadeIn(true);

                // 延遲更新背景層，確保前景層完全顯示後才更新
                setTimeout(() => {
                    setNextBg(prev => (prev + 1) % dataLength);
                }, 500); // 等前景層淡入完成後再更新背景層
            }, 500);
        }, 5000);
        return () => clearInterval(timer);
    }, [dataLength]);

    const getListOrder = (baseIndex, data) => {
        if (!data || data.length <= 1) return [];
        const arr = [];
        for (let i = 1; i < data.length; i++) {
            arr.push((baseIndex + i) % data.length);
        }
        return arr;
    };

    // 產生 list 輪播內容 - 前景層和背景層
    // 列表前景層應該基於當前主輪播內容，背景層基於下一張
    const listOrderForeground = getListOrder(current, data);
    const listOrderBackground = getListOrder(nextBg, data);

    return (
        <div className={cx('mainVision')}>
            <div className={cx('frameBox')}>
                <div className={cx('first')}>
                    {/* 下一張圖片作為背景層 */}
                    {dataLength > 1 && (
                        <div className={cx('nextBackground')}>
                            <a
                                href={data[nextBg].url}
                                target={data[nextBg].is_blank === 1 ? '_blank' : ''}
                            >
                                <div className={cx('box')}>
                                    <div className={cx('imgBox')}>
                                        <div className={cx('img')}>
                                            <img src={data[nextBg].cover_img} alt="next img" width={1072} height={603} />
                                        </div>
                                        <div className={cx('bottomMask')}></div>
                                    </div>
                                    <div className={cx('txtBox')}>
                                        <h3 className={cx('title')}>{data[nextBg].title}</h3>
                                        <div className={cx('txt')}>
                                            <p>{data[nextBg].description}</p>
                                            <div className={cx('arraw')}>
                                                <img
                                                    src="/images/icon_arraw_no_bg.svg"
                                                    alt="img"
                                                    width={48}
                                                    height={48}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )}

                    {/* 當前圖片作為前景層 */}
                    {dataLength > 0 && (
                        <div className={cx('currentForeground')}>
                            <a
                                href={data[current].url}
                                target={data[current].is_blank === 1 ? '_blank' : ''}
                            >
                                <div className={cx('box', { show: fadeIn })}>
                                    <div className={cx('imgBox')}>
                                        <div className={cx('img')}>
                                            <img src={data[current].cover_img} alt="img" width={1072} height={603} />
                                        </div>
                                        <div className={cx('bottomMask')}></div>
                                    </div>
                                    <div className={cx('txtBox')}>
                                        <h3 className={cx('title')}>{data[current].title}</h3>
                                        <div className={cx('txt')}>
                                            <p>{data[current].description}</p>
                                            <div className={cx('arraw')}>
                                                <img
                                                    src="/images/icon_arraw_no_bg.svg"
                                                    alt="img"
                                                    width={48}
                                                    height={48}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )}
                </div>
                <div className={cx('list')}>
                    {/* 列表背景層 */}
                    {dataLength > 1 && (
                        <div className={cx('listBackground')}>
                            <ul>
                                {listOrderBackground.map((dataIdx, listIdx) => {
                                    const item = data[dataIdx];
                                    return (
                                        <li key={`bg-${dataIdx}`}>
                                            <div className={cx('box')}>
                                                <a href={item.url} target={item.is_blank === 1 ? '_blank' : ''}>
                                                    <div className={cx('img')}>
                                                        <img src={item.cover_img} alt="bg img" width={220} height={138} />
                                                    </div>
                                                    <div className={cx('txtBox')}>
                                                        <h3 className={cx('title')}>{item.title}</h3>
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}

                    {/* 列表前景層 */}
                    <div className={cx('listForeground')}>
                        <ul>
                            {listOrderForeground.map((dataIdx, listIdx) => {
                                const item = data[dataIdx];
                                return (
                                    <li key={`fg-${dataIdx}`}>
                                        <div className={cx('box', { show: fadeIn })}>
                                            <a href={item.url} target={item.is_blank === 1 ? '_blank' : ''}>
                                                <div className={cx('img')}>
                                                    <img src={item.cover_img} alt="img" width={220} height={138} />
                                                </div>
                                                <div className={cx('txtBox')}>
                                                    {/* <div className={cx('time', 'mo')}>May 26</div> */}
                                                    <h3 className={cx('title')}>{item.title}</h3>
                                                    {/* <div className={cx('time', 'pc')}>May 26</div> */}
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainVision;
