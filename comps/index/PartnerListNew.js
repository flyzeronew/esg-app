import React, { Component } from 'react'
import styles from './PartnerListNew.module.css';
import classnames from "classnames/bind";
import CustomSlider from "../CustomSlider/CustomSlider";

const cx = classnames.bind(styles)
function PartnerList(props) {
  const partners = props.partners
  const appUrl = process.env.APP_URL
  return (
    <div className={cx("partner")}>
      <div className={cx("frameBox")}>
        <h2 className={cx("title")}>
          共好夥伴
          <img src={`${appUrl}/images/icon_arraw_no_bg2.svg`} alt="img" width={40} height={40} />
        </h2>
        <div className={cx("txt")}>
          城市街頭盛開綠意，企業在環保徽章下環繞，共同編織著永續的未來。<br />
          讓城市與企業一同前行，共創可持續的明日。
        </div>
        <div className={cx("list")}>
          <a href="/partner">
            <img src={`${appUrl}/images/partner01.png`} alt="partner" />
          </a>
          <a href="/partner">
            <img src={`${appUrl}/images/partner02.png`} alt="partner" />
          </a>
          <a href="/partner">
            <img src={`${appUrl}/images/partner03.png`} alt="partner" />
          </a>
          <a href="/partner">
            <img src={`${appUrl}/images/partner04.png`} alt="partner" />
          </a>
          <a href="/partner">
            <img src={`${appUrl}/images/partner05.png`} alt="partner" />
          </a>
          <a href="/partner">
            <img src={`${appUrl}/images/partner06.png`} alt="partner" />
          </a>
          <a href="/partner">
            <img src={`${appUrl}/images/partner07.png`} alt="partner" />
          </a>
          <a href="/partner">
            <img src={`${appUrl}/images/partner08.png`} alt="partner" />
          </a>
          <a href="/partner">
            <img src={`${appUrl}/images/partner09.png`} alt="partner" />
          </a>
        </div>
      </div>
    </div>
  )
}
export default PartnerList
