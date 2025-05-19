import { useState ,useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../comps/Header'
import Footer from '../comps/Footer'
import SharedBanner from '../comps/tips/SharedBanner'
import Submenu from '../comps/tips/Submenu'
import List from '../comps/tips/List'
import JumpPage from '../comps/JumpPage'

const inter = Inter({ subsets: ['latin'] })
export default function Tips(props) {
    const router = useRouter();
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
        <div id='wrapper' className={inter.className}> 
            <Head>
                <title>{"生活小撇步 - TVBS ESG專區"}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="Keywords" content="TVBS, TVBS GOOD,TVBS NEWS, TVBS ESG, ESG永續趨勢, ESG永續焦點, ESG永續發展, ESG議題, ESG活動, ESG實踐" />
                <meta name="description" content="ESG理念的實踐，需要從你我做起。如何透過食、衣、住、行、育、樂等方面的小撇步，來實踐ESG理念。" />        
                <meta name="author" content="TVBS" />
                <meta name="copyright" content="TVBS" />
                <meta name="application-name" content="TVBS" />
                <meta name="URL" content={`${appUrl}/${thisPage}`} />
                <meta name="medium" content="mult" />
                <meta name="robots" content="INDEX,FOLLOW"/>
                <meta property="og:image" content={ogImg} /> 
                <link rel="canonical" href={`${appUrl}/${thisPage}`} />     
            </Head>
            <Header thisPage={thisPage} menuData={props.menu}/>
            <main>
                <div className="tipsListPage">
                    <div className="mainArea">
                        <SharedBanner/>
                        <Submenu submenu={tipsSubmenu} />                       
                    </div>
                    <List listData={showList} colorMapping={colorMapping} />
                </div>
                {/* 跳頁選單 */}
                { pageCount > 1 ? <JumpPage uri={`/${thisPage}`} pageCount={pageCount} /> :''}
                {/* 跳頁選單 ed */}
            </main>
            <div className="footerLine">
                <div className="box"></div>
            </div>
            <Footer />
        </div>
        );
}

export async function getServerSideProps(context) {    
    const { query } = context;    
    const page = query.page ? query.page : 1;
    
    const menuUrl = new URL('/api/menu', process.env.APP_URL);
    const menuRes = await fetch(menuUrl);
    const menu = await menuRes.json();

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