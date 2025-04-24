import { useState ,useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from './../../comps/Header/Header'
import Footer from './../../comps/Footer/Footer'
import SharedBanner from './../../comps/sharedBanner/SharedBanner'
import Submenu from './../../comps/Submenu/Submenu'
import List from './../../comps/tips/list/List'
import JumpPage from './../../comps/pagination/Pagination'
import styles from './index.module.css';
import classNames from 'classnames/bind';
import { genericPageService } from '@/services/cms/apisCMS';

const cx = classNames.bind(styles);

export default function Tips(props) {
    const router = useRouter();
    const detailsOfPage = props.menu.find((menuItem) => menuItem.pathname === router.pathname);
    // 頁面識別
    const thisPage='tips';
    const ogImg = process.env.OG_IMG;
    const appUrl = process.env.APP_URL;
    const tipsSubmenu = props.submenuData;
    const showList = props.tipsData.tips;
    const colorMapping = props.colorMapping;
    // 計算文章數量轉頁面數
    const articleNum = 20;
    const articleCount = props.tipsData.tip_count;
    const articleMath = Math.floor(articleCount / articleNum);
    const pageCount = articleCount % articleNum != 0 ? articleMath + 1 : articleMath;
    // 計算文章數量轉頁面數 ed
    useEffect(() => {
        if (props.page > pageCount) {
            router.push('/404');
        }
    }, []);
    return (
        <div id='wrapper'> 
            <Head>
                <title>{detailsOfPage.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="Keywords" content="TVBS, TVBS GOOD,TVBS NEWS, TVBS ESG, ESG永續趨勢, ESG永續焦點, ESG永續發展, ESG議題, ESG活動, ESG實踐" />
                <meta name="description" content={detailsOfPage.meta_description} />        
                <meta name="author" content="TVBS" />
                <meta name="copyright" content="TVBS" />
                <meta name="application-name" content="TVBS" />
                <meta name="URL" content={`${appUrl}${router.pathname}`} />
                <meta name="medium" content="mult" />
                <meta name="robots" content="INDEX,FOLLOW"/>
                <meta property="og:image" content={ogImg} /> 
                <link rel="canonical" href={`${appUrl}${router.pathname}`} />     
            </Head>
            <Header thisPage={thisPage} menuData={props.menu}/>
            <main>
                <div className={cx("tipsListPage")}>
                    <div className={cx("mainArea")}>
                        <SharedBanner title={detailsOfPage.page} description={detailsOfPage.page_description}/>
                        <Submenu submenu={tipsSubmenu} page={"tips"}/>
                                               
                    </div>
                   <div className={cx("listView")}>
                        <List listData={showList} colorMapping={colorMapping} />
                   </div>
                </div>
                {/* 跳頁選單 */}
                { pageCount > 1 ? <JumpPage uri={`/${thisPage}`} pageCount={pageCount} /> :''}
                {/* 跳頁選單 ed */}
            </main>
            <div className={cx("footerLine")}>
                <div className={cx("box")}></div>
            </div>
            <Footer />
        </div>
        );
}

export async function getServerSideProps(context) {    
    const { query } = context;    
    const page = query.page ? query.page : 1;
    const menu =  await genericPageService.getMenu();
    // 顏色配對
    const colorMappingUrl = new URL('/api/tips-color-mapping', process.env.APP_URL);
    const colorMappingRes = await fetch(colorMappingUrl);
    const colorMapping = await colorMappingRes.json();

    // submenu
    const submenuUrl = new URL('/api/tips-genres', process.env.APP_URL);
    const submenuRes = await fetch(submenuUrl);    
    const submenuData = await submenuRes.json();
    // list
    const tipsUrl = new URL(`/api/tips?page=${page}`, process.env.API_URL);
    const tipsRes = await fetch(tipsUrl);    
    const tipsData = await tipsRes.json();

    return {
        props: {
            menu,tipsData,submenuData,page,colorMapping,
        },
    };
}