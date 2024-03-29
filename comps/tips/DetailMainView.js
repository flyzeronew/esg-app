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
                    <img src={data.img} alt="img" width={800} height={800} loading='lazy'/>
                </div>
                :''}
                {data.hasOwnProperty('img2') && data.img2!==''
                ?
                <div className="box">
                    <div className="tag">{data.tip_genre.name}</div>
                    <img src={data.img2} alt="img" width={800} height={800} loading='lazy'/>
                </div>
                :''}
                {data.hasOwnProperty('img3') && data.img3!==''
                ?
                <div className="box">
                    <div className="tag">{data.tip_genre.name}</div>
                    <img src={data.img3} alt="img" width={800} height={800} loading='lazy'/>
                </div>
                :''}
                {data.hasOwnProperty('img4') && data.img4!==''
                ?
                <div className="box">
                    <div className="tag">{data.tip_genre.name}</div>
                    <img src={data.img4} alt="img" width={800} height={800} loading='lazy'/>
                </div>
                :''}
                {data.hasOwnProperty('img5') && data.img5!==''
                ?
                <div className="box">
                    <div className="tag">{data.tip_genre.name}</div>
                    <img src={data.img5} alt="img" width={800} height={800} loading='lazy'/>
                </div>
                :''}

            </Slider>
        </>
    )
}
export default DetailMainView;