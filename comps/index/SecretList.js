import { useState ,useEffect } from 'react'
import Image from 'next/image'
import React, { Component } from "react"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function SecretList(props) {
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
        autoplaySpeed:10000, 
    };  
    return (
        <div className="secret">
            <div className="list">
                <Slider {...settings}>
                    <a href='#' onClick={handleClick}>
                        <div className="img mo">
                            <Image src="/images/esg03.jpg" alt="img" width={640} height={360}/>
                        </div>
                        <div className="subtitle">
                            <p>永續生活小撇步</p>
                            <div className="line"></div>
                            <div className="tag">衣</div>
                        </div>
                        <div className="title">
                            <p>吃完的免洗紙餐盒，需洗完再回收嗎？吃完的免洗紙餐盒，需洗完再回收嗎？</p>
                            <div className="img pc">
                                <Image src="/images/esg03.jpg" alt="img" width={640} height={360}/>
                            </div>
                        </div>
                        <div className="txt">嘗試替「舊愛」尋找新歡嘗試替「舊愛」尋找新歡嘗試替「舊愛」尋找新歡嘗試替「舊愛」尋找新歡嘗試替「舊愛」尋找新歡</div>
                    </a>
                    <a href='#' onClick={handleClick}>
                        <div className="img mo">
                            <Image src="/images/esg02.jpg" alt="img" width={640} height={360}/>
                        </div>
                        <div className="subtitle">
                            <p>永續生活小撇步</p>
                            <div className="line"></div>
                            <div className="tag">衣</div>
                        </div>
                        <div className="title">
                            <p>測試這2</p>
                            <div className="img pc">
                                <Image src="/images/esg02.jpg" alt="img" width={640} height={360}/>
                            </div>
                        </div>
                        <div className="txt">測試這2文字文字</div>
                    </a>
                </Slider>
            </div>
        </div>
    )
}
export default SecretList;