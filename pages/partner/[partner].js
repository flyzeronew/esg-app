import { useState ,useEffect } from 'react'
import Head from 'next/head'
import Header from '../../comps/Header/Header'
import Footer from '../../comps/Footer/Footer'
import React, { Component } from "react"
import styles from './partner.module.css';
import classNames from 'classnames/bind';

export default function Partner(props) {
    const cx = classNames.bind(styles);
    const appUrl = process.env.APP_URL;
    const detail = props.detailData;

    const pcLinksArr = [
        ["first",process.env.IMG_DEFAULT],
        ["second",process.env.IMG_DEFAULT_SQUARE],
        ["third",process.env.IMG_DEFAULT_SQUARE],
        ["fourth",process.env.IMG_DEFAULT]];
    const moLinksIndexArr = [
        [0,"first",process.env.IMG_DEFAULT],
        [1,"second",process.env.IMG_DEFAULT_SQUARE],
        [3,"fourth",process.env.IMG_DEFAULT],
        [2,"third",process.env.IMG_DEFAULT_SQUARE]
    ];
// 頁面識別
const thisPage='partnerDetail';
const ogImg = process.env.OG_IMG;
const [imgHover, setImgHover] = useState(null);
const [bgSize, setBgSize] = useState();
const [hoverBgSize, setHoverBgSize] = useState();
const [clicked, setClicked] = useState(false);
const otherArticles = Array.isArray(props.detailData.other_articles) ? props.detailData.other_articles : [];
const otherArticlesSum = otherArticles.length > 0 ? otherArticles.reduce((acc, cur) => acc + cur.status, 0) : 0;
    const imgMouseOver = (e) => {
        const isLargeScreen = window.innerWidth > 767;
        setHoverBgSize(isLargeScreen ? 120 : 280);
        setImgHover(e);
    };

    const imgMouseOut = (e) => {
        setImgHover(null);
    };

    // 處理點擊事件
    const handleClick = () => {
        setClicked(!clicked);
    };

    // resize 監聽事件
    useEffect(() => {
        const handleResize = (e) => {
            let newSize = 100 ;
            if(window.innerWidth < 1609 && window.innerWidth > 1208){
                newSize = 135;
            }else if(window.innerWidth < 403){
                newSize = 125;
            }
            setBgSize(newSize);
            setHoverBgSize(newSize);
            setImgHover(null);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
return (
    <div id='wrapper'>
        <Head>
            <title>{"夥伴名 ESG共好夥伴 - TVBS ESG專區"}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="Keywords" content="esg,esg2,esg3" />
            <meta name="description" content="透過企業合作，ESG共好夥伴可以共享資源、互補優勢、擴大影響力，共同推動ESG理念的實踐，創造永續發展的未來。" />
            <meta property="og:image" content={ogImg} />
        </Head>
        <Header thisPage={thisPage} menuData={props.menu}/>
        <main>
            {detail?
            <div className={cx("partnerDetailPage")}>
                <div className={cx("bannerArea")}>
                    <div className={cx("coverImgBanner")} style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(${detail.cover_img ? detail.cover_img : process.env.IMG_DEFAULT})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <h1 className={cx("partnerName")}>{detail.name}</h1>
                    </div>
                    <div className={cx("introduceArea")}>
                        <div className={cx("introduceCard")}>
                            <div className={cx("avatar")}>
                                <img src={detail.avatar ? detail.avatar : process.env.IMG_DEFAULT_SQUARE} alt="img" width={140} height={140}/>
                            </div>
                            <div className={cx("detail")}>
                                {detail.introduction}
                            </div>
                            <div className={cx("leftPic")}>
                                <img src={"/images/Rectangle-left.svg"} alt="img" width={30} height={30}/>
                            </div>
                            <div className={cx("rightPic")}>
                                <img src={"/images/Rectangle-right.svg"} alt="img" width={30} height={30}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx("linksArea")}>
                    {detail.partner_links && detail.partner_links.length > 0 ?
                        <>
                            {/* pc */}
                            {detail.partner_links.map((item, index) => (
                                <div key={index} className={cx(pcLinksArr[index][0],"items", "pc")} style={{
                                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(${item.image_url ? item.image_url : pcLinksArr[index][1]})  no-repeat center center / 105%`,
                                    backgroundSize: index === imgHover ? `130%` : `105%`,
                                    transition: 'background-size 0.3s',
                                        }}
                                        onMouseOver={() => imgMouseOver(index)} onMouseOut={imgMouseOut}
                                >
                                    <a target={item.link_type ? `_blank` : ""} href={item.link_url}>
                                        <div className={cx("linkArea")}>
                                            <div className={cx("linkCard")}>
                                                <h3 className={cx("title")}>{item.link_title}</h3>
                                                <div className={cx("linkIcon")}>
                                                    <img src={"/images/icon_arraw04.svg"} alt="img" width={36} height={36}/>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}

                            {/* mobile */}
                            {moLinksIndexArr.map((item, index) => (
                                    <div key={index}  className={cx(item[1],"items", "mo")}   style={{
                                        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(${detail.partner_links[item[0]].image_url ? detail.partner_links[item[0]].image_url : item[2]})  no-repeat center center / 105%`,
                                        backgroundSize: index === imgHover ? `130%` : `105%`,
                                        transition: 'background-size 0.3s',
                                            }}
                                            onMouseOver={() => imgMouseOver(index)} onMouseOut={imgMouseOut}>
                                    <a target={detail.partner_links[item[0]].link_type ? `_blank` : ""} href={detail.partner_links[item[0]].link_url}>
                                        <div className={cx("linkArea")}>
                                            <div className={cx("linkCard")}>
                                                <div className={cx("title")}>
                                                    {detail.partner_links[item[0]].link_title}
                                                </div>
                                                <div className={cx("linkIcon")}>
                                                    <img src={"/images/icon_arraw04.svg"} alt="img" width={36} height={36}/>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}

                        </>
                    : undefined}
                </div>
                {detail.partner_pages && detail.partner_pages.length > 0 ?
                    <div className={cx("firstParagraph")}>
                        <h2 className={cx("wordsTitle")}>{detail.partner_pages[0].title}</h2>
                        <div className={cx("wordsTxt")}  dangerouslySetInnerHTML={{ __html: detail.partner_pages[0].content }}></div>
                    </div>
                :undefined}

                {detail.youtube_id !== undefined ?
                    <div className={cx("videoClick")} onClick={handleClick}>
                        {clicked ?
                        <div className={cx("videoArea")}  style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(${detail.video_cover_url})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} >
                            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${detail.youtube_id}?autoplay=1&mute=1`} frameborder="0" allowfullscreen></iframe>
                        </div>
                        :
                        <div className={cx("videoArea")}  style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(${detail.video_cover_url ? detail.video_cover_url : process.env.IMG_DEFAULT})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} >
                            <div className={cx("videoCard")}>
                                <div className={cx("videoTitle")}>
                                    {detail.video_title}
                                </div>
                                <div className={cx("play")}>
                                    <img src={"/images/play-icon.svg"} alt="img" width={48} height={48}/>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                :undefined}
                {detail.partner_pages && detail.partner_pages.length > 0 ?
                <div className={cx("secondParagraph")}>
                    <h2 className={cx("wordsTitle")}>{detail.partner_pages[1].title}</h2>
                    <div className={cx("wordsTxt")}  dangerouslySetInnerHTML={{ __html: detail.partner_pages[1].content }}></div>
                </div>
                :""}
                {/* 永續觀點的文章頁 */}
                {otherArticles && otherArticles.length > 0 && otherArticlesSum > 0 ?
                    <div className={cx("moreGoodNewsArea")}>
                        <div className={cx("title")}>更多共好消息</div>
                        <div className={cx("list")}>
                            <ul>
                                {otherArticles.map((item, index) => (
                                    <React.Fragment key={index}>
                                        {item.status > 0 ?
                                            <li
                                                style={{
                                                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(${item.cover_img})  no-repeat center center / 100%`,
                                                    backgroundSize: 1 === imgHover ? `${hoverBgSize}%` : `${bgSize}%`,
                                                    backgroundPosition: 'center center'
                                                }}
                                                onMouseOver={() => imgMouseOver(1)} onMouseOut={imgMouseOut}
                                            >
                                                <a href={`${appUrl}/view/${item.article_genres[0].en_name}/${item.id}`}>
                                                    <div className={cx("articleCard")}>
                                                        <div className={cx("articleTitle")}>{item.title}</div>
                                                        <div className={cx("linkIcon")}>
                                                            <img src={"/images/icon_arraw04.svg"} alt="img" width={36} height={36}/>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        :''}
                                    </React.Fragment>
                                ))}
                            </ul>
                        </div>
                    </div>
                :''}
            </div>
            :''}
        </main>
        <div className={cx("footerLine")}>
            <div className={cx("box")}></div>
        </div>
        <Footer />
    </div>
    );
}
import { fetchPageData } from '@/services/cms/fetchPageData';

export async function getServerSideProps(context) {
    try {
        const { params } = context;
        const { partner } = params;
        const { menu, extraData } = await fetchPageData({
            extraApiPaths: ['/api/partners'],
        });
        const partnerData = extraData[0];
        const filteredData = partnerData.filter(item => item.name === partner);
        if (!filteredData || filteredData.length === 0) {
            return { notFound: true };
        }
        const id = filteredData[0].id;
        const { extraData: detailExtraData } = await fetchPageData({
            extraApiPaths: [`/api/partners/${id}`],
        });
        const detailData = detailExtraData[0];
        return {
            props: {
                menu,
                detailData,
                id
            },
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
}
