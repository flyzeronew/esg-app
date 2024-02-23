
import Link from 'next/link'
import { useState ,useEffect } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../comps/Header'
import Footer from '../comps/Footer'
import GtmNoScript from '../comps/GtmNoScript'

const inter = Inter({ subsets: ['latin'] })
export default function Focus(props) {
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
        <GtmNoScript/>
        <Header thisPage={thisPage} menuData={props.menu}/>
        <main>
            <div className="actionPage">
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