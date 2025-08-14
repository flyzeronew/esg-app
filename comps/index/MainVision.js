import React, { Component } from "react"
import styles from './MainVision.module.css';
import classnames from "classnames/bind";
import CustomSlider from "../CustomSlider/CustomSlider";
const cx = classnames.bind(styles);

function MainVision(props) {
    const indexHeadlines = props.indexHeadlines;
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide:false,
        autoplay: true,
        autoplaySpeed:5000, 
    };  
    return (
        <div className={cx("mainVision")}>
            <CustomSlider settings={settings}>
                { indexHeadlines && indexHeadlines.length > 0 ?
                    indexHeadlines.map((item, index) => (
                        <a key={index} href={item.url} target={item.is_blank === 1? '_blank' :'' } >
                            <div className={cx("img")}>
                                <img src={item.cover_img} alt="img" width={1072} height={603}/>
                            </div>
                            <div className={cx("txtAbsolute")}>
                                <div className={cx("txtBox")}>
                                    <div className={cx("title")}>{item.title}</div>
                                    <div className={cx("txt")}>{item.description}</div>
                                    <div className={cx("object")}>
                                        <div className={cx("point")}></div>
                                        <div className={cx("arraw")}>
                                            <img src="/images/icon_arraw02.svg" alt="arraw" width={50} height={50} loading='lazy'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))
                :""}
            </CustomSlider>
        </div>
    )
}
export default MainVision;