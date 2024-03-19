import { useState ,useEffect } from 'react'
import Image from 'next/image'
import React, { Component } from "react"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function SecretList(props) {
    const data = props.data;
    const tipsGenresArr = [
        'tagFoodColor',
        'tagClothingColor',
        'tagHousingColor',
        'tagTransportColor',
        'tagEducationColor',
        'tagEntertainmentColor',
    ];
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
        <div className="secret">
            <div className="list">
                <Slider {...settings}>
                    {data.length > 0?data.map((item, index) => (
                                        <a href={item.url}>
                                        <div className="img mo">
                                            <Image src={item.img} alt="img" width={640} height={360}/>
                                        </div>
                                        <div className="subtitle">
                                            <p>永續生活小撇步</p>
                                            <div className={`line ${tipsGenresArr[item.tip_genre.id - 1]}`}></div>
                                            <div className={`tag ${tipsGenresArr[item.tip_genre.id - 1]}`}>{item.tip_genre.name}</div>
                                        </div>
                                        <div className="title">
                                            <div className="word">
                                                <p>
                                                    {item.title}
                                                </p>
                                                <div className="description">
                                                    {item.description}
                                                </div>
                                            </div>
                                            <div className="img pc">
                                                <Image src={item.img} alt="img" width={640} height={360}/>
                                            </div>
                                        </div>
                                    </a>
                   
                                    )):""}
                </Slider>
            </div>
        </div>
    )
}
export default SecretList;