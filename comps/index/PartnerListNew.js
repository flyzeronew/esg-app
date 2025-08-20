import React, { Component } from 'react'
import styles from './PartnerListNew.module.css';
import classnames from "classnames/bind";
import CustomSlider from "../CustomSlider/CustomSlider";

const cx = classnames.bind(styles)
function PartnerList(props) {
  const partners = props.data
  const appUrl = process.env.APP_URL
  return (
    <div className={cx("partner")}>
      <div className={cx("frameBox")}>
        <h2 className={cx("title")}>
          <a href={`${appUrl}/partner`}>
            共好夥伴
            <img src={`${appUrl}/images/icon_arraw_no_bg2.svg`} alt="img" width={40} height={40} />
          </a>
        </h2>
        <div className={cx("txt")}>
          城市街頭盛開綠意，企業在環保徽章下環繞，共同編織著永續的未來。<br />
          讓城市與企業一同前行，共創可持續的明日。
        </div>
        <div className={cx("list")}>

          {partners && partners.length > 0 ?
            partners.map((item, index) => (
              <a
                key={index}
                href={
                    1 === item.has_detail_page ?
                    `${appUrl}/partner/` + item.name : item.outer_url
                }
                target={item.has_detail_page === 1 ? undefined : "_blank"}
                rel={item.has_detail_page === 1 ? undefined : "noopener noreferrer"}
              >
                <img src={item.avatar} alt="img" width={50} height={50} loading='lazy'/>
              </a>
            )) : ""
          }

        </div>
      </div>
    </div>
  )
}
export default PartnerList
