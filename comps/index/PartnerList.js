import { useState ,useEffect } from 'react'
import Image from 'next/image'
import React, { Component } from "react"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function PartnerList(props) {
    const data = props.data;
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
                    {data.length>0?data.reduce((acc, item, index) => {
                        if (index % 3 === 0) {
                            acc.push(data.slice(index, index + 3));
                        }
                        return acc;
                    }, []).map((chunk, chunkIndex) => (
                        <div className="box" key={chunkIndex}>
                            {chunk.map((item, index) => (
                                <a href={`/partner/${item.name}`} key={index}>
                                    <div className="img">
                                        <Image src={item.avatar} alt="img" width={50} height={50}/>
                                    </div>
                                    <div className="txt">{item.name}</div>
                                </a>
                            ))}
                        </div>
                    )):""}
                </Slider>
            </div>
        </div> 
    )
}
export default PartnerList;