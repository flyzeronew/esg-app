import { useState ,useEffect } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../comps/Header'
import Footer from '../comps/Footer'
import Practice from '../comps/responsibility/Practice'

const inter = Inter({ subsets: ['latin'] })
export default function Focus(props) {
    // 頁面識別
    const [clicked, setClicked] = useState(false);
    // 處理點擊事件
    const handleClick = () => {
        setClicked(!clicked);
    };

    const defaultClick = (event) => {
        event.preventDefault();
    };
    

    const thisPage='responsibility';
    const appUrl = process.env.APP_URL;
    return (
    <div id='wrapper' className={inter.className}> 
        <Head>
            <title>{"永續責任 - TVBS ESG專區"}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="Keywords" content="" />
            <meta name="description" content="" />        
        </Head>
        <Header thisPage={thisPage} menuData={props.menu}/>
        <main>
            <div className="responsibilityPage">
                <div className='mainView'>
                    <div className='img'>
                        <Image src={`${appUrl}/images/responsibility_bg.jpg`} alt="bg" width={1920} height={1024}/>
                    </div>
                    <div className='titleBox'>
                        <div className='title'>
                            <div className='box'>
                                <div className='rounded'></div>
                                <p>關於共好未來</p>
                                <div className='rounded'>
                                    <Image src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50}/>
                                </div>
                            </div>
                            <div className='box'>
                                <div className='rounded'>
                                    <Image src={`${appUrl}/images/rounded-03.svg`} alt="rounded" width={50} height={50}/>
                                </div>
                                <p>Better Future.<br/>Together</p>
                                <div className='rounded'>
                                    <Image src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='content'>

                    <div className='title'>
                        <h2>TVBS新聞 ESG轉譯者</h2>
                        <div className='line'></div>
                    </div>

                    <div className='mainImage'>
                        {
                            clicked ? 
                                <div className='video'>
                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/pMTFK3q-rek?autoplay=1&mute=1" frameborder="0" allowfullscreen></iframe>
                                </div>
                            :''
                        }
                        <div className='img' onClick={handleClick}>
                            <div className='playIcon'>
                                <Image src={`${appUrl}/images/play-icon.svg`} alt="play" width={50} height={50}/>
                            </div>
                            <div className='txt'>
                                <div className='t1'>數位永續皆卓越！TVBS總經理劉文硯<br/>再獲APEA「卓越企業領袖」</div>
                            </div>
                            <div className='video'>
                                <Image src='http://img.youtube.com/vi/pMTFK3q-rek/maxresdefault.jpg' alt="img" width={1920} height={1080}/>
                            </div>
                        </div>                        
                    </div>

                    <div className='contxt'>
                        <div className='t1'>  
                            <div className='line'></div>                         
                            <p>
                                持續為閱聽眾帶來更全面，更淺顯易懂的永體，共創關懷環境生態與新聞媒體的永續殿堂
                            </p>                            
                            <div className='line'></div>
                        </div>
                        <p>
                            《TVBS新聞》常態性探討聯合國17項永續發展目標議題，包括檢視長照、醫療制度的「你我老之路-老病死之生路」、以及關注派遣勞工權益的「派遣工的正義-我不是你的免洗筷」等。近期TVBS新聞網更開闢ESG永續專區，針對ESG環境、ESG新趨勢、減碳生活、永續企業，做分類詳細的相關報導，TVBS總經理劉文硯表示，希望透過深入淺出的挖掘與剖析，轉譯永續議題，讓社會大眾更理解永續跟自身的關係，並培養民眾永續識讀力。
                        </p>
                    </div>

                    <div className='peopleBox'>
                        <div className='title'>
                            <h2>TVBS永續倡議大使 莊開文</h2>
                            <div className='line'></div>
                        </div>
                        <div className='contxt'>
                            <p>
                                TVBS資深主播<strong>莊開文</strong>，擔任「TVBS永續倡議大使」，並以「永續．共好．愛無限」為核心目標，透過TVBS自身資源從各方面投入永續倡議，成為媒體界的ESG貢獻者。
                            </p>
                        </div>

                        <div className='people'>
                            <div className='img'>
                                <Image src={`${appUrl}/images/people01.jpg`} alt="img" width={1920} height={1080}/>
                            </div>
                            <div className='txtBox'>
                                <div className='txt'>
                                    希望能夠從以前各個部門的單兵作戰，現在能夠集結各部門、跨部門的資源跟力量，大家一起來做。
                                </div>
                                <div className='small'>- 永續倡議大使 莊開文 </div>
                            </div>
                        </div> 
                        <div className='line'></div>
                        <p>
                            <strong>「永續．共好．愛無限」 三面向推進ESG策略，</strong>
                            同步實踐TVBS自身的永續發展，發揮媒體責任，提出對永續的獨到見解並付諸行動。
                            TVBS也將持續關注氣候變遷、全球暖化、再生能源等議題，推動各界綠色作為，並發揮媒體影響力，推動社會共好、世界共好，以及愛無限系列活動為社會帶來正能量。莊開文也期許，台灣的ESG理念與成效，能透過TVBS英語新聞，傳播到世界各地，為生態、人道關懷等議題帶來不同觀點與發聲，並以永續為目標，期待在永續議題上能成為台灣的推手，做世界的通道。
                        </p>

                        <div className="imageGroup">
                            <div className="box">
                                <div className="img">
                                    <Image src="/images/esg02.jpg" alt="img" width={1072} height={603}/>                                    
                                </div>
                                <div className="imgAlt">全聯惜食專區。（圖／胡瑞麒攝）</div>
                            </div>
                            <div className="box">
                                <div className="img">
                                    <Image src="/images/esg03.jpg" alt="img" width={1072} height={603}/>
                                </div>
                                <div className="imgAlt">全聯惜食專區。（圖／胡瑞麒攝）</div>
                            </div>
                        </div>
                    </div>

                    <div className="brand">
                        <div className='title'>
                            <h2>TVBS永續品牌</h2>
                            <div className='line'></div>
                        </div>

                        <p>
                            女人我最大節目，倡議「純淨美容Clean Beauty」觀念，在變美之餘，也不造成地球環境負擔；
                            地球黃金線關注電動車與環保材質汽車的最新趨勢；食尚玩家提倡綠色低碳旅遊，用觀眾能夠接受
                            和理解的方式，將永續觀念「轉譯」為更親和易懂的內容。
                        </p>
                        <div className='listBox'>
                            {/* <div className="arraw">
                                <Image src={`${appUrl}/images/icon_arraw04.svg`} alt="arraw" width={42} height={42}/>
                            </div> */}
                            <div className='list'>
                                <ul>
                                    <li>
                                        <a href='#' onClick={defaultClick}>
                                            <div className='imgBox'>
                                                <div className='img'>
                                                    <Image src={`${appUrl}/images/esg01.jpg`} alt="img" width={1072} height={603}/>
                                                </div>                                            
                                                <div className='logoBox'>
                                                    <div className='rounded'>
                                                        <Image src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50}/>
                                                    </div>
                                                    <div className='logoFlex'>
                                                        <div className='logo'>
                                                            <Image src={`${appUrl}/images/brand-logo01.png`} alt="img" width={1072} height={603}/>
                                                        </div>
                                                        <div className='rounded'>
                                                            <Image src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='txt'>
                                                為地球盡一份心力的同時，也能保有自己的時尚風格。
                                            </div>                                    
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' onClick={defaultClick}>
                                            <div className='imgBox'>
                                            <div className='img'>
                                                    <Image src={`${appUrl}/images/esg02.jpg`} alt="img" width={1072} height={603}/>
                                                </div>  
                                                <div className='logoBox'>
                                                    <div className='rounded'>
                                                        <Image src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50}/>
                                                    </div>
                                                    <div className='logoFlex'>
                                                        <div className='logo'>
                                                            <Image src={`${appUrl}/images/brand-logo02.png`} alt="img" width={1072} height={603}/>
                                                        </div>
                                                        <div className='rounded'>
                                                            <Image src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='txt'>
                                                為地球盡一份心力的同時，也能保有自己的時尚風格。
                                            </div>                                    
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' onClick={defaultClick}>
                                            <div className='imgBox'>
                                                <div className='img'>
                                                    <Image src={`${appUrl}/images/esg03.jpg`} alt="img" width={1072} height={603}/>
                                                </div>  
                                                <div className='logoBox'>
                                                <div className='rounded'>
                                                        <Image src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50}/>
                                                    </div>
                                                    <div className='logoFlex'>
                                                        <div className='logo'>
                                                            <Image src={`${appUrl}/images/brand-logo03.png`} alt="img" width={1072} height={603}/>
                                                        </div>
                                                        <div className='rounded'>
                                                            <Image src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='txt'>
                                                為地球盡一份心力的同時，也能保有自己的時尚風格。
                                            </div>                                    
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' onClick={defaultClick}>
                                            <div className='imgBox'>
                                                <div className='img'>
                                                    <Image src={`${appUrl}/images/esg04.jpg`} alt="img" width={1072} height={603}/>
                                                </div>  
                                                <div className='logoBox'>
                                                    <div className='rounded'>
                                                        <Image src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50}/>
                                                    </div>
                                                    <div className='logoFlex'>
                                                        <div className='logo'>
                                                            <Image src={`${appUrl}/images/brand-logo04.png`} alt="img" width={1072} height={603}/>
                                                        </div>
                                                        <div className='rounded'>
                                                            <Image src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='txt'>
                                                為地球盡一份心力的同時，也能保有自己的時尚風格。
                                            </div>                                    
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='title s1'>
                            <h2>領航ESG媒體實踐</h2>
                            <div className='line'></div>
                        </div>

                        <p>
                            女人我最大節目，倡議「純淨美容Clean Beauty」觀念，在變美之餘，也不造成地球環境負擔；
                            地球黃金線關注電動車與環保材質汽車的最新趨勢；食尚玩家提倡綠色低碳旅遊，用觀眾能夠接受
                            和理解的方式，將永續觀念「轉譯」為更親和易懂的內容。
                        </p>
                        {/* 輪播部分 */}
                        <Practice/>
                        {/* 輪播部分 ed*/}

                        <div className='practiceMore'>
                            <div className='title s1'>
                                <h2>更多TVBS永續實踐力</h2>
                            </div>
                            <div className='list'>
                                <a href='#' onClick={defaultClick}>
                                    <div className='img'>
                                        <Image src="/images/esg03.jpg" alt="img" width={1072} height={603}/>
                                    </div>
                                    <div className='txtBox'>
                                        <div className='txt'>
                                            <p>媒體科技大會亮點TVBS拚「ESG永續轉譯機」</p>
                                            <div className='arraw' >
                                                <Image src={`${appUrl}/images/icon_arraw04.svg`} alt="arraw" width={42} height={42}/>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a href='#' onClick={defaultClick}>
                                    <div className='img'>
                                        <Image src="/images/esg03.jpg" alt="img" width={1072} height={603}/>
                                    </div>
                                    <div className='txtBox'>
                                        <div className='txt'>
                                            <p>媒體科技大會亮點TVBS拚「ESG永續轉譯機」</p>
                                            <div className='arraw' >
                                                <Image src={`${appUrl}/images/icon_arraw04.svg`} alt="arraw" width={42} height={42}/>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    

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