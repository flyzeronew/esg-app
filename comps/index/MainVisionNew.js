import React, { useState, useEffect } from 'react';
import styles from './MainVisionNew.module.css';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

function MainVision(props) {
    
    const data = props.data;
    const [current, setCurrent] = useState(props.initialSlide || 0);
    const [fadeIn, setFadeIn] = useState(true);
    const dataLength = data.length;

    useEffect(() => {
        if (dataLength <= 1) return;
        const timer = setInterval(() => {
            setFadeIn(false);
            setTimeout(() => {
                setCurrent(prev => (prev + 1) % dataLength);
                setFadeIn(true); 
            }, 300); 
        }, 5000);
        return () => clearInterval(timer);
    }, [dataLength]);

    const getListOrder = (current, data) => {
        if (!data || data.length <= 1) return [];
        const arr = [];
        for (let i = 1; i < data.length; i++) {
            arr.push((current + i) % data.length);
        }
        return arr;
    };

    // 產生 list 輪播內容
    const listOrder = getListOrder(current, data);

    return (
        <div className={cx('mainVision')}>
            <div className={cx('frameBox')}>
                <div className={cx('first')}>
                    {dataLength > 0 && (
                        <a
                            href={data[current].url}
                            target={data[current].is_blank === 1 ? '_blank' : ''}
                        >
                            <div className={cx('box', { show: fadeIn })}>
                                <div className={cx('imgBox')}>
                                    <div className={cx('img')}>
                                        <img src={data[current].cover_img} alt="img" width={1072} height={603} />
                                    </div>
                                    <div className={cx('time')}>
                                        <div className={cx('t1')}>MAY</div>
                                        <div className={cx('t2')}>26</div>
                                    </div>
                                    <div className={cx('timeMask')}></div>
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
                    )}
                </div>
                <div className={cx('list')}>
                    <ul>
                        {listOrder.map((dataIdx, listIdx) => {
                            const item = data[dataIdx];
                            return (
                                <li key={dataIdx}>
                                    <div className={cx('box', { show: fadeIn })}>
                                        <a href={item.url} target={item.is_blank === 1 ? '_blank' : ''}>
                                            <div className={cx('img')}>
                                                <img src={item.cover_img} alt="img" width={220} height={138} />
                                            </div>
                                            <div className={cx('txtBox')}>
                                                <div className={cx('time', 'mo')}>May 26</div>
                                                <h3 className={cx('title')}>{item.title}</h3>
                                                <div className={cx('time', 'pc')}>May 26</div>
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
    );
}

export default MainVision;
