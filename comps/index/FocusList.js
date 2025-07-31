import React, { Component } from "react"
import classnames from "classnames/bind"
import styles from './FocusList.module.css';


const cx = classnames.bind(styles);
const appUrl = process.env.APP_URL;

function FocusList(props) {
    return (        
        <div className={cx("focus")}>
            <div className={cx("frameBox")}>
                <h2 className={cx("title")}>
                    專題報導
                    <img src={`${appUrl}/images/icon_arraw_no_bg2.svg`} alt="img" width={40} height={40} />
                </h2>
                <div className={cx("report")}>
                    <div className={cx("first")}>
                        <a href="##">
                            <div className={cx("imgBox")}>
                                <div className={cx("arraw")}>
                                    <img src={`${appUrl}/images/icon_arraw_no_bg.svg`} alt="img" width={48} height={48} />
                                </div>
                                <div className={cx("imgBox")}>
                                    <img src={`${appUrl}/images/esg05.jpg`} alt="img" width={560} height={315} />
                                </div>
                            </div>
                            <div className={cx("txtBox")}>
                                <h4 className={cx("subTitle")}>
                                    EarthActionDay 2025
                                </h4>
                                <h3 className={cx("title")}>
                                    綠電節能特企
                                </h3>
                                <p className={cx("txt")}>
                                    氣候變遷全球暖化，民眾覺得台灣天氣越來越熱，進入夏季後電器用量會增加。根據TVBS最新民調發現，有95%民眾會隨手關燈，同時購買節能家電原因，有63%是為了節能減碳，但光節能減碳還不
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className={cx("list")}>
                        <a href="##">
                            <div className={cx("imgBox")}>
                                <div className={cx("arraw")}>
                                    <img src={`${appUrl}/images/icon_arraw_no_bg.svg`} alt="img" width={48} height={48} />
                                </div>
                                <div className={cx("imgBox")}>
                                    <img src={`${appUrl}/images/esg05.jpg`} alt="img" width={560} height={315} />
                                </div>
                            </div>
                            <div className={cx("txtBox")}>
                                <h4 className={cx("subTitle")}>
                                    EarthActionDay 2025
                                </h4>
                                <h3 className={cx("title")}>
                                    綠電節能特企
                                </h3>
                                <p className={cx("txt")}>
                                    氣候變遷全球暖化，民眾覺得台灣天氣越來越熱，進入夏季後電器用量會增加。根據TVBS最新民調發現，有95%民眾會隨手關燈，同時購買節能家電原因，有63%是為了節能減碳，但光節能減碳還不
                                </p>
                            </div>
                        </a>
                        <a href="##">
                            <div className={cx("imgBox")}>
                                <div className={cx("arraw")}>
                                    <img src={`${appUrl}/images/icon_arraw_no_bg.svg`} alt="img" width={48} height={48} />
                                </div>
                                <div className={cx("img")}>
                                    <img src={`${appUrl}/images/esg05.jpg`} alt="img" width={560} height={315} />
                                </div>
                            </div>
                            <div className={cx("txtBox")}>
                                <h4 className={cx("subTitle")}>
                                    EarthActionDay 2025
                                </h4>
                                <h3 className={cx("title")}>
                                    綠電節能特企
                                </h3>
                                <p className={cx("txt")}>
                                    氣候變遷全球暖化，民眾覺得台灣天氣越來越熱，進入夏季後電器用量會增加。根據TVBS最新民調發現，有95%民眾會隨手關燈，同時購買節能家電原因，有63%是為了節能減碳，但光節能減碳還不
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div> 
    )
}
export default FocusList;