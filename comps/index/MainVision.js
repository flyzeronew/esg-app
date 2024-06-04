import React, { Component } from "react"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
        <div className="mainVision">
            <Slider {...settings}>
                { indexHeadlines.length > 0 ?
                    indexHeadlines.map((item, index) => (
                        <a key={index} href={item.url} target={item.is_blank === 1? '_blank' :'' } >
                            <div className="img">
                                <img src={item.cover_img} alt="img" width={1072} height={603}/>
                            </div>
                            <div className="txtAbsolute">
                                <div className="txtBox">
                                    <div className="title">{item.title}</div>
                                    <div className="txt">{item.description}</div>
                                    <div className="object">
                                        <div className="point"></div>
                                        <div className="arraw">
                                            <img src="/images/icon_arraw02.svg" alt="arraw" width={50} height={50} loading='lazy'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))
                :""}
            </Slider>
        </div>
    )
}
export default MainVision;