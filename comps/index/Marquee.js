import React, { useState, useEffect } from 'react';
import styles from './Marquee.module.css';
import Marquee from 'react-fast-marquee';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

function MarqueeView(props) {
    const marquee = props.data;
    console
    return (
        <>
        {marquee? (
            <div className={cx("marquee")}>
                <Marquee speed={50} loop={0}>
                    <a href={marquee.link} target="_blank"> {marquee.text} </a>
                </Marquee>
            </div>
            ) : ""
        }
        </>
    );
}

export default MarqueeView;
