import React, { Component } from "react"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function MainVision(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        自動播放速度: 3000  
    };  
    return (
            <div className="mainVision">
                <Slider {...settings}>                
                    <div className="box">
                        <img src="images/esg01.jpg" alt="img" width={1029} height={579}/>  
                        <div className="txtBox">
                            <div className="title">台灣剩食危機</div>
                            <div className="txt">每人每天浪費一個便當！</div>
                            <div className="object">
                                <div className="point"></div>
                                <div className="arraw">
                                <img src="images/icon_arraw02.svg" alt="arraw" width={50} height={50}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <img src="images/esg01.jpg" alt="img" width={1029} height={579}/>  
                        <div className="txtBox">
                        <div className="title">台灣剩食危機</div>
                        <div className="txt">每人每天浪費一個便當！</div>
                        <div className="object">
                            <div className="point"></div>
                            <div className="arraw">
                            <img src="images/icon_arraw02.svg" alt="arraw" width={50} height={50}/>
                            </div>
                        </div>
                        </div>
                    </div>
                </Slider>
            </div>
        )
}
export default MainVision;