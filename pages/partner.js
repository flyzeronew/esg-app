

import { useState ,useEffect } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../comps/Header'
import Footer from '../comps/Footer'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })
export default function Partner(props) {
    console.log(props);
// 頁面識別
const thisPage='partner';
const [imgHover, setImgHover] = useState(null);
const [bgSize, setBgSize] = useState();
const [hoverBgSize, setHoverBgSize] = useState();
    //圖片網址切換
    const imgUrlChang = (url) => {
        const originalUrl = "https://staging-esg-statics.s3.ap-northeast-1.amazonaws.com";
        const imgUrl = process.env.IMG_URL;   
        const newUrl = url;
        const updateUrl = newUrl.replace(originalUrl, imgUrl);
        return updateUrl;
    };
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
            let newSize = 100 ;
            if(window.innerWidth < 1609 && window.innerWidth > 1208){
                newSize = 135;
            }else if(window.innerWidth < 403){
                newSize = 125;
            }
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
return (
    <div id='wrapper' className={inter.className}> 
        <Head>
            <title>{"esg | 共好夥伴"}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="Keywords" content="esg,esg2,esg3" />
            <meta name="description" content="esg description" />        
        </Head>
        <Header thisPage={thisPage} menuData={props.menu}/>
        <main>
            <div className="partnerPage">
                <div className="sharedBanner">
                    <div className="mask"></div>
                    <div className="box">
                        <div className="title">2023 共好夥伴</div>
                        <div className="txt">
                            <p>城市街頭盛開綠意，企業在環保徽章下環繞，共同編織著永續的未來。讓城市與企業一同前行，共創可持續的明日。</p>
                            <div className="line"></div>
                        </div>
                    </div>
                </div> 
                <div className='submenuArea'>
                    
                    <div className='submenu'> 
                        <div className='submenuMask'></div>  
                        <a href="##" className='act'>全部</a>
                        <a href="##">永續企業</a>
                        <a href="##">永續城市</a>
                        <a href="##">團體與個人</a>
                    </div>  
                </div>  
                <div className="list">
                    <ul>
                        <li key={1} style={{ 
                                        background: `url("/images/partner-bg01.jpg") no-repeat center center`,
                                        backgroundSize: 1 === imgHover ? `${hoverBgSize}%` : `${bgSize}%`,
                                        transition: 'background-size 0.3s',
                                    }} onMouseOver={() => imgMouseOver(1)} onMouseOut={imgMouseOut}>
                            <div class="itemMask"></div>
                            <a href='##'>
                                <div className="profileCard">
                                    <div className="profileImg">
                                        <div className="img">
                                            <Image src="/images/partner01.jpg" alt="img" width={50} height={50}/> 
                                        </div>
                                    </div>
                                    <div className='name'>
                                        台灣雀巢 Nestlé Taiwan
                                    </div>
                                    <div className='outBorder'>
                                        <div className='txt'>
                                            追求的目標是透過巧妙的包裝設計、創新材質、更完備的回收基礎建設。 追求的目標是透過巧妙的包裝設計、創新材質、更完備的回收基礎建設。追求的目標是透過巧妙的包裝設計、創新材質、更完備的回收基礎建設。 追求的目標是透過巧妙的包裝設計、創新材質、更完備的回收基礎建設。追求的目標是透過巧妙的包裝設計、創新材質、更完備的回收基礎建設。 追求的目標是透過巧妙的包裝設計、創新材質、更完備的回收基礎建設。
                                        </div>
                                    </div>
                                </div> 
                                <div className= {`arraw ${1 === imgHover ? 'act':''}`}>
                                    <Image src="images/icon_arraw04.svg" alt="arraw" width={42} height={42} />
                                </div>
                            </a>
                        </li>
                        <li  key={2} style={{ 
                                        background: `url("/images/partner-bg01.jpg") no-repeat center center`,
                                        backgroundSize: 2 === imgHover ? `${hoverBgSize}%` : `${bgSize}%`,
                                        transition: 'background-size 0.3s',
                                    }} onMouseOver={() => imgMouseOver(2)} onMouseOut={imgMouseOut}>
                            <div class="itemMask"></div>
                            <a href='##'>
                                <div className="profileCard">
                                    <div className="profileImg">
                                        <div className="img">
                                            <Image src="/images/partner01.jpg" alt="img" width={50} height={50}/> 
                                        </div>
                                    </div>
                                    <div className='name'>
                                        台灣雀巢 Nestlé Taiwan
                                    </div>
                                    <div className='outBorder'>
                                        <div className='txt'>
                                            追求的目標是透過巧妙的包裝設計、創新材質、更完備的回收基礎建設
                                        </div>
                                    </div>
                                </div> 
                                <div className= {`arraw ${2 === imgHover ? 'act':''}`}>
                                    <Image src="images/icon_arraw04.svg" alt="arraw" width={42} height={42} />
                                </div>
                            </a>
                        </li>
                        <li key={3} style={{ 
                                        background: `url("/images/partner-bg01.jpg") no-repeat center center`,
                                        backgroundSize: 3 === imgHover ? `${hoverBgSize}%` : `${bgSize}%`,
                                        transition: 'background-size 0.3s',
                                    }} onMouseOver={() => imgMouseOver(3)} onMouseOut={imgMouseOut}>
                            <div class="itemMask"></div>
                            <a href='##'>
                                <div className="profileCard">
                                    <div className="profileImg">
                                        <div className="img">
                                            <Image src="/images/partner01.jpg" alt="img" width={50} height={50}/> 
                                        </div>
                                    </div>
                                    <div className='name'>
                                        台灣雀巢 Nestlé Taiwan
                                    </div>
                                    <div className='outBorder'>
                                        <div className='txt'>
                                            追求的目標是透過巧妙的包裝設計、創新材質、更完備的回收基礎建設
                                        </div>
                                    </div>
                                </div> 
                                <div className= {`arraw ${3 === imgHover ? 'act':''}`}>
                                    <Image src="images/icon_arraw04.svg" alt="arraw" width={42} height={42} />
                                </div>
                            </a>
                        </li>
                        <li key={4} style={{ 
                                        background: `url("/images/partner-bg01.jpg") no-repeat center center`,
                                        backgroundSize: 4 === imgHover ? `${hoverBgSize}%` : `${bgSize}%`,
                                        transition: 'background-size 0.3s',
                                    }} onMouseOver={() => imgMouseOver(4)} onMouseOut={imgMouseOut}>
                            <div class="itemMask"></div>
                            <a href='##'>
                                <div className="profileCard">
                                    <div className="profileImg">
                                        <div className="img">
                                            <Image src="/images/partner01.jpg" alt="img" width={50} height={50}/> 
                                        </div>
                                    </div>
                                    <div className='name'>
                                        台灣雀巢 Nestlé Taiwan
                                    </div>
                                    <div className='outBorder'>
                                        <div className='txt'>
                                            追求的目標是透過巧妙的包裝設計、創新材質、更完備的回收基礎建設
                                        </div>
                                    </div>
                                </div> 
                                <div className= {`arraw ${4 === imgHover ? 'act':''}`}>
                                    <Image src="images/icon_arraw04.svg" alt="arraw" width={42} height={42} />
                                </div>
                            </a>
                        </li>
                        <li  key={5} style={{ 
                                        background: `url("/images/partner-bg01.jpg") no-repeat center center`,
                                        backgroundSize: 5 === imgHover ? `${hoverBgSize}%` : `${bgSize}%`,
                                        transition: 'background-size 0.3s',
                                    }} onMouseOver={() => imgMouseOver(5)} onMouseOut={imgMouseOut}>
                            <div class="itemMask"></div>
                            <a href='##'>
                                <div className="profileCard">
                                    <div className="profileImg">
                                        <div className="img">
                                            <Image src="/images/partner01.jpg" alt="img" width={50} height={50}/> 
                                        </div>
                                    </div>
                                    <div className='name'>
                                        台灣雀巢 Nestlé Taiwan
                                    </div>
                                    <div className='outBorder'>
                                        <div className='txt'>
                                            追求的目標是透過巧妙的包裝設計、創新材質、更完備的回收基礎建設
                                        </div>
                                    </div>
                                </div> 
                                <div className= {`arraw ${5 === imgHover ? 'act':''}`}>
                                    <Image src="images/icon_arraw04.svg" alt="arraw" width={42} height={42} />
                                </div>
                            </a>
                        </li>
                        <li key={6} style={{ 
                                        background: `url("/images/partner-bg01.jpg") no-repeat center center`,
                                        backgroundSize: 6 === imgHover ? `${hoverBgSize}%` : `${bgSize}%`,
                                        transition: 'background-size 0.3s',
                                    }} onMouseOver={() => imgMouseOver(6)} onMouseOut={imgMouseOut}>
                            <div class="itemMask"></div>
                            <a href='##'>
                                <div className="profileCard">
                                    <div className="profileImg">
                                        <div className="img">
                                            <Image src="/images/partner01.jpg" alt="img" width={50} height={50}/> 
                                        </div>
                                    </div>
                                    <div className='name'>
                                        台灣雀巢 Nestlé Taiwan
                                    </div>
                                    <div className='outBorder'>
                                        <div className='txt'>
                                            追求的目標是透過巧妙的包裝設計、創新材質、更完備的回收基礎建設
                                        </div>
                                    </div>
                                </div> 
                                <div className= {`arraw ${6 === imgHover ? 'act':''}`}>
                                    <Image src="images/icon_arraw04.svg" alt="arraw" width={42} height={42} />
                                </div>
                            </a>
                        </li>
                    </ul>

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

    
    return {
        props: {
            menu,
        },
    };
}