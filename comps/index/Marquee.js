import React, { useState, useEffect } from 'react';
import styles from './Marquee.module.css';
import Marquee from 'react-fast-marquee';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

function MarqueeView(props) {

    return (
        <div className={cx("marquee")}>
            <Marquee speed={50} pauseOnHover={true} loop={0}>
                <a href="https://www.khm.com.tw/" target="_blank"> 富邦金控攜手田中馬拉松 Run For Green™ 🌏🏃‍♀️ 富邦金控攜手田中馬拉松 Run For Green™ 🌏🏃‍♀️  </a>
            </Marquee>
        </div>
    );
}

export default MarqueeView;
