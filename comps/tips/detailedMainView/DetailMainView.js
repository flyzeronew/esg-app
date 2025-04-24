import React, { Component } from "react"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from "./DetailedMainView.module.css"
import classnames from "classnames/bind";
const cx = classnames.bind(styles);

function DetailMainView(props) {
    const imgsData = props.data.tip_galleries;
    const tag =props.tag;
    const themeValues = props.themeValues;
    const imgDefaultSquare = process.env.IMG_DEFAULT_SQUARE;
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        swipeToSlide:false,
        autoplaySpeed:3000, 
    };  
    return (
        <div className={cx("detailedView", themeValues.classNamesGenre)}>
            <Slider {...settings}>
                { imgsData.length > 0 ? 
                    imgsData.map((item, index) => (
                        <div key={index} className={cx("box")}>
                            <div className={cx("tag")} style={{backgroundColor:themeValues.bgColor,color:themeValues.color}}>{tag}</div>
                            <img src={item.image_url} alt="img" width={800} height={800} loading='lazy'/>
                        </div>
                    ))
                :
                    <div className={cx("box")}  >
                        <div className={cx("tag")} style={{backgroundColor:themeValues.bgColor,color:themeValues.color}}>{tag}</div>
                        <img src={imgDefaultSquare} alt="img" width={800} height={800} loading='lazy'/>
                    </div>
                }
            </Slider>
        </div>
    )
}
export default DetailMainView;