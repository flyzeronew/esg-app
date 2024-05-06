import React, { Component } from "react"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function DetailMainView(props) {
    const imgsData = props.data.tip_galleries;
    const tag =props.tag;
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
        <>
            <Slider {...settings}>
                { imgsData.length > 0 ? 
                    imgsData.map((item, index) => (
                        <div key={index} className="box">
                            <div className="tag">{tag}</div>
                            <img src={item.image_url} alt="img" width={800} height={800} loading='lazy'/>
                        </div>
                    ))
                :
                    <div className="box">
                        <div className="tag">{tag}</div>
                        <img src={imgDefaultSquare} alt="img" width={800} height={800} loading='lazy'/>
                    </div>
                }
            </Slider>
        </>
    )
}
export default DetailMainView;