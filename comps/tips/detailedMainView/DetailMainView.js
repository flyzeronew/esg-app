import React, { Component } from "react"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from "./DetailedMainView.module.css"
import classnames from "classnames/bind";
const cx = classnames.bind(styles);

function DetailMainView(props) {
    const imgsData = props.data.tip_galleries;
    const imgDefaultSquare = process.env.IMG_DEFAULT_SQUARE;
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:3000, 
    };  
    return (
        <div className={cx("detailedView")}>
            <Slider {...settings}>
                { imgsData.length > 0 ? 
                    imgsData.map((item, index) => (
                        <div key={index} className={cx("box")}>
                            <img src={item.image_url} alt="img" width={800} height={800} loading='lazy'/>
                        </div>
                    ))
                :
                    <div className={cx("box")}  >
                        <img src={imgDefaultSquare} alt="img" width={800} height={800} loading='lazy'/>
                    </div>
                }
            </Slider>
        </div>
    )
}
export default DetailMainView;