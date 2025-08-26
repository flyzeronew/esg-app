
import { useState ,useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Submenu from '../../comps/Submenu/Submenu'
import ArticleList from '../../comps/view/ArticleList'
import Header from '../../comps/Header/Header'
import Footer from '../../comps/Footer/Footer'
import Pagination from '../../comps/pagination/Pagination'
import classNames from 'classnames/bind'
import styles from './view.module.css'
import SharedBanner from '@/comps/sharedBanner/SharedBanner'
import { extractDetailsFromSub } from '@/util/helpers'

export default function Genres(props) {
    // 頁面識別
    const thisPage='view';
    const cx  = classNames.bind(styles);
    const appUrl = process.env.APP_URL;
    const ogImg = process.env.OG_IMG;
    // 計算文章數量轉頁面數
    const articleNum = 12;
    const articleCount = props.articlesData.article_count-1;
    const articleMath = Math.floor(articleCount / articleNum);
    const pageCount = articleCount % articleNum != 0 ? articleMath + 1 : articleMath ;
    // 計算文章數量轉頁面數 ed
    const router = useRouter();
    const viewSubmenu = props.viewSubmenuData;
    const articlesFirst = props.articlesData.articles[0];
    const articleList = props.page > 1 ? props.articlesData.articles : props.articlesData.articles.slice(1);
    const genreEnName=String(props.genreEnName);
    const uri =`/view/${genreEnName}`;
    const genreData = props.genreData;
    const genreId = genreData ? genreData.id :'';
    const genrePageDetails = extractDetailsFromSub(props.menu, router.asPath);

    useEffect(() => {
        if (1 < pageCount && props.page > pageCount || genreData === '') {
            router.push('/404');
        }
    }, [pageCount, props.page, genreData, router]);

    return (
    <div id='wrapper'>
        <Head>
            <title>{`${genrePageDetails.title}`}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="Keywords" content="TVBS,TVBS GOOD,TVBS ESG,ESG,企業社會責任,ESG永續發展,ESG指標,ESG企業,ESG議題,ESG趨勢" />
            <meta name="description" content={genrePageDetails.meta_description}/>
            <meta name="author" content="TVBS" />
            <meta name="copyright" content="TVBS" />
            <meta name="application-name" content="TVBS" />
            <meta name="URL" content={`${appUrl}/${genrePageDetails.pathname}`} />
            <meta name="medium" content="mult" />
            <meta name="robots" content="index,follow"/>
            <meta property="og:image" content={ogImg} />
            <link rel="canonical" href={`${appUrl}/${genrePageDetails.pathname}`} />
        </Head>
        <Header thisPage={thisPage} menuData={props.menu}/>
        <main>
            <div className={cx("viewPage")}>
                {/* 大標 */}
                {/* shared banner component goes here*/}
                <div className={cx("bannerSection")}>
                    <SharedBanner
                            title={genrePageDetails.page}
                            description={genrePageDetails.page_description}>
                    </SharedBanner>
                </div>
                {/* 大標 ed*/}
                {/* 分類標籤 */}
                    <Submenu  submenu={viewSubmenu} page={"view"} genreEnName={genreEnName} genreId={genreId}/>
                {/* 分類標籤 ed*/}

                {/* 主視覺 */}
                {articlesFirst && props.page === 1 ?
                    <div className={cx("mainView")}>
                        <a href={`${appUrl}/view/${articlesFirst.article_genres[0].en_name}/${articlesFirst.id}`} >
                            <div className={cx("box")}>
                                <div className={cx("img")}>
                                    <img src={`${articlesFirst.cover_img ? articlesFirst.cover_img : process.env.IMG_DEFAULT}`} alt="arraw" width={1072} height={603} loading="lazy"/>
                                    <div className={cx("imgMaskBox")}>
                                        <div className={cx("rounded")}>
                                            <img src={`${appUrl}/images/rounded-01.svg`} alt="arraw" width={50} height={50} loading="lazy"/>
                                        </div>
                                        <div className={cx("case")}>
                                            <div className={cx("rounded")}>
                                                <img src={`${appUrl}/images/rounded-01.svg`} alt="arraw" width={50} height={50} loading="lazy"/>
                                            </div>
                                            <div className={cx("imgMask")}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx("txtBox")}>
                                    <h2 className={cx("title")}>{articlesFirst.title}</h2>
                                    <div className={cx("txt")}>{articlesFirst.description}</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    :''
                }
                {/* 主視覺 ed*/}

                {/* 文章列表 */}
                    <ArticleList  articleList={articleList}/>
                {/* 文章列表 ed */}
                {/* 跳頁選單 */}
                    { pageCount > 1 ? <Pagination uri={uri} pageCount={pageCount} /> :''}

                {/* 跳頁選單 ed */}
            </div>

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
        const { query } = context;
        const page = query.page ? Number(query.page) : 1;
        const genreEnName = query.genres;

        // 拉資料方式參考首頁
        const { menu, colorMapping, extraData } = await fetchPageData({
            extraApiPaths: [
                `/api/article-genres`,
                `/api/articles?genre_en_name=${genreEnName}&page=${page}&fields=id,title,cover_img,article_genres,author_name,partner,description`
            ],
        });

        const viewSubmenuData = extraData[0];
        const articlesData = extraData[1];
        const genreData = viewSubmenuData.find(item => item.en_name === genreEnName) || null;

        if (!genreData?.id) {
            return { notFound: true };
        }

        return {
            props: {
                menu,
                viewSubmenuData,
                articlesData,
                genreEnName,
                page,
                genreData,
                colorMapping,
            },
        };
    } catch (error) {
        console.error("Error in getServerSideProps (view/[genres]):", error);
        return {
            notFound: true,
        };
    }
}
