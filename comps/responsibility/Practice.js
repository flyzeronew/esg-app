import React, { Component } from "react"
import styles from './Pactice.module.css';
import CustomSlider from "../CustomSlider/CustomSlider";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);
function Practice(props) {
    const appUrl = process.env.APP_URL;
    const practiceData = props.practiceData;
    const settings = {
        dots: false,
        arrows:practiceData.length > 1,
        infinite:practiceData.length > 1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        swipeToSlide:false,
        centerPadding: "500px", 
        responsive: [
            {
                breakpoint: 1919,
                settings: {
                    centerPadding: "200px", 
                },
            },
            {
                breakpoint: 1279,
                settings: {
                    centerPadding: "100px", 
                },
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: "30px", 
                },
            },
        ],
    };  
    return (        
        <div className={cx("carousel")}>
            <CustomSlider settings = {settings}>
                { practiceData.map((item, index) => (
                     <a key={index} href={item.url}>
                        <div className={styles.img} >
                            <img src={item.cover_img} alt="img" width={1072} height={603}/>
                        </div>
                        <div className={cx("txt")}>
                            <p className={cx("pc")}>{item.title}</p>
                            <p className={cx("mo")} >{item.shortTitle}</p>
                        </div>
                    </a>
                ))}
            </CustomSlider>
        </div>
    )
}
export default Practice
