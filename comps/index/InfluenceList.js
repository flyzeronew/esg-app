import React, { Component } from "react"
import classnames from "classnames/bind"
import styles from './InfluenceList.module.css';


const cx = classnames.bind(styles);
const appUrl = process.env.APP_URL;

function InfluenceList(props) {
    return (        
        <div className={cx("influence")}>
            <div className={cx("frameBox")}>
                <h2 className={cx("title")}>
                    永續影響力
                </h2>
            </div>
            <div className={cx("list")}>
                <div className={cx("list")}>
                    <ul>
                        <li>
                            <a href="##">
                                <div className={cx("imgBox")}>
                                    <div className={cx("arraw")}>
                                        <img src={`${appUrl}/images/icon_arraw_no_bg.svg`} alt="img" width={48} height={48} />
                                    </div>
                                    <div className={cx("img")}>
                                        <img src={`${appUrl}/images/main01.jpg`} alt="img" width={560} height={315} />
                                    </div>
                                    <div className={cx("txtBox")}>
                                        <h3 className={cx("title")}>
                                            綠電節能特企
                                        </h3>
                                        <p className={cx("txt")}>
                                            氣候變遷全球暖化，民眾覺得台灣天氣越來越熱，進入夏季後電器用量會增加。根據TVBS最新民調發現，有95%民眾會隨手關燈，同時購買節能家電原因，有63%是為了節能減碳，但光節能減碳還不
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="##">
                                <div className={cx("imgBox")}>
                                    <div className={cx("arraw")}>
                                        <img src={`${appUrl}/images/icon_arraw_no_bg.svg`} alt="img" width={48} height={48} />
                                    </div>
                                    <div className={cx("img")}>
                                        <img src={`${appUrl}/images/Influence-img02.jpg`} alt="img" width={560} height={315} />
                                    </div>
                                    <div className={cx("txtBox")}>
                                        <h3 className={cx("title")}>
                                            半夜想吃宵夜卻買不到？！
                                        </h3>
                                        <p className={cx("txt")}>
                                            當半夜三點你想吃宵夜，24 小時經營的便利商店是你的好選擇。而另一個 24 小時不間斷、源源不絕提供我們資源的，是「地球」。但你曾經想過，如果有一天地球「售罄」了，誰會來補貨？
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="##">
                                <div className={cx("imgBox")}>
                                    <div className={cx("arraw")}>
                                        <img src={`${appUrl}/images/icon_arraw_no_bg.svg`} alt="img" width={48} height={48} />
                                    </div>
                                    <div className={cx("img")}>
                                        <img src={`${appUrl}/images/Influence-img03.jpg`} alt="img" width={560} height={315} />
                                    </div>
                                    <div className={cx("txtBox")}>
                                        <h3 className={cx("title")}>
                                            衣服洗壞、縮水、褪色怎麼辦？這些保命術讓你的衣服多活幾年！
                                        </h3>
                                        <p className={cx("txt")}>
                                            時尚產業光是每年丟棄的衣物超過9200萬噸，有時候只要動動手就能輕鬆救回那些看似報廢的衣服，不僅省錢，也為環境盡一份心力！
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div> 
    )
}
export default InfluenceList;