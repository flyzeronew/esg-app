import { useState ,useEffect } from 'react'
import Image from 'next/image'
import React, { Component } from "react"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function DetailMainView(props) {
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
        autoplaySpeed:3000, 
    };  
    return (
        <>
            <Slider {...settings}>
                <div className="box">
                    <div className="tag">食</div>
                    <Image src="/images/tips01.jpg" alt="img" width={800} height={800}/>
                </div>
                <div className="box">
                    <div className="tag">食</div>
                    <Image src="/images/tips02.jpg" alt="img" width={800} height={800}/>
                </div>
                <div className="box">
                    <div className="tag">食</div>
                    <Image src="/images/tips03.jpg" alt="img" width={800} height={800}/>
                </div>
            </Slider>
        </>
    )
}
export default DetailMainView;