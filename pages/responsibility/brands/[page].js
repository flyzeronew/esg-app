import { useState ,useEffect } from 'react'
import Head from 'next/head'
import Header from '../../../comps/Header/Header'
import Footer from '../../../comps/Footer/Footer'
import Practice from '../../../comps/responsibility/Practice'
import classNames from 'classnames/bind';
import styles from './brands.module.css';

export default function Page(props) {
    // 頁面識別
    const thisPage='responsibility';
    const cx = classNames.bind(styles);
    const ogImg = process.env.OG_IMG;
    const appUrl = process.env.APP_URL;
    const [clicked, setClicked] = useState(false);
    const responsibilityData = props.responsibilityData;
    const practiceData = props.brands.brand.more_articles;
    const otherBrands = props.brands.other_brands;
    const brands = props.brands.brand;
    const handleClick = () => {
        setClicked(!clicked);
    };
    const defaultClick = (event) => {
        event.preventDefault();
    };
    return (
    <div id='wrapper'>
        <Head>
            <title>{`${brands.name} - 永續品牌 - TVBS ESG專區`}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="Keywords" content="TVBS, TVBS GOOD,TVBS NEWS, TVBS ESG, ESG永續趨勢, ESG永續焦點, ESG永續發展, ESG議題" />
            <meta name="description" content={brands.description} />
            <meta name="author" content="TVBS" />
            <meta name="copyright" content="TVBS" />
            <meta name="application-name" content="TVBS" />
            <meta name="URL" content={`${appUrl}/${thisPage}/brands/${brands.id}`} />
            <meta name="medium" content="mult" />
            <meta name="robots" content="index,follow"/>
            <meta property="og:image" content={ogImg} />
            <link rel="canonical" href={`${appUrl}/${thisPage}/brands/${brands.id}`}/>
        </Head>
        <Header thisPage={thisPage} menuData={props.menu}/>
        <main>
            <div className={cx("brandsPage")}>
                <div className={cx("detailMainView")}>
                    <div className={cx("box")}>
                        <div className={cx("img")}>
                            <img src={brands.cover_img} alt="img" width={1072} height={603} loading="lazy"/>
                            <div className={cx("imgMaskBox")}>
                                <div className={cx("rounded","pc")}>
                                    <img src={`${appUrl}/images/rounded-01.svg`} alt="arraw" width={50} height={50} loading="lazy"/>
                                </div>
                                <div className={cx("case")}>
                                    <div className={cx("rounded")}>
                                        <img src={`${appUrl}/images/rounded-01.svg`} alt="arraw" width={50} height={50} loading="lazy"/>
                                    </div>
                                    <div className={cx("imgMask")}></div>
                                    <div className={cx("rounded","mo")}>
                                        <img src={`${appUrl}/images/rounded-04.svg`} alt="arraw" width={50} height={50} loading="lazy"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("logo")}>
                            <img src={brands.logo} alt="img" width={260} height={155} loading="lazy"/>
                        </div>
                        <div className={cx("txtBox")}>
                            <h2 className={cx("title")}>{brands.description}</h2>
                        </div>
                    </div>
                </div>

                <div className={cx("content")}>
                    <div className={cx("title")}>
                        <h2>{brands.first_title}</h2>
                        <div className={cx("line")}></div>
                    </div>
                    <p className={cx("intro")}>{brands.first_intro}</p>

                    <div className={cx("mainImage")}>
                        {
                            clicked ?
                                <div className={cx("video")}>
                                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${brands.youtube_id}?autoplay=1&mute=1`} frameborder="0" allowfullscreen></iframe>
                                </div>
                            :''
                        }
                        <div className={cx("img")} onClick={handleClick}>
                            <div className={cx("playIcon")}>
                                <img src={`${appUrl}/images/play-icon.svg`} alt="play" width={50} height={50} loading="lazy"/>
                            </div>
                            <div className={cx("txt")}>
                                <div className={cx("t1")}>{brands.video_title}</div>
                            </div>
                            <div className={cx("video")}>
                                <img src={brands.video_img} alt="img" width={1920} height={1080} loading="lazy"/>
                            </div>
                        </div>
                    </div>

                    <div className={cx("contxt")}>
                        <div className={cx("title")}>
                            <h2>{brands.second_title}</h2>
                            <div className={cx("line")}></div>
                        </div>
                        <p className={cx("intro")}>{brands.second_intro}</p>
                        <div className={cx("t1")}>
                            <div className={cx("line")}></div>
                            <p className={cx("intro")}>{brands.conclusion}</p>
                            <div className={cx("line")}></div>
                        </div>
                    </div>

                    {/* 輪播部分 */}
                    {practiceData && practiceData.length > 0 ?
                        <Practice practiceData={practiceData} />
                        :''
                    }
                    {/* 輪播部分 ed*/}

                    <div className={cx("brandIp")}>
                        <div className={cx("logo")}>
                            <img src={brands.logo} alt="img" width={260} height={155} loading="lazy"/>
                        </div>
                        <div className={cx("icon")}>
                            <a href={brands.brand_url} target='_blank' >
                                探索更多{brands.name}
                                <img src={`${appUrl}/images/icon_arraw09.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                            </a>
                        </div>
                    </div>

                    {otherBrands && otherBrands.length > 0 ?
                        <div className={cx("practiceMore")}>
                            <div className={cx("title","s1")}>更多TVBS永續品牌</div>
                            <div className={cx("brandMore")}>
                                <ul>
                                    { otherBrands.map((item, index) => (
                                        <li key={index} >
                                            <a href={`${appUrl}/${thisPage}/brands/${item.id}`}>
                                                <div className={cx("imgBox")}>
                                                    <div className={cx("img")}>
                                                        <img src={item.cover_img} alt="img" width={1072} height={603} loading="lazy"/>
                                                    </div>
                                                    <div className={cx("logoBox")}>
                                                        <div className={cx("rounded")}>
                                                            <img src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                                        </div>
                                                        <div className={cx("logoFlex")}>
                                                            <div className={cx("logo")}>
                                                                <img src={item.logo} alt="img" width={1072} height={603} loading="lazy"/>
                                                            </div>
                                                            <div className={cx("rounded")}>
                                                                <img src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cx("txtBox")}>
                                                    <div className={cx("txt")}>{item.description}</div>
                                                    <img src={`${appUrl}/images/icon_arraw09.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                                </div>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        :''
                    }
                </div>
            </div>
        </main>
        <div className={cx("footerLine","color1")}>
            <div className={cx("box")}></div>
        </div>
        <Footer act='color1'/>
    </div>
    );
}

import { fetchPageData } from '@/services/cms/fetchPageData';

export async function getServerSideProps(context) {
    try {
        const page = context.query.page;
        const { menu, extraData } = await fetchPageData({
            extraApiPaths: [
                `/api/responsibility-${process.env.APP_ENV === 'production' ? 'prd' : 'dev'}`,
                `/api/brands/${page}`
            ]
        });
        const [responsibilityData, brands] = extraData;
        if (!brands) {
            return {
                notFound: true,
            };
        }
        return {
            props: {
                menu,
                responsibilityData,
                page,
                brands
            },
        };
    } catch (error) {
        console.error("Error in getServerSideProps (brands/[page]):", error);
        return {
            notFound: true,
        };
    }
}
