import React, { Component } from "react"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function PartnerList(props) {
    const partners = props.partners;
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide:false,
        autoplay: true,
        autoplaySpeed:5000,
    };  

    const defaultClick = (event) => {
        event.preventDefault();
    };
    return (        
        <div className="partner">
            <div className="titleBox">
                <div className="title"><a href="/partner">Who’s doing ESG?</a></div>
                <div className="txt">落實ESG的夥伴 <a href="/partner"><img src="/images/icon_arraw04.svg" alt="arraw" width={42} height={42} loading='lazy'/></a></div>
            </div>
            <div className="list">
                <Slider {...settings}>
                    {partners.length > 0 ? partners.reduce((acc, item, index) => {
                        if (index % 3 === 0) {
                            acc.push(partners.slice(index, index + 3));
                        }
                        return acc;
                    }, []).map((chunk, chunkIndex) => (
                        <div className="box" key={chunkIndex}>
                            {chunk.map((item, index) => (
                                <a href={`#`} key={index} onClick={defaultClick}>
                                    <div className="img">
                                        <img src={item.avatar} alt="img" width={50} height={50} loading='lazy'/>
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