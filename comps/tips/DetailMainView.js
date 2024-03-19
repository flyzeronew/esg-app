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
                {data.hasOwnProperty('cover_img') && data.cover_img!==''
                ?
                <div className="box">
                    <div className="tag">{data.tip_genre.name}</div>
                    <Image src={data.cover_img} alt="img" width={800} height={800}/>
                </div>
                :''}
                {data.hasOwnProperty('cover_img2') && data.cover_img2!==''
                ?
                <div className="box">
                    <div className="tag">{data.tip_genre.name}</div>
                    <Image src={data.cover_img2} alt="img" width={800} height={800}/>
                </div>
                :''}
                {data.hasOwnProperty('cover_img3') && data.cover_img3!==''
                ?
                <div className="box">
                    <div className="tag">{data.tip_genre.name}</div>
                    <Image src={data.cover_img3} alt="img" width={800} height={800}/>
                </div>
                :''}

            </Slider>
        </>
    )
}
export default DetailMainView;