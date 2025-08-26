import Head from 'next/head'
import { useState ,useEffect } from 'react'
import { useRouter } from 'next/router'
import Header from '../../comps/Header/Header'
import Footer from '../../comps/Footer/Footer'
import SharedBanner from '../../comps/sharedBanner/SharedBanner'
import Submenu from '../../comps/Submenu/Submenu'
import List from '../../comps/tips/list/List'
import JumpPage from '../../comps/pagination/Pagination'
import styles from './index.module.css';
import classNames from 'classnames/bind';
import { extractDetailsFromSub } from '@/util/helpers';


export default function Genres(props) {

    // 頁面識別
    const thisPage='tips';
    const router = useRouter();
    const cx = classNames.bind(styles);
    const ogImg = process.env.OG_IMG;
    const appUrl = process.env.APP_URL;
    const tipsSubmenu = props.submenuData;
    const showList = props.tipsData.tips;
    const genreData = props.genreData;
    const genreId = props.genreId;
    const genreEnName=String(props.genreEnName);
    const colorMapping = props.colorMapping;
    // 計算文章數量轉頁面數
    const articleNum = 20;
    const articleCount = props.tipsData.tip_count;
    const articleMath = Math.floor(articleCount / articleNum);
    const pageCount = articleCount % articleNum != 0 ? articleMath + 1 : articleMath;
    // 計算文章數量轉頁面數 ed

    const genrePageDetails = extractDetailsFromSub(props.menu, router.asPath);
    if (!genrePageDetails) {
        if (typeof window !== "undefined") {
            router.replace('/404');
        }
        return null;
    }
    const uri =`/tips/${genreEnName}`;
    useEffect(() => {
        if (1 < pageCount && props.page > pageCount || genreData === '') {
            router.push('/404');
        }
    }, [pageCount, props.page, genreData, router]);

    return (
        <div id='wrapper'>
            <Head>
                <title>{genrePageDetails.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="Keywords" content="TVBS, TVBS GOOD,TVBS NEWS, TVBS ESG, ESG永續趨勢, ESG永續焦點, ESG永續發展, ESG議題, ESG活動, ESG實踐" />
                <meta name="description" content={genrePageDetails.meta_description} />
                <meta name="author" content="TVBS" />
                <meta name="copyright" content="TVBS" />
                <meta name="application-name" content="TVBS" />
                <meta name="URL" content={`${appUrl}${genrePageDetails.pathname}`} />
                <meta name="medium" content="mult" />
                <meta name="robots" content="index,follow"/>
                <meta property="og:image" content={ogImg} />
                <link rel="canonical" href={`${appUrl}${genrePageDetails.pathname}`} />
            </Head>
            <Header thisPage={thisPage} menuData={props.menu}/>
            <main>
                <div className={cx("tipsListPage")}>
                    <div className={cx("mainArea")}>
                        <SharedBanner title={genrePageDetails.page} description={genrePageDetails.page_description}/>
                        {/* <Submenu submenu={tipsSubmenu} rootPath={"tips"} genreEnName={genreEnName} genreId={genreId} /> */}
                        <Submenu submenu={tipsSubmenu} page={"tips"} genreId={genreId} genreEnName={genreEnName}></Submenu>
                    </div>
                    <div className={cx("listView")}>
                        <List listData={showList} colorMapping={colorMapping} genreId={genreId} />
                    </div>
                </div>
                { pageCount > 1 ? <JumpPage uri={uri} pageCount={pageCount} /> :''}
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
        const page = query.page ? query.page : 1;
        const genreEnName = context.query.genres;

        const { menu, colorMapping, extraData } = await fetchPageData({
            extraApiPaths: [
                '/api/tips-genres',
                `/api/tips?genre_en_name=${genreEnName}&page=${page}`
            ]
        });

        const [submenuData, tipsData] = extraData;
        const getGenreData = submenuData.find(item => item.en_name === genreEnName);
        const genreData = getGenreData || null;
        const genreId = getGenreData?.id || null;

        return {
            props: {
                menu,
                tipsData,
                submenuData,
                genreData,
                genreEnName,
                genreId,
                page,
                colorMapping
            },
        };
    } catch (error) {
        console.error("Error in getServerSideProps (tips/[genres]):", error);
        return {
            notFound: true,
        };
    }

}
