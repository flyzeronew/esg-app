import React, { Component } from "react"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function SecretList(props) {
    const tips = props.tips;
    const colorMapping = props.colorMapping;
    const appUrl = process.env.APP_URL;
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
        <div className="secret">
            <div className="list">
                <Slider {...settings}>
                    {tips.length > 0 ? 
                        tips.map((item, index) => (
                            <a key={index} 
                                href={`${appUrl}/tips/${colorMapping[item.genre - 1].en_name}/${item.id}`}
                            >
                                <div className="img mo">
                                    <img src={item.tip_galleries[0].image_url} alt="img" width={640} height={360} loading='lazy'/>
                                </div>
                                <div className="subtitle">
                                    <p>永續生活小撇步</p>
                                    <div className={`line ${colorMapping[item.genre - 1].color}`}></div>
                                    <div className={`tag ${colorMapping[item.genre - 1].color}`}>{
                                        colorMapping[item.genre - 1].genre}
                                    </div>
                                </div>
                                <div className="title">
                                    <div className="word">
                                        <p>{item.title}</p>
                                    </div>
                                    <div className="img pc">
                                        <img src={item.tip_galleries[0].image_url} alt="img" width={640} height={360} loading='lazy'/>
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