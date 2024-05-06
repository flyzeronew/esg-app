import Head from 'next/head'
import { useState ,useEffect } from 'react'
import { useRouter } from 'next/router'
import { Inter } from 'next/font/google'
import Header from '../../comps/Header'
import Footer from '../../comps/Footer'
import SharedBanner from '../../comps/tips/SharedBanner'
import Submenu from '../../comps/tips/Submenu'
import List from '../../comps/tips/List'
import JumpPage from '../../comps/JumpPage'

const inter = Inter({ subsets: ['latin'] })
export default function Genres(props) {
    const router = useRouter();
    // 頁面識別
    const thisPage='tips';
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
    const uri =`/tips/${genreEnName}`;
    useEffect(() => {
        if (props.page > pageCount || genreData === '') {
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
                <link rel="canonical" href={`${appUrl}/${thisPage}`} />     
            </Head>
            <Header thisPage={thisPage} menuData={props.menu}/>
            <main>
                <div className="tipsListPage">
                    <div className="mainArea">
                        <SharedBanner/>
                        <Submenu submenu={tipsSubmenu} genreEnName={genreEnName} genreId={genreId} />
                    </div>
                    <List listData={showList} colorMapping={colorMapping} genreId={genreId} />
                </div>
                { pageCount > 1 ? <JumpPage uri={uri} pageCount={pageCount} /> :''}
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
    const genreEnName = context.query.genres;

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

    const getGenreData = submenuData.find(item => item.en_name === genreEnName);
    const genreData = getGenreData ? getGenreData:'';
    const genreId = getGenreData ? getGenreData.id :'';

    // list
    const tipsUrl = new URL(`/api/tips?genre_id=${genreId}&page=${page}`, process.env.API_URL);
    const tipsRes = await fetch(tipsUrl);    
    const tipsData = await tipsRes.json();
    
    return {
        props: {
            menu,tipsData,submenuData,genreData,genreEnName,genreId,page,colorMapping
        },
    };
}