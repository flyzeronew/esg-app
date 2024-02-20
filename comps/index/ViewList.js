import Link from 'next/link'
import { useState ,useEffect } from 'react'
import Image from 'next/image'
import React, { Component } from "react"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function ViewList(props) {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    };  
    return (        
        <div className="view">
            <Slider {...settings}>
                <Link href='javascript:void(0)'>
                    <div className="img">
                        <Image src="/images/esg02.jpg" alt="img" width={1920} height={1080}/>  
                    </div>
                    <div className="txt">一菜三吃！淨零綠生活當道 首「惜」廚師教您如何吃在地</div>
                </Link>
                <Link href='javascript:void(0)'>
                    <div className="img">
                        <Image src="/images/esg02.jpg" alt="img" width={1920} height={1080}/>  
                    </div>
                    <div className="txt">一菜三吃！淨零綠生活當道 首「惜」廚師教您如何吃在地</div>
                </Link>
            </Slider>
        </div> 
    )
}
export default ViewList;