import { useState ,useEffect } from 'react'
import Image from 'next/image'
import React, { Component } from "react"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function ViewList(props) {
    const data = props.data;
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
                {data.length > 0
                ?
                data.map((item, index) => (
                <a href={item.url}>
                    <div className="img">
                        <Image src={item.img} alt="img" width={1920} height={1080}/>  
                    </div>
                    <div className="txt">{item.title}</div>
                </a>
                ))
                :""}
            </Slider>
        </div> 
    )
}
export default ViewList;