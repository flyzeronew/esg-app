import { useState ,useEffect } from 'react'
import Image from 'next/image'
import React, { Component } from "react"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Practice(props) {
    const appUrl = process.env.APP_URL;
    const practiceData = props.practiceData;
    const settings = {
        dots: false,
        infinite: true, 
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
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
        <div className='carousel'>
            <Slider {...settings}>
                { practiceData.map((item, index) => (
                    <a key={index} href={`${appUrl}/view/${item.article_genres[0].en_name}/${item.article_id}`}>
                        <div className='img'>
                            <img src={item.cover_img} alt="img" width={1072} height={603}/>
                        </div>
                        <div className='txt'>
                            <p>{item.title}</p>
                        </div>
                    </a>
                ))}
            </Slider>
        </div>
    )
}
export default Practice;