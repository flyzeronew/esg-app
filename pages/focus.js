
import { useState ,useEffect } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../comps/Header'
import Footer from '../comps/Footer'

const inter = Inter({ subsets: ['latin'] })
export default function Focus(props) {
    console.log(props);
// 頁面識別
const thisPage='focus';
const [imgHover, setImgHover] = useState(null);
const [bgSize, setBgSize] = useState();
const [hoverBgSize, setHoverBgSize] = useState();
//圖片網址切換
const imgUrlChang = (url) => {
    const originalUrl = "https://staging-esg-statics.s3.ap-northeast-1.amazonaws.com";
    const newUrl = "https://staging-esg-statics.tvbs.com.tw";   
    const imgUrl = url;
    const updateUrl = imgUrl.replace(originalUrl, newUrl);
    return updateUrl;
};
console.log(imgUrlChang('https://staging-esg-statics.s3.ap-northeast-1.amazonaws.com/focus-news/img/OnqcislmJFB85BhhsApnRZ1HxXCv3dFnLTpOXgbJ.jpg'));
const imgMouseOver = (e) => {
    if(window.innerWidth > 767){
        setHoverBgSize(120);
    }else{
        setHoverBgSize(280);
    }
    setImgHover(e);
};

const imgMouseOut = (e) => {
    setImgHover(null);
};
// resize 監聽事件
useEffect(() => {
    function handleResize () {
        if(window.innerWidth > 767){
            setBgSize(100);
            setHoverBgSize(100);
            setImgHover(null);
        }else{
            setBgSize(250);
            setHoverBgSize(250);
            setImgHover(null);
        }   
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
    <title>{"esg | TVBS 官網"}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="Keywords" content="esg,esg2,esg3" />
    <meta name="description" content="esg description" />        
    </Head>
    <Header thisPage={thisPage} menuData={props.menu}/>
    <main>
        <div className="focusPage">
            <div className="sharedBanner">
                <div className="mask"></div>
                <div className="box">
                    <div className="title">未來焦點</div>
                    <div className="txt">
                        <p>綠能發展、資源再生，海洋保護與氣候因應，都成為社會訴求，企業以綠色思維，創新技術，營造永續商業新模式。</p>
                        <div className="line"></div>
                    </div>
                </div>
            </div>     
            <div className="list">
                <ul>
                    {
                        props.focus.length > 0 ?
                            props.focus.map((item, index) => (
                                <li key={index} style={{ 
                                    background: `url(${imgUrlChang(item.cover_img)}) no-repeat center center`,
                                    backgroundSize: index === imgHover ? `${hoverBgSize}%` : `${bgSize}%`,
                                    transition: 'background-size 0.3s',
                                }} onMouseOver={() => imgMouseOver(index)} onMouseOut={imgMouseOut}>
                                    <a href={item.url} target={item.is_blank == 1 ? '_blank' :'' } >                                        
                                        <div className="titleBox">                                        
                                            <div className="titleDiv">                                            
                                                <div className="title"><p>{item.title}</p></div>
                                                <div className="txt"><p>{item.description}</p></div>
                                            </div>
                                            <div className= {`arraw ${index === imgHover ? 'act':''}`}>
                                                <img src="images/icon_arraw04.svg" alt="arraw" width={42} height={42}/>
                                            </div>
                                        </div>                           
                                    </a>
                                </li>
                            ))
                        :''
                    }
                    
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
    // 線上資料
    const focusUrl = new URL('/api/focus-news', process.env.API_URL);
    const focusRes = await fetch(focusUrl);    
    const focus = await focusRes.json();
    
    return {
        props: {
            menu,focus
        },
    };
}