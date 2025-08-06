import React, { Component } from 'react'
import styles from './TipsList.module.css';
import classnames from "classnames/bind";
import ScrollContainer from 'react-indiana-drag-scroll';

const cx = classnames.bind(styles)
function TipsList(props) {
    const appUrl = process.env.APP_URL
    return (
        <div className={cx("tips")}>
            <div className={cx("frameBox")}>
                <h2 className={cx("title")}>
                    永續小撇步
                    <img src={`${appUrl}/images/icon_arraw_no_bg2.svg`} alt="img" width={40} height={40} />
                </h2>
            </div>
            <ScrollContainer className={cx("list")} vertical={false}>
                <div className={cx("frameBox")}>
                  <ul>
                      <li>
                          <a href="##">
                              <div className={cx("img")}>
                                  <img src={`${appUrl}/images/main01.jpg`} alt="img" width={560} height={315} />
                              </div>
                              <div className={cx("txt")}>
                                  <p>
                                      氣候變遷全球暖化，民眾覺得台灣天氣越來越熱，進入夏季後電器用量會增加。根據TVBS最新民調發現，有95%民眾會隨手關燈，同時購買節能家電原因，有63%是為了節能減碳，但光節能減碳還不
                                  </p>
                              </div>
                          </a>
                      </li>
                      <li>
                          <a href="##">
                              <div className={cx("img")}>
                                  <img src={`${appUrl}/images/main01.jpg`} alt="img" width={560} height={315} />
                              </div>
                              <div className={cx("txt")}>
                                  <p>
                                      氣候變遷全球暖化，民眾覺得台灣天氣越來越熱，進入夏季後電器用量會增加。根據TVBS最新民調發現，有95%民眾會隨手關燈，同時購買節能家電原因，有63%是為了節能減碳，但光節能減碳還不
                                  </p>
                              </div>
                          </a>
                      </li>
                      <li>
                          <a href="##">
                              <div className={cx("img")}>
                                  <img src={`${appUrl}/images/main01.jpg`} alt="img" width={560} height={315} />
                              </div>
                              <div className={cx("txt")}>
                                  <p>
                                      氣候變遷全球暖化，民眾覺得台灣天氣越來越熱，進入夏季後電器用量會增加。根據TVBS最新民調發現，有95%民眾會隨手關燈，同時購買節能家電原因，有63%是為了節能減碳，但光節能減碳還不
                                  </p>
                              </div>
                          </a>
                      </li>
                      <li>
                          <a href="##">
                              <div className={cx("img")}>
                                  <img src={`${appUrl}/images/main01.jpg`} alt="img" width={560} height={315} />
                              </div>
                              <div className={cx("txt")}>
                                  <p>
                                      氣候變遷全球暖化，民眾覺得台灣天氣越來越熱，進入夏季後電器用量會增加。根據TVBS最新民調發現，有95%民眾會隨手關燈，同時購買節能家電原因，有63%是為了節能減碳，但光節能減碳還不
                                  </p>
                              </div>
                          </a>
                      </li>
                      <li>
                          <a href="##">
                              <div className={cx("img")}>
                                  <img src={`${appUrl}/images/main01.jpg`} alt="img" width={560} height={315} />
                              </div>
                              <div className={cx("txt")}>
                                  <p>
                                      氣候變遷全球暖化，民眾覺得台灣天氣越來越熱，進入夏季後電器用量會增加。根據TVBS最新民調發現，有95%民眾會隨手關燈，同時購買節能家電原因，有63%是為了節能減碳，但光節能減碳還不
                                  </p>
                              </div>
                          </a>
                      </li>
                      <li>
                          <a href="##">
                              <div className={cx("img")}>
                                  <img src={`${appUrl}/images/main01.jpg`} alt="img" width={560} height={315} />
                              </div>
                              <div className={cx("txt")}>
                                  <p>
                                      氣候變遷全球暖化，民眾覺得台灣天氣越來越熱，進入夏季後電器用量會增加。根據TVBS最新民調發現，有95%民眾會隨手關燈，同時購買節能家電原因，有63%是為了節能減碳，但光節能減碳還不
                                  </p>
                              </div>
                          </a>
                      </li>
                  </ul>
                </div>
            </ScrollContainer>
        </div>
    )
}
export default TipsList
