
import Link from 'next/link'
import Image from 'next/image'
import { useState ,useEffect } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../comps/Header'
import Footer from '../comps/Footer'

const inter = Inter({ subsets: ['latin'] })
export default function Focus(props) {
    const appUrl = process.env.APP_URL;
    // 頁面識別
    const thisPage='view';
    const [imgHover, setImgHover] = useState(null);
    const [bgSize, setBgSize] = useState();
    const [hoverBgSize, setHoverBgSize] = useState();
    const imgMouseOver = (e) => {
        const isLargeScreen = window.innerWidth > 767;
        setHoverBgSize(isLargeScreen ? 120 : 280);
        setImgHover(e);
    };

    const imgMouseOut = (e) => {
        setImgHover(null);
    };
    // resize 監聽事件
    useEffect(() => { 
        const handleResize = (e) => {
            const newSize = window.innerWidth > 767 ? 100 : 250;
            setBgSize(newSize);
            setHoverBgSize(newSize);
            setImgHover(null);
        };  
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 
    // resize 監聽事件 ed
    return (
    <div id='wrapper' className={inter.className}> 
        <Head>
            <title>{"esg | 永續觀點"}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="Keywords" content="esg,esg2,esg3" />
            <meta name="description" content="esg description" />        
        </Head>
        <Header thisPage={thisPage} menuData={props.menu}/>
        <main>
            <div className="viewPage">
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

                <div className='submenuArea'>
                    <div className='submenu'> 
                        <div className='submenuMask'></div>
                        <Link className="act" href={`javascript:void(0)`}>全部</Link>
                        <Link href={`javascript:void(0)`}>新趨勢</Link>
                        <Link href={`javascript:void(0)`}>永續環境</Link>
                        <Link href={`javascript:void(0)`}>共好社會</Link>
                        <Link href={`javascript:void(0)`}>綠色生活</Link>
                    </div>
                </div>

                <div className='mainView'>
                    <div className='box'>
                        <div className='img'>
                            <Image src="/images/esg02.jpg" alt="arraw" width={1072} height={603}/>
                            <div className='imgMaskBox'>
                                <div className='rounded'>
                                    <Image src="/images/rounded-01.svg" alt="arraw" width={50} height={50}/>
                                </div>
                                <div className='case'>
                                    <div className='rounded'>
                                        <Image src="/images/rounded-01.svg" alt="arraw" width={50} height={50}/>
                                    </div>
                                    <div className='imgMask'></div>
                                </div>
                            </div>
                        </div>
                        <div className='txtBox'>
                            <div className='title'>
                                「台灣製造」超夯環保吸管、餐具 連美國白宮、蘋果公司都愛用
                            </div>
                            <div className='txt'>
                                什麼環保餐具這麼特別，讓星巴克、遠在美國白宮的環保紙杯，以及蘋果公司員工餐廳環保餐具，都愛使用這家公司的產品。原來這家公司來自台中，專門研發可分解材質的吸管和餐具，標榜對環境不會產生負擔，連海龜都能使用，究竟有甚麼特別？帶您來看。
                            </div>
                        </div>
                    </div>
                </div>

                <div className='list'>
                    <ul>
                        <li>
                            <Link href={`javascript:void(0)`}>
                                <div className='img'>
                                    <div className='playIcon'>                                 
                                        <Image src={`${appUrl}/images/play-icon.svg`} alt="play" width={50} height={50}/>
                                    </div>
                                    <Image src="/images/esg01.jpg" alt="arraw" width={1072} height={603}/>
                                </div>
                                <div className='txt'>改造飛機救生衣「變身環保包」 出三款式圖案獨一無二</div>
                                <div className='name'>劉俐均</div>
                            </Link>
                        </li>
                        <li>
                            <Link href={`javascript:void(0)`}>
                                <div className='img'>
                                    <div className='playIcon'>                                 
                                        <Image src={`${appUrl}/images/play-icon.svg`} alt="play" width={50} height={50}/>
                                    </div>
                                    <Image src="/images/esg02.jpg" alt="arraw" width={1072} height={603}/>
                                </div>
                                <div className='txt'>改造飛機救生衣「變身環保包」 出三款式圖案獨一無二</div>
                                <div className='name'>劉俐均</div>
                            </Link>
                        </li>
                        <li>
                            <Link href={`javascript:void(0)`}>
                                <div className='img'>
                                    <Image src="/images/esg03.jpg" alt="arraw" width={1072} height={603}/>
                                </div>
                                <div className='txt'>改造飛機救生衣「變身環保包」 出三款式圖案獨一無二</div>
                                <div className='name'>劉俐均</div>
                            </Link>
                        </li>
                        <li>
                            <Link href={`javascript:void(0)`}>
                                <div className='img'>
                                    <Image src="/images/esg04.jpg" alt="arraw" width={1072} height={603}/>
                                </div>
                                <div className='txt'>改造飛機救生衣「變身環保包」 出三款式圖案獨一無二</div>
                                <div className='name'>劉俐均</div>
                            </Link>
                        </li>
                        <li>
                            <Link href={`javascript:void(0)`}>
                                <div className='img'>
                                    <Image src="/images/esg01.jpg" alt="arraw" width={1072} height={603}/>
                                </div>
                                <div className='txt'>改造飛機救生衣「變身環保包」 出三款式圖案獨一無二</div>
                                <div className='name'>劉俐均</div>
                            </Link>
                        </li>
                        <li>
                            <Link href={`javascript:void(0)`}>
                                <div className='img'>
                                    <Image src="/images/esg02.jpg" alt="arraw" width={1072} height={603}/>
                                </div>
                                <div className='txt'>改造飛機救生衣「變身環保包」 出三款式圖案獨一無二</div>
                                <div className='name'>劉俐均</div>
                            </Link>
                        </li>
                        <li>
                            <Link href={`javascript:void(0)`}>
                                <div className='img'>
                                    <Image src="/images/esg01.jpg" alt="arraw" width={1072} height={603}/>
                                </div>
                                <div className='txt'>改造飛機救生衣「變身環保包」 出三款式圖案獨一無二</div>
                                <div className='name'>劉俐均</div>
                            </Link>
                        </li>
                        <li>
                            <Link href={`javascript:void(0)`}>
                                <div className='img'>
                                    <Image src="/images/esg02.jpg" alt="arraw" width={1072} height={603}/>
                                </div>
                                <div className='txt'>改造飛機救生衣「變身環保包」 出三款式圖案獨一無二</div>
                                <div className='name'>劉俐均</div>
                            </Link>
                        </li>
                        <li>
                            <Link href={`javascript:void(0)`}>
                                <div className='img'>
                                    <Image src="/images/esg03.jpg" alt="arraw" width={1072} height={603}/>
                                </div>
                                <div className='txt'>改造飛機救生衣「變身環保包」 出三款式圖案獨一無二</div>
                                <div className='name'>劉俐均</div>
                            </Link>
                        </li>
                        <li>
                            <Link href={`javascript:void(0)`}>
                                <div className='img'>
                                    <Image src="/images/esg04.jpg" alt="arraw" width={1072} height={603}/>
                                </div>
                                <div className='txt'>改造飛機救生衣「變身環保包」 出三款式圖案獨一無二</div>
                                <div className='name'>劉俐均</div>
                            </Link>
                        </li>
                        <li>
                            <Link href={`javascript:void(0)`}>
                                <div className='img'>
                                    <Image src="/images/esg01.jpg" alt="arraw" width={1072} height={603}/>
                                </div>
                                <div className='txt'>改造飛機救生衣「變身環保包」 出三款式圖案獨一無二</div>
                                <div className='name'>劉俐均</div>
                            </Link>
                        </li>
                        <li>
                            <Link href={`javascript:void(0)`}>
                                <div className='img'>
                                    <Image src="/images/esg02.jpg" alt="arraw" width={1072} height={603}/>
                                </div>
                                <div className='txt'>改造飛機救生衣「變身環保包」 出三款式圖案獨一無二</div>
                                <div className='name'>劉俐均</div>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='pageJump'>
                    <div className='box'>
                        <Link className='act' href={`javascript:void(0)`}>1</Link>
                        <Link href={`javascript:void(0)`}>2</Link>
                        <Link href={`javascript:void(0)`}>3</Link>
                    </div>
                    <div className='next'>
                        <Link href={`javascript:void(0)`}>下一頁</Link>
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