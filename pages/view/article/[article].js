
import Link from 'next/link'
import Image from 'next/image'
import { useState ,useEffect } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../../../comps/Header'
import Footer from '../../../comps/Footer'

const inter = Inter({ subsets: ['latin'] })
export default function viewArticle(props) {
    const appUrl = process.env.APP_URL;
    // 頁面識別
    const thisPage='view';    
    return (
    <div id='wrapper' className={inter.className}> 
        <Head>
            <title>{"esg | 永續觀點內頁"}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="Keywords" content="esg,esg2,esg3" />
            <meta name="description" content="esg description" />        
        </Head>
        <Header thisPage={thisPage} menuData={props.menu}/>
        <main>
            <div className="viewArticlePage" 
            style={{ 
                backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 1) 50%), url(${appUrl}/images/esg02.jpg)`
            }}>
                
                <div className="articleContent">
                    <div className="category">
                        <span>文章：綠色生活</span>
                    </div>
                    <div className="mainTitle">全聯300家惜食門市，幫社福團體1123萬人次加菜</div>


                    <div className="mainDescription">
                        <p>日前超市全聯「36元特價便當」引發熱烈討論，但這不僅僅只是一般的促銷，而是全聯推出「剩食策略」的一環。</p>
                        <div className="line"></div>
                    </div>

                    <div className="timeBar">
                        <span>2023-08-17 更新</span>
                        <span className="line"></span>                        
                        <div>
                            <span>協助撰稿  </span>
                            <span className="name">劉俐均</span>
                        </div>
                    </div>

                    <div className="mainImg">
                        <div className="pic">
                            <div className='playIcon'>
                                <Image src={`${appUrl}/images/play-icon.svg`} alt="play" width={50} height={50}/>
                            </div>
                            <Image src="/images/esg03.jpg" alt="全聯惜食專區。（圖／胡瑞麒攝）" width={1072} height={603}/>
                        </div>                        
                        <div className="imgAlt">全聯惜食專區。（圖／胡瑞麒攝）</div>
                    </div>
                    
                </div>
            </div>       

        </main>
        <div className="footerLine">
            <div className="box"></div>
        </div>
        <Footer />
    </div>
    );
}

export async function getServerSideProps() {
    const menuUrl = new URL('/api/menu', process.env.APP_URL);
    const menuRes = await fetch(menuUrl);
    const menu = await menuRes.json();
    // 線上資料

    
    return {
        props: {
            menu
        },
    };
}