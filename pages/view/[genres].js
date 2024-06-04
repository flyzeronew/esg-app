
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
    const genreName = genreData ? genreData.name :'';
    const genreDescription =genreData ? genreData.description :'';
    useEffect(() => {
        if (props.page > pageCount || genreData ==='') {
            router.push('/404');
        }
    }, []);    

    return (
    <div id='wrapper' className={inter.className}> 
        <Head>
            <title>{`${genreName} - TVBS ESG專區`}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="Keywords" content="TVBS,TVBS GOOD,TVBS ESG,ESG,企業社會責任,ESG永續發展,ESG指標,ESG企業,ESG議題,ESG趨勢" />
            <meta name="description" content={genreDescription}/>
            <meta name="author" content="TVBS" />
            <meta name="copyright" content="TVBS" />
            <meta name="application-name" content="TVBS" />
            <meta name="URL" content={`${appUrl}/${thisPage}/${genreEnName}`} />
            <meta name="medium" content="mult" />
            <meta name="robots" content="INDEX,FOLLOW"/>
            <meta property="og:image" content={ogImg} />
            <link rel="canonical" href={`${appUrl}/${thisPage}/${genreEnName}`} />
        </Head>
        <Header thisPage={thisPage} menuData={props.menu}/>
        <main>
            <div className="viewPage">
                {/* 大標 */}
                <div className="sharedBanner">
                    <div className="mask"></div>
                    <div className="box">
                        <h1 className="title">{genreName}</h1>
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
                        <a href={`${appUrl}/view/${articlesFirst.article_genres[0].en_name}/${articlesFirst.id}`} >
                            <div className='box'>
                                <div className='img'>
                                    <img src={`${articlesFirst.cover_img ? articlesFirst.cover_img : process.env.IMG_DEFAULT}`} alt="arraw" width={1072} height={603} loading="lazy"/>
                                    <div className='imgMaskBox'>
                                        <div className='rounded'>
                                            <img src={`${appUrl}/images/rounded-01.svg`} alt="arraw" width={50} height={50} loading="lazy"/>
                                        </div>
                                        <div className='case'>
                                            <div className='rounded'>
                                                <img src={`${appUrl}/images/rounded-01.svg`} alt="arraw" width={50} height={50} loading="lazy"/>
                                            </div>
                                            <div className='imgMask'></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='txtBox'>
                                    <h2 className='title'>{articlesFirst.title}</h2>
                                    <div className='txt'>{articlesFirst.description}</div>
                                </div>
                            </div>
                        </a>
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

    const getGenreData = viewSubmenuData.find(item => item.en_name === genreEnName);
    const genreData = getGenreData ? getGenreData : '';    
    const genreId = genreData ? genreData.id : '';
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