import React, { Component } from 'react'
import styles from './PartnerList.module.css';
import classnames from "classnames/bind";
import CustomSlider from "../CustomSlider/CustomSlider";

const cx = classnames.bind(styles)
function PartnerList(props) {
  const partners = props.partners
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: false,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  return (
    <div className={cx("partner")}>
      <div className={cx("titleBox")}>
        <div className={cx("title")}>
          <a href="/partner">Who’s doing ESG?</a>
        </div>
        <div className={cx("txt")}>
          落實ESG的夥伴{' '}
          <a href="/partner">
            <img
              src="/images/icon_arraw04.svg"
              alt="arraw"
              width={42}
              height={42}
              loading="lazy"
            />
          </a>
        </div>
      </div>
      <div className={cx("list")}>
        <CustomSlider settings={settings}>
          {partners.length > 0
            ? partners
                .reduce((acc, item, index) => {
                  if (index % 3 === 0) {
                    acc.push(partners.slice(index, index + 3))
                  }
                  return acc
                }, [])
                .map((chunk, chunkIndex) => (
                  <div className={cx("box")} key={chunkIndex}>
                    {chunk.map((item, index) => (
                      <a
                        key={index}
                        href={
                          1 === item.has_detail_page
                            ? `/partner/` + item.name
                            : item.outer_url
                        }
                        style={
                          0 === item.has_detail_page && '' === item.outer_url
                            ? { pointerEvents: 'none' }
                            : {}
                        }
                      >
                        <div className={cx("img")}>
                          <img
                            src={item.avatar}
                            alt="img"
                            width={50}
                            height={50}
                            loading="lazy"
                          />
                        </div>
                        <div className={cx("txt")} >{item.name}</div>
                      </a>
                    ))}
                  </div>
                ))
            : ''}
        </CustomSlider>
      </div>
    </div>
  )
}
export default PartnerList
