import React, { Component } from "react"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function ViewList(props) {
    const appUrl = process.env.APP_URL;
    const articles = props.articles;
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
    return (        
        <div className="view">
            <Slider {...settings}>
                {articles.length > 0 ?
                    articles.map((item, index) => (
                        <a key={index} href={`${appUrl}/view/${item.article_genres[0].en_name}/${item.id}`} >
                            <div className="img">
                                <img src={item.cover_img} alt="img" width={1920} height={1080} loading='lazy'/>  
                            </div>
                            <div className="category">
                                <span>永續觀點</span>
                                <div className="line"></div>
                                <span>{item.article_genres[0].name}</span>
                            </div>
                            <div className="txt">{item.title}</div>
                        </a>
                    ))
                :""}
            </Slider>
        </div> 
    )
}
export default ViewList;