import { useState ,useEffect } from 'react'
import Image from 'next/image'
import React, { Component } from "react"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function ViewList(props) {
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
        autoplay: false,
    };  
    return (        
        <div className="partner">
            <div className="titleBox">
                <div className="title">Who’s doing ESG?</div>
                <div className="txt">落實ESG的夥伴 <Image src="/images/icon_arraw04.svg" alt="arraw" width={42} height={42}/></div>
            </div>
            <div className="list">
                <Slider {...settings}>
                    <div className="box">                    
                        <a href='#' onClick={handleClick}>
                        <div className="img">
                            <Image src="/images/partner01.jpg" alt="img" width={50} height={50}/>
                        </div>
                        <div className="txt">台灣雀巢 Nestlé Taiwan</div>
                        </a>

                        <a href='#' onClick={handleClick}>
                        <div className="img">
                            <Image src="/images/partner01.jpg" alt="img" width={50} height={50}/>
                        </div>
                        <div className="txt">台灣雀巢 Nestlé Taiwan</div>
                        </a>

                        <a href='#' onClick={handleClick}>
                        <div className="img">
                            <Image src="/images/partner01.jpg" alt="img" width={50} height={50}/>
                        </div>
                        <div className="txt">台灣雀巢 Nestlé Taiwan</div>
                        </a>                    
                    </div>

                    <div className="box">                    
                        <a href='#' onClick={handleClick}>
                        <div className="img">
                            <Image src="/images/partner01.jpg" alt="img" width={50} height={50}/>
                        </div>
                        <div className="txt">台灣雀巢 Nestlé Taiwan2</div>
                        </a>

                        <a href='##'>
                        <div className="img">
                            <Image src="/images/partner01.jpg" alt="img" width={50} height={50}/>
                        </div>
                        <div className="txt">台灣雀巢 Nestlé Taiwan2</div>
                        </a>

                        <a href='#' onClick={handleClick}>
                        <div className="img">
                            <Image src="/images/partner01.jpg" alt="img" width={50} height={50}/>
                        </div>
                        <div className="txt">台灣雀巢 Nestlé Taiwan2</div>
                        </a>                    
                    </div>
                </Slider>
            </div>
        </div> 
    )
}
export default ViewList;