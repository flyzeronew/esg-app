import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Submenu from '../../comps/Submenu/Submenu'
import ArticleList from '../../comps/view/ArticleList'
import Header from '../../comps/Header/Header'
import Footer from '../../comps/Footer/Footer'
import Pagination from '../../comps/pagination/Pagination'
import classNames from 'classnames/bind';
import styles from './view.module.css';
import MetaTags from '@/comps/MetaTag/MetaTag';
import SharedBanner from '@/comps/sharedBanner/SharedBanner';

export default function View(props) {

    const cx = classNames.bind(styles);
    const ogImg = process.env.OG_IMG;
    const router = useRouter();
    const detailsOfPage = props.menu.find((menuItem) => menuItem.pathname === router.pathname);

    const pageMetaDetails = {
        title: detailsOfPage.title,
        keywords: "TVBS,TVBS GOOD,TVBS ESG,企業社會責任,ESG永續發展,ESG指標,ESG企業,ESG議題",
        description: detailsOfPage.meta_description,
        author: "TVBS",
    }
    // 計算文章數量轉頁面數
    const articleNum = 12;
    const articleCount = props.articlesData.article_count - 1;
    const articleMath = Math.floor(articleCount / articleNum);
    const pageCount = articleCount % articleNum != 0 ? articleMath + 1 : articleMath;
    // 計算文章數量轉頁面數 ed
    const viewSubmenu = props.viewSubmenuData;
    const articlesFirst = props.articlesData.articles[0];
    const articleList = props.page > 1 ? props.articlesData.articles : props.articlesData.articles.slice(1);
    useEffect(() => {
        if (props.page > pageCount) {
            router.push('/404');
        }
    }, []);
    // 頁面識別
    const thisPage = 'view';
    const metaTagDetails = {
        currentPage: thisPage,
        ogImg: ogImg,
        pageInfo: pageMetaDetails,
        appUrl: process.env.APP_URL,
    }

    return (
        <div id='wrapper'>
            <MetaTags {...metaTagDetails}></MetaTags>
            <Header menuData={props.menu} />
            <main>
                <div className={cx("viewPage")}>

                    {/* 大標 */}
                    {/* shared banner component goes here*/}
                    <div className={cx("bannerSection")}>
                        <SharedBanner
                            title={detailsOfPage.page}
                            description={detailsOfPage.page_description}
                        ></SharedBanner>
                    </div>
                    {/* 大標 ed*/}

                    {/* 分類標籤 */}
                    <Submenu submenu={viewSubmenu} page={"view"}/>
                    {/* 分類標籤 ed*/}

                    {/* 主視覺 */}
                    {articlesFirst && props.page === 1 ?
                        <div className={cx("mainView")}>
                            <a href={`/view/${articlesFirst.article_genres?.[0]?.en_name || 'unknown'}/${articlesFirst.id}`} >
                                <div className={cx("box")}>
                                    <div className={cx("img")}>
                                        <img src={`${articlesFirst.cover_img ? articlesFirst.cover_img : process.env.IMG_DEFAULT}`} alt="Banner sustainable perspective" width={1072} height={603} loading="lazy" />
                                        <div className={cx("imgMaskBox")}>
                                            <div className={cx("rounded")}>
                                                <img src={`/images/rounded-01.svg`} alt="corner header" width={50} height={50} loading="lazy" />
                                            </div>
                                            <div className={cx("case")}>
                                                <div className={cx("rounded")}>
                                                    <img src={`/images/rounded-01.svg`} alt="corner header" width={50} height={50} loading="lazy" />
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
                        : ''
                    }
                    {/* 主視覺 ed*/}
                    {/* 文章列表 */}
                    <ArticleList articleList={articleList} key={"articleList"} />
                    {/* 文章列表 ed */}
                    {/* 跳頁選單 */}
                    {pageCount > 1 ? <Pagination uri={`/${thisPage}`} pageCount={pageCount} /> : undefined}
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
        const { query, res } = context;
        const page = Number(query.page) || 1;

        // 設定 response headers
        res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=120');

        const { menu, colorMapping, extraData } = await fetchPageData({
            extraApiPaths: [
                `/api/article-genres`,
                `/api/articles?page=${page}`
            ],
            includeColorMapping: true,
        });
        return {
            props: {
                page,
                menu,
                colorMapping,
                viewSubmenuData: extraData[0],
                articlesData: extraData[1],
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            notFound: true,
        };
    }
}
