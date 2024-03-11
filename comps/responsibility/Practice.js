import { useState ,useEffect } from 'react'
import Image from 'next/image'
import React, { Component } from "react"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Practice(props) {
    const [currentSlide, setCurrentSlide] = useState(1); 
    const defaultClick = (event) => {
        event.preventDefault();
    };
    const settings = {
        dots: false,
        infinite: true, 
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "500px", 
    };  
    return (
        <div className='carousel'>
            <Slider {...settings}>            
                <a href='#' onClick={defaultClick}>
                    <div className='img'>
                        <Image src="/images/esg05.jpg" alt="img" width={1072} height={603}/>
                    </div>
                    <div className='txt'>
                        <p>華文永續報導獎／真假ESG揭祕-你是真綠、還是漂綠</p>
                    </div>
                </a>
                <a href='#' onClick={defaultClick}>
                    <div className='img'>
                        <Image src="/images/esg02.jpg" alt="img" width={1072} height={603}/>
                    </div>
                    <div className='txt'>
                        <p>華文永續報導獎／真假ESG揭祕-你是真綠、還是漂綠</p>
                    </div>
                </a>
                <a href='#' onClick={defaultClick}>
                    <div className='img'>
                        <Image src="/images/esg03.jpg" alt="img" width={1072} height={603}/>
                    </div>
                    <div className='txt'>
                        <p>華文永續報導獎／真假ESG揭祕-你是真綠、還是漂綠</p>
                    </div>
                </a>
            </Slider>
        </div>
    )
}
export default Practice;