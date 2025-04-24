import React, { Component } from "react"
import classnames from "classnames/bind"
import styles from './ViewList.module.css';
import CustomSlider from "../CustomSlider/CustomSlider";


const cx = classnames.bind(styles)
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
        <div className={cx("view")}>
            <CustomSlider settings={settings} customClass={"viewList"}>
                {articles.length > 0 ?
                    articles.map((item, index) => (
                        <a key={index} href={`${appUrl}/view/${item.article_genres[0].en_name}/${item.id}`} >
                            <div className={cx("img")} >
                                <img src={item.cover_img} alt="img" width={1920} height={1080} loading='lazy'/>  
                            </div>
                            <div className={cx("category")}>
                                <span>永續觀點</span>
                                <div className={cx("line")}></div>
                                <span>{item.article_genres[0].name}</span>
                            </div>
                            <div className={cx("txt")}>{item.title}</div>
                        </a>
                    ))
                :""}
            </CustomSlider>
        </div> 
    )
}
export default ViewList;