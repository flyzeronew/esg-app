import { useState ,useEffect } from 'react'
import Image from 'next/image'
import React, { Component } from "react"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function DetailMainView(props) {
    let data = props.data;

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
        autoplay: true,
        autoplaySpeed:3000, 
    };  
    return (
        <>
            <Slider {...settings}>
                {data.hasOwnProperty('img') && data.img!==''
                ?
                <div className="box">
                    <div className="tag">{data.tip_genre.name}</div>
                    <Image src={data.img} alt="img" width={800} height={800}/>
                </div>
                :''}
                {data.hasOwnProperty('img2') && data.img2!==''
                ?
                <div className="box">
                    <div className="tag">{data.tip_genre.name}</div>
                    <Image src={data.img2} alt="img" width={800} height={800}/>
                </div>
                :''}
                {data.hasOwnProperty('img3') && data.img3!==''
                ?
                <div className="box">
                    <div className="tag">{data.tip_genre.name}</div>
                    <Image src={data.img3} alt="img" width={800} height={800}/>
                </div>
                :''}

            </Slider>
        </>
    )
}
export default DetailMainView;