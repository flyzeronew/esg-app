import React, { Component } from "react"
import CustomSlider from "../CustomSlider/CustomSlider";
import styles from './SecretList.module.css';
import classnames from "classnames/bind";

const cx = classnames.bind(styles)
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
        <div className={cx("secret")}>
            <div  className={cx("list")}>
                <CustomSlider settings={settings}>
                    {tips.length > 0 ? 
                        tips.map((item, index) => (
                            <a key={index} 
                                href={`${appUrl}/tips/${colorMapping[item.genre - 1].en_name}/${item.id}`}
                            >
                                <div className={cx("img","mo")} >
                                    <img src={item.tip_galleries[0].image_url} alt="img" width={640} height={360} loading='lazy'/>
                                </div>
                                <div className={cx("subtitle")}>
                                    <p>永續生活小撇步</p>
                                    <div className={cx("line" ,colorMapping[item.genre - 1].color)} ></div>
                                    <div className={cx("tag", colorMapping[item.genre - 1].color)}>{
                                        colorMapping[item.genre - 1].genre}
                                    </div>
                                </div>
                                <div className={cx("title")}>
                                    <div className={cx("word")}>
                                        <p>{item.title}</p>
                                    </div>
                                    <div className={cx("img","pc")} >
                                        <img src={item.tip_galleries[0].image_url} alt="img" width={640} height={360} loading='lazy'/>
                                    </div>
                                </div>
                            </a>
                        )):""}
                </CustomSlider>
            </div>
        </div>
    )
}
export default SecretList;