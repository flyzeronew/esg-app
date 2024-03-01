
import Image from 'next/image'
import { useState ,useEffect } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Submenu from '../comps/view/Submenu'
import ArticleList from '../comps/view/ArticleList'
import Header from '../comps/Header'
import Footer from '../comps/Footer'

const inter = Inter({ subsets: ['latin'] })
export default function View(props) {
    const appUrl = process.env.APP_URL;
    const viewSubmenu = props.viewSubmenuData;
    const mainVision = props.viewData.main_vision;
    const articleList = props.viewData.article_list;

    // 頁面識別
    const thisPage='view';
    return (
    <div id='wrapper' className={inter.className}> 
        <Head>
            <title>{"永續觀點 - TVBS ESG專區"}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="Keywords" content="" />
            <meta name="description" content="ESG 企業永續治理已成為全球企業發展的趨勢。 在新趨勢下，企業更加重視永續環境、共好社會、綠色生活等議題。幫助企業、投資人、消費者與一般民眾理解ESG企業永續治理的重要性與實踐方法。" />        
        </Head>
        <Header thisPage={thisPage} menuData={props.menu} submenu={viewSubmenu}/>
        <main>            
            <div className="viewPage">

                {/* 大標 */}
                <div className="sharedBanner">
                    <div className="mask"></div>
                    <div className="box">
                        <div className="title">永續觀點</div>
                        <div className="txt">
                            <p>大地映照永續觀點，綠色生活如詩，台灣之智守護大自然，共創可持續明天，並且將永續觀點，指引我們前行。</p>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
                {/* 大標 ed*/}

                {/* 分類標籤 */}
                    <Submenu  submenu={viewSubmenu} />
                {/* 分類標籤 ed*/}

                {/* 主視覺 */}
                {mainVision ?
                    <div className='mainView'>
                        <div className='box'>
                            <div className='img'>
                                <Image src={`${appUrl}${mainVision.cover_img}`} alt="arraw" width={1072} height={603}/>
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
                                <div className='title'>{mainVision.title}</div>
                                <div className='txt'>{mainVision.description}</div>
                            </div>
                        </div>
                    </div>
                    :''
                }
                {/* 主視覺 ed*/}
                {/* 文章列表 */}                
                    <ArticleList  articleList={articleList} />
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
            menu,viewSubmenuData,viewData,
        },
    };
}