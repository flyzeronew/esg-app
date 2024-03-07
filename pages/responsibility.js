import { useState ,useEffect } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../comps/Header'
import Footer from '../comps/Footer'

const inter = Inter({ subsets: ['latin'] })
export default function Focus(props) {
    // 頁面識別
    const [clicked, setClicked] = useState(false);
    // 處理點擊事件
    const handleClick = () => {
      setClicked(!clicked);
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
                                <p>Better Future. Together</p>
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
                                <p>數位永續皆卓越！TVBS總經理劉文硯<br/>再獲APEA「卓越企業領袖」</p>
                            </div>
                            <div className='video'>
                                <Image src='http://img.youtube.com/vi/pMTFK3q-rek/maxresdefault.jpg' alt="img" width={1920} height={1080}/>
                            </div>
                        </div>
                    </div>

                    <div className='contxt'>
                        <div className='t1'>
                            持續為閱聽眾帶來更全面，更淺顯易懂的永體，共創關懷環境生態與新聞媒體的永續殿堂
                        </div>
                        <p>
                            《TVBS新聞》常態性探討聯合國17項永續發展目標議題，包括檢視長照、醫療制度的「你我老之路-老病死之生路」、以及關注派遣勞工權益的「派遣工的正義-我不是你的免洗筷」等。近期TVBS新聞網更開闢ESG永續專區，針對ESG環境、ESG新趨勢、減碳生活、永續企業，做分類詳細的相關報導，TVBS總經理劉文硯表示，希望透過深入淺出的挖掘與剖析，轉譯永續議題，讓社會大眾更理解永續跟自身的關係，並培養民眾永續識讀力。
                        </p>
                    </div>

                    <div className='people'>
                        <div className='title'>
                            <h2>TVBS永續倡議大使 莊開文</h2>
                            <div className='line'></div>
                        </div>
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