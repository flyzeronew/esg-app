import { useState ,useEffect } from 'react'
import Image from 'next/image'
import React, { Component } from "react"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function ViewList(props) {
    const handleClick = (e) => {
        e.preventDefault();
    };
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide:true,
        autoplay: true,
        autoplaySpeed:5000, 
    };  
    return (        
        <div className="view">
            <Slider {...settings}>
                <a href='#' onClick={handleClick}>
                    <div className="img">
                        <Image src="/images/esg02.jpg" alt="img" width={1920} height={1080}/>  
                    </div>
                    <div className="txt">一菜三吃！淨零綠生活當道 首「惜」廚師教您如何吃在地</div>
                </a>
                <a href='#' onClick={handleClick}>
                    <div className="img">
                        <Image src="/images/esg02.jpg" alt="img" width={1920} height={1080}/>  
                    </div>
                    <div className="txt">一菜三吃！淨零綠生活當道 首「惜」廚師教您如何吃在地2</div>
                </a>
            </Slider>
        </div> 
    )
}
export default ViewList;