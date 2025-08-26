import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
import styles from './PartnerListNew.module.css';
import classnames from "classnames/bind";

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
          深耕在地、放眼國際，TVBS GOOD 積極發揮媒體影響力，<br/>
          攜手全球永續夥伴，將善意化為行動，共同倡議永續生活。
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
                <LazyLoad
                  width={50}
                  height={50}
                  offset={100}
                  placeholder={<img src={process.env.IMG_DEFAULT} alt="loading..." />}
                  once
                >
                  <img src={item.avatar} alt="img" width={50} height={50}/>
                </LazyLoad>
              </a>
            )) : ""
          }

        </div>
      </div>
    </div>
  )
}
export default PartnerList
