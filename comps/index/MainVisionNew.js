import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload'
import styles from './MainVisionNew.module.css';
import classnames from 'classnames/bind';
import CustomSlider from "../CustomSlider/CustomSlider";
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

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        draggable: typeof window !== "undefined" ? window.innerWidth <= 1024 : false,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        beforeChange: (oldIndex, newIndex) => {
            // 當 CustomSlider 開始切換時，同步更新 list
            if (dataLength > 1) {
                setIsLoading(true);
                setFadeIn(false);

                setTimeout(() => {
                    setCurrent(newIndex);
                    setFadeIn(true);

                    setTimeout(() => {
                        setNextBg((newIndex + 1) % dataLength);
                        setIsLoading(false);
                    }, 800);
                }, 800);
            }
        }
    };

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
                    <CustomSlider settings={settings}>
                        {data.map((item, index) => (
                            <a
                                href={item.url}
                                target={item.is_blank === 1 ? '_blank' : undefined}
                                rel={item.is_blank === 1 ? 'noopener noreferrer' : undefined}
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
                                                <img src={item.cover_img} alt={item.title} width={1072} height={603}  />
                                            </LazyLoad>
                                        </div>
                                    </div>
                                    <div className={cx('txtBox')}>
                                        <h3 className={cx('title')}>{item.title}</h3>
                                        <div className={cx('txt')}>
                                            <p>{item.description}</p>
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
                        ))}
                    </CustomSlider>
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
