
import Image from 'next/image'
import { useState ,useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Submenu from '../../comps/view/Submenu'
import ArticleList from '../../comps/view/ArticleList'
import Header from '../../comps/Header'
import Footer from '../../comps/Footer'
import JumpPage from '../../comps/JumpPage'

const inter = Inter({ subsets: ['latin'] })
export default function Genres(props) {
    const appUrl = process.env.APP_URL;
    // 頁面識別
    const thisPage='view';
    // 計算文章數量轉頁面數
    const articleCount = props.articlesData.article_count-1;
    const articleMath = Math.floor(articleCount/12);
    const pageCount = articleCount % 12 != 0 ? articleMath + 1 : articleMath;
    // 計算文章數量轉頁面數 ed
    const router = useRouter();
    const viewSubmenu = props.viewSubmenuData;    
    const articlesFirst = props.articlesData.articles[0];
    const articleList = props.page > 1 ? props.articlesData.articles : props.articlesData.articles.slice(1);
    const genreEnName=String(props.genreEnName);
    const uri =`/view/${genreEnName}`;
    const genreData = props.genreData;    
    const genreId = genreData ? genreData.id :'';
    const genreName = genreData ? genreData.name :'';
    const genreDescription =genreData ? genreData.description :'';
console.log(pageCount);
    useEffect(() => {
        if (props.page > pageCount) {
            router.push('/404');
        }
    }, []);    

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

                 {/* 主視覺 */}
                 {articlesFirst && props.page === 1 ?
                    <div className='mainView'>
                        <div className='box'>
                            <div className='img'>
                                <Image src={`${articlesFirst.cover_img}`} alt="arraw" width={1072} height={603}/>
                                <div className='imgMaskBox'>
                                    <div className='rounded'>
                                        <Image src={`${appUrl}/images/rounded-01.svg`} alt="arraw" width={50} height={50}/>
                                    </div>
                                    <div className='case'>
                                        <div className='rounded'>
                                            <Image src={`${appUrl}/images/rounded-01.svg`} alt="arraw" width={50} height={50}/>
                                        </div>
                                        <div className='imgMask'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='txtBox'>
                                <div className='title'>{articlesFirst.title}</div>
                                <div className='txt'>{articlesFirst.description}</div>
                            </div>
                        </div>
                    </div>
                    :''
                }
                {/* 主視覺 ed*/}
                
                {/* 文章列表 */}                
                    <ArticleList  articleList={articleList} genreId={genreId}/>
                {/* 文章列表 ed */}
                {/* 跳頁選單 */}
                    { pageCount > 1 ? <JumpPage uri={uri} pageCount={pageCount} /> :''}
                    
                {/* 跳頁選單 ed */}
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
    const { query } = context;
    const page = query.page ? query.page : 1;
    const genreEnName = context.query.genres;
    const menuUrl = new URL('/api/menu', process.env.APP_URL);
    const menuRes = await fetch(menuUrl);
    const menu = await menuRes.json();

    // 線上資料
    // submenu
    const viewSubmenuUrl = new URL('/api/article-genres', process.env.API_URL);
    const viewSubmenuRes = await fetch(viewSubmenuUrl);    
    const viewSubmenuData = await viewSubmenuRes.json();
    const genreData = viewSubmenuData.find(item => item.en_name === genreEnName);    
    const genreId = genreData ? genreData.id :'';
    // list
    const articlesUrl = new URL(`/api/articles?genre_id=${genreId}&page=${page}`, process.env.API_URL);
    const articlesRes = await fetch(articlesUrl);    
    const articlesData = await articlesRes.json();
    
    return {
        props: {
            menu,viewSubmenuData,articlesData,genreEnName,page,genreData
        },
    };
}