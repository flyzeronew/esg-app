import Link from 'next/link'
import { useState ,useEffect } from 'react'
import Image from 'next/image'
import React, { Component } from "react"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function MainVision(props) {
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
    };  
    return (
        <div className="mainVision">
            <Slider {...settings}>                
                <Link href='#' onClick={handleClick}>
                    <div className="img" style={{ 
                        background: `url(/images/esg01.jpg) no-repeat center center`,
                        backgroundSize:`cover`,
                        transition: 'background-size 0.3s',
                    }}></div> 
                    
                    <div className="txtAbsolute">
                        <div className="txtBox">
                            <div className="title">台灣剩食危機</div>
                            <div className="txt">每人每天浪費一個便當！</div>
                            <div className="object">
                                <div className="point"></div>
                                <div className="arraw">
                                    <Image src="/images/icon_arraw02.svg" alt="arraw" width={50} height={50}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href='#' onClick={handleClick}>
                    <div className="img" style={{ 
                        background: `url(/images/esg04.jpg) no-repeat center center`,
                        backgroundSize:`cover`,
                        transition: 'background-size 0.3s',
                    }}></div>
                    <div className="txtAbsolute">
                        <div className="txtBox">
                            <div className="title">台灣剩食危機</div>
                            <div className="txt">每人每天浪費一個便當！</div>
                            <div className="object">
                                <div className="point"></div>
                                <div className="arraw">
                                    <Image src="/images/icon_arraw02.svg" alt="arraw" width={50} height={50}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </Slider>
        </div>
    )
}
export default MainVision;