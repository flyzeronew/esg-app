
import { useState ,useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Submenu from '../../comps/view/Submenu'
import ArticleList from '../../comps/view/ArticleList'
import Header from '../../comps/Header'
import Footer from '../../comps/Footer'

const inter = Inter({ subsets: ['latin'] })
export default function Genres(props) {
    const router = useRouter();
    const viewSubmenu = props.viewSubmenuData;    
    const articleList = props.viewData.article_list;
    const genreEnName=String(props.genreEnName);
    const genreData = viewSubmenu.find(item => item.en_name === genreEnName);
    const genreId = genreData ? genreData.id :'';
    const genreName = genreData ? genreData.name :'';
    const genreDescription =genreData ? genreData.description :'';
    useEffect(() => {
        if (!genreData) {
            router.push('/404');
        }
    }, []);

    // 頁面識別
    const thisPage='view';
    return (
    <div id='wrapper' className={inter.className}> 
        <Head>
            <title>{`${genreName} - TVBS ESG專區`}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="Keywords" content="" />
            <meta name="description" content={genreDescription}/>        
        </Head>
        <Header thisPage={thisPage} menuData={props.menu}/>
        <main>
            <div className="viewPage">
                {/* 大標 */}
                <div className="sharedBanner">
                    <div className="mask"></div>
                    <div className="box">
                        <div className="title">{genreName}</div>
                        <div className="txt">
                            <p>{genreDescription}</p>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
                {/* 大標 ed*/}
                {/* 分類標籤 */}
                    <Submenu  submenu={viewSubmenu} genreEnName={genreEnName} genreId={genreId}/>
                {/* 分類標籤 ed*/}
                {/* 文章列表 */}                
                    <ArticleList  articleList={articleList} genreId={genreId} genreEnName={genreEnName}/>
                {/* 文章列表 ed */}                
            </div>
            
        </main>
        <div className="footerLine">
            <div className="box"></div>
        </div>
        <Footer />
    </div>
    );
}

export async function getServerSideProps(context) {
    const genreEnName = context.query.genres;
    const menuUrl = new URL('/api/menu', process.env.APP_URL);
    const menuRes = await fetch(menuUrl);
    const menu = await menuRes.json();
    // 線上資料
    // submenu
    const viewSubmenuUrl = new URL('/api/view-genres', process.env.APP_URL);
    const viewSubmenuRes = await fetch(viewSubmenuUrl);    
    const viewSubmenuData = await viewSubmenuRes.json();
    // list
    const viewUrl = new URL('/api/view', process.env.APP_URL);
    const viewRes = await fetch(viewUrl);    
    const viewData = await viewRes.json();
    
    return {
        props: {
            menu,viewSubmenuData,viewData,genreEnName,
        },
    };
}