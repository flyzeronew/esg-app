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
        autoplaySpeed:5000, 
    };  
    return (
        <div className="mainView">
            <Slider {...settings}>
                
            </Slider>
        </div>
    )
}
export default DetailMainView;