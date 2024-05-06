import { useState ,useEffect } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../../comps/Header'
import Footer from '../../comps/Footer'
import Practice from '../../comps/responsibility/Practice'

const inter = Inter({ subsets: ['latin'] })
export default function Page(props) {
    // 頁面識別
    const thisPage='responsibility';
    const page = props.page;
    const appUrl = process.env.APP_URL;
    const [clicked, setClicked] = useState(false);
    const responsibilityData = props.responsibilityData;
    const practiceData = responsibilityData.slice(0, 3);
    const moreData = responsibilityData.slice(3);
    const handleClick = () => {
        setClicked(!clicked);
    };
    const defaultClick = (event) => {
        event.preventDefault();
    };
    return (
    <div id='wrapper' className={inter.className}> 
        <Head>
            <title>{"永續責任 - TVBS ESG專區"}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="Keywords" content="TVBS, TVBS GOOD,TVBS NEWS, TVBS ESG, ESG永續趨勢, ESG永續焦點, ESG永續發展, ESG議題" />
            <meta name="description" content="" /> 
            <meta name="author" content="TVBS" />
            <meta name="copyright" content="TVBS" />
            <meta name="application-name" content="TVBS" />
            <meta name="URL" content={`${appUrl}/${thisPage}`} />
            <meta name="medium" content="mult" />
            <meta name="robots" content="INDEX,FOLLOW"/>
            <link rel="canonical" href={`${appUrl}/${thisPage}`}/>       
        </Head>
        <Header thisPage={thisPage} menuData={props.menu}/>
        <main>
            <div className="responsibilityPage">                
                <div className='detailMainView'>
                    <div className='box'>
                        <div className='img'>
                            <img src={`${appUrl}/images/esg05.jpg`} alt="img" width={1072} height={603} loading="lazy"/>
                            <div className='imgMaskBox'>
                                <div className='rounded pc'>
                                    <img src={`${appUrl}/images/rounded-01.svg`} alt="arraw" width={50} height={50} loading="lazy"/>
                                </div>
                                <div className='case'>
                                    <div className='rounded'>
                                        <img src={`${appUrl}/images/rounded-01.svg`} alt="arraw" width={50} height={50} loading="lazy"/>
                                    </div>
                                    <div className='imgMask'></div>
                                    <div className='rounded mo'>
                                        <img src={`${appUrl}/images/rounded-04.svg`} alt="arraw" width={50} height={50} loading="lazy"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='logo'>
                            <img src={`${appUrl}/images/brand-logo04.png`} alt="img" width={260} height={155} loading="lazy"/>
                        </div>
                        <div className='txtBox'>
                            <h2 className='title'>食尚玩家提供台灣最新美食餐廳、旅遊景點及行程推薦，漫遊之際我們將致力分享如何永續的觀點出發玩得開心，旅行、玩樂也能愛地球</h2>
                        </div>
                    </div>
                </div>

                <div className='content'>
                    <div className='title'>
                        <h2>食尚玩家 X 共好未來</h2>
                        <div className='line'></div>
                    </div>
                    <p>
                        透過品牌的影響力，在吃喝玩樂中，保護環境，減少生態衝擊，促進當地經濟發展，支持本地產業，同時保存文化遺產，尊重當地社區。並且提倡綠色交通方式，減少碳足跡。永續旅遊，造福大地、留下美好。
                    </p>

                    <div className='mainImage'>
                        {
                            clicked ? 
                                <div className='video'>
                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/y1C6B3WvtUc?autoplay=1&mute=1" frameborder="0" allowfullscreen></iframe>
                                </div>
                            :''
                        }
                        <div className='img' onClick={handleClick}>
                            <div className='playIcon'>
                                <img src={`${appUrl}/images/play-icon.svg`} alt="play" width={50} height={50} loading="lazy"/>
                            </div>
                            <div className='txt'>
                                <div className='t1'>旅行、玩樂也能愛地球</div>
                            </div>
                            <div className='video'>
                                <img src='http://img.youtube.com/vi/y1C6B3WvtUc/maxresdefault.jpg' alt="img" width={1920} height={1080} loading="lazy"/>
                            </div>
                        </div>
                    </div>

                    <div className='contxt'>
                        <div className='t1'>  
                            <p>探索樂活享受不減分</p>
                            <div className='line'></div>
                        </div>
                        <p>
                            我們熱愛旅行，因為旅行的過程總能激勵我們、療癒我們、啟發我們。皮尤（Pew）研究中心在2017年曾針對千禧世代進行民意調查，就發現有50%的年輕人，注重碳足跡與奢華旅行間的平衡。食尚玩家提供大家如何在旅行和人文、經濟、生態之間取得平衡，在當地進行的活動，包括消費、各類活動、飲食等，也都在無形中改變當地人文社會與經濟層面。
                        </p>

                        <div className='t1'>  
                            <p>相信我們都能將未來，超越既有想像，讓生活育樂變得無價且深刻</p>
                            <div className='line'></div>
                        </div>
                    </div>

                    {/* 輪播部分 */}
                    { practiceData.length > 0 ? 
                        <Practice practiceData={practiceData} />
                        :''
                    }
                    {/* 輪播部分 ed*/}

                    <div className='brandIp'>
                        <div className='logo'>
                            <img src={`${appUrl}/images/brand-logo04.png`} alt="img" width={260} height={155} loading="lazy"/>
                        </div>
                        <div className='icon'>
                            <a href='#' onClick={defaultClick}>
                                探索更多食尚玩家
                                <img src={`${appUrl}/images/icon_arraw09.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                            </a>                            
                        </div>
                    </div>

                    { moreData.length > 0 ? 
                        <div className='practiceMore'>
                            <div className='title s1'>更多TVBS永續品牌</div>
                            <div className='brandMore'>
                                <ul>
                                    <li>
                                        <a href='#' onClick={defaultClick}>
                                            <div className='imgBox'>
                                                <div className='img'>
                                                    <img src={`${appUrl}/images/brand05.jpg`} alt="img" width={1072} height={603} loading="lazy"/>
                                                </div>  
                                                <div className='logoBox'>
                                                    <div className='rounded'>
                                                        <img src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                                    </div>
                                                    <div className='logoFlex'>
                                                        <div className='logo'>
                                                            <img src={`${appUrl}/images/brand-logo05.png`} alt="img" width={1072} height={603} loading="lazy"/>
                                                        </div>
                                                        <div className='rounded'>
                                                            <img src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='txtBox'>                                                
                                                <div className='txt'>以報導全球環境、永續議題為己任，深度追蹤企業在社會責任、公司治理與永續環境間的作為。</div>
                                                <img src={`${appUrl}/images/icon_arraw08.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                            </div> 
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' onClick={defaultClick}>
                                            <div className='imgBox'>
                                                <div className='img'>
                                                    <img src={`${appUrl}/images/brand06.jpg`} alt="img" width={1072} height={603} loading="lazy"/>
                                                </div>  
                                                <div className='logoBox'>
                                                    <div className='rounded'>
                                                        <img src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                                    </div>
                                                    <div className='logoFlex'>
                                                        <div className='logo'>
                                                            <img src={`${appUrl}/images/brand-logo06.png`} alt="img" width={1072} height={603} loading="lazy"/>
                                                        </div>
                                                        <div className='rounded'>
                                                            <img src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='txtBox'>                                                
                                                <div className='txt'>理解政府與企業面對淨零轉型所遇到的痛點，提出可執行的解方，成為大眾理解ESG的轉譯者。</div>
                                                <img src={`${appUrl}/images/icon_arraw08.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                            </div>                                    
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' onClick={defaultClick}>
                                            <div className='imgBox'>
                                                <div className='img'>
                                                    <img src={`${appUrl}/images/brand07.jpg`} alt="img" width={1072} height={603} loading="lazy"/>
                                                </div>  
                                                <div className='logoBox'>
                                                    <div className='rounded'>
                                                        <img src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                                    </div>
                                                    <div className='logoFlex'>
                                                        <div className='logo'>
                                                            <img src={`${appUrl}/images/brand-logo087png`} alt="img" width={1072} height={603} loading="lazy"/>
                                                        </div>
                                                        <div className='rounded'>
                                                            <img src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='txtBox'>                                                
                                                <div className='txt'>TVBS原創劇集及節目製作團隊，落實永續意識由內部做起，打造環保餐食、道具再利用。</div>
                                                <img src={`${appUrl}/images/icon_arraw08.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                            </div>                                  
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        :''
                    }
                </div>
            </div>
        </main>
        <div className="footerLine color1">
            <div className="box"></div>
        </div>
        <Footer act='color1'/>
    </div>
    );
}

export async function getServerSideProps(context) {
    const page = context.query.page;

    const menuUrl = new URL('/api/menu', process.env.APP_URL);
    const menuRes = await fetch(menuUrl);
    const menu = await menuRes.json();
    // 線上資料

    const responsibilityUrl = process.env.APP_ENV==='production'?
    new URL('/api/responsibility-prd', process.env.APP_URL):
    new URL('/api/responsibility-dev', process.env.APP_URL);    

    const responsibilityRes = await fetch(responsibilityUrl);
    const responsibilityData = await responsibilityRes.json();    

    return {
        props: {
            menu,responsibilityData,page
        },
    };
}