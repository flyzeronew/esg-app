import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload'
import styles from './MainVisionNew.module.css';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

function MainVision(props) {
    const appUrl = process.env.APP_URL;
    const data = props.data || [];
    const [current, setCurrent] = useState(props.initialSlide || 0);
    const [fadeIn, setFadeIn] = useState(true);
    const [nextBg, setNextBg] = useState(props.initialSlide ? (props.initialSlide + 1) % data.length : 1);
    const [imagesLoaded, setImagesLoaded] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const dataLength = data.length;

    // 預載入所有圖片
    useEffect(() => {
        if (dataLength <= 1) return;

        const loadImage = (index) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    setImagesLoaded(prev => ({ ...prev, [index]: true }));
                    resolve();
                };
                img.onerror = () => {
                    // 即使載入失敗也標記為已處理，避免卡住
                    setImagesLoaded(prev => ({ ...prev, [index]: true }));
                    resolve();
                };
                img.src = data[index].cover_img;
            });
        };

        // 並行載入所有圖片
        Promise.all(data.map((_, index) => loadImage(index)));
    }, [dataLength, data]);

    useEffect(() => {
        if (dataLength <= 1 || Object.keys(imagesLoaded).length < dataLength) return;

        const timer = setInterval(() => {
            // 檢查下一張圖片是否已載入
            const nextIndex = (current + 1) % dataLength;

            if (imagesLoaded[nextIndex] && !isLoading) {
                setIsLoading(true);

                // 開始淡出當前圖片
                setFadeIn(false);

                setTimeout(() => {
                    // 切換到下一張圖片（前景層）
                    setCurrent(nextIndex);
                    setFadeIn(true);

                    // 延遲更新背景層，確保前景層完全顯示後才更新
                    setTimeout(() => {
                        setNextBg(prev => (prev + 1) % dataLength);
                        setIsLoading(false);
                    }, 800); // 等前景層淡入完成後再更新背景層
                }, 800);
            }
        }, 5000);

        return () => clearInterval(timer);
    }, [dataLength, current, imagesLoaded, isLoading]);

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
                                target={data[nextBg].is_blank === 1 ? '_blank' : undefined}
                                rel={data[nextBg].is_blank === 1 ? 'noopener noreferrer' : undefined}
                            >
                                <div className={cx('box')}>
                                    <div className={cx('imgBox')}>
                                        <div className={cx('img')}>
                                            <LazyLoad
                                                width={1072}
                                                height={603}
                                                offset={100}
                                                style={{width: "100%", aspectRatio: "16/9"}}
                                                placeholder={<img src={process.env.IMG_DEFAULT} alt="loading..." />}
                                                once
                                            >
                                                <img src={data[nextBg].cover_img} alt={data[nextBg].title} width={1072} height={603}  />
                                            </LazyLoad>
                                        </div>
                                        <div className={cx('bottomMask')}></div>
                                    </div>
                                    <div className={cx('txtBox')}>
                                        <h3 className={cx('title')}>{data[nextBg].title}</h3>
                                        <div className={cx('txt')}>
                                            <p>{data[nextBg].description}</p>
                                            <div className={cx('arraw')}>
                                                <img
                                                    src={`${appUrl}/images/icon_arraw_no_bg.svg`}
                                                    alt="img"
                                                    width={48}
                                                    height={48}
                                                    loading="lazy"
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
                                target={data[current].is_blank === 1 ? '_blank' : undefined}
                                rel={data[current].is_blank === 1 ? 'noopener noreferrer' : undefined}
                            >
                                <div className={cx('box', { show: fadeIn })}>
                                    <div className={cx('imgBox')}>
                                        <div className={cx('img')}>
                                            <LazyLoad
                                                width={1072}
                                                height={603}
                                                offset={100}
                                                style={{width: "100%", aspectRatio: "16/9"}}
                                                placeholder={<img src={process.env.IMG_DEFAULT} alt="loading..." />}
                                                once
                                            >
                                                <img src={data[current].cover_img} alt={data[current].title} width={1072} height={603}  />
                                            </LazyLoad>
                                        </div>
                                        <div className={cx('bottomMask')}></div>
                                    </div>
                                    <div className={cx('txtBox')}>
                                        <h3 className={cx('title')}>{data[current].title}</h3>
                                        <div className={cx('txt')}>
                                            <p>{data[current].description}</p>
                                            <div className={cx('arraw')}>
                                                <img
                                                    src={`${appUrl}/images/icon_arraw_no_bg.svg`}
                                                    alt="img"
                                                    width={48}
                                                    height={48}
                                                    loading="lazy"
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
                                                <a
                                                    href={item.url}
                                                    target={item.is_blank === 1 ? '_blank' : undefined}
                                                    rel={item.is_blank === 1 ? 'noopener noreferrer' : undefined}
                                                >
                                                    <div className={cx('img')}>
                                                        <LazyLoad
                                                            width={220}
                                                            height={138}
                                                            offset={100}
                                                            placeholder={<img src={process.env.IMG_DEFAULT} alt="loading..." />}
                                                            once
                                                        >
                                                            <img src={item.cover_img} alt={item.title} width={220} height={138} />
                                                        </LazyLoad>
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
                                            <a
                                                href={item.url}
                                                target={item.is_blank === 1 ? '_blank' : undefined}
                                                rel={item.is_blank === 1 ? 'noopener noreferrer' : undefined}
                                            >
                                                <div className={cx('img')}>
                                                    <LazyLoad
                                                        width={220}
                                                        height={138}
                                                        offset={100}
                                                        placeholder={<img src={process.env.IMG_DEFAULT} alt="loading..." />}
                                                        once
                                                    >
                                                        <img src={item.cover_img} alt={item.title} width={220} height={138} />
                                                    </LazyLoad>
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
                </div>
            </div>
        </div>
    );
}

export default MainVision;
