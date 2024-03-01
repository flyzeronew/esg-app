import { useState ,useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Header from '../../comps/Header'
import Footer from '../../comps/Footer'
import Image from 'next/image'
import { useRouter } from 'next/router';


const inter = Inter({ subsets: ['latin'] })
export default function Partner(props) {
    // console.log(props);
    console.log("單獨資料");
    console.log(props.detailData);
    // console.log(props.detailData.partner_links[0].image_url);
    const detail = props.detailData;
    const pcLinksArr = ["first","second","third","fourth"];
    const moLinksIndexArr = [
        [0,"first"],[1,"second"],[3,"fourth"],[2,"third"]
    ];
// 頁面識別
const thisPage='partnerDetail';
const router = useRouter();
const { partner } = router.query;
const [imgHover, setImgHover] = useState(null);
const [bgSize, setBgSize] = useState();
const [hoverBgSize, setHoverBgSize] = useState();
const [showList, setShowList] = useState(props.partnerData);
const [submenuActive, setSubmenuActive] = useState(0);
    const imgMouseOver = (e) => {
        const isLargeScreen = window.innerWidth > 767;
        setHoverBgSize(isLargeScreen ? 120 : 280);
        setImgHover(e);
    };

    const imgMouseOut = (e) => {
        setImgHover(null);
    };

    // 處理點擊事件
    const handleClick = (id) => {
        setSubmenuActive(id);
        if(id === 0){
            // 全部
            return setShowList(props.partnerData);
        }
        const filteredData = props.partnerData.filter(item => item.partner_genre_id === id);
        setShowList(filteredData);
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
            <title>{"夥伴名 ESG共好夥伴 - TVBS ESG專區"}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="Keywords" content="esg,esg2,esg3" />
            <meta name="description" content="透過企業合作，ESG共好夥伴可以共享資源、互補優勢、擴大影響力，共同推動ESG理念的實踐，創造永續發展的未來。" />        
        </Head>
        <Header thisPage={thisPage} menuData={props.menu}/>
        <main>
            {detail?
            <div className="partnerDetailPage">
                <div className="bannerArea">
                    <div className="coverImgBanner" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(${detail.cover_img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <div className="partnerName">
                            {detail.name}
                        </div>
                    </div>
                    <div className="introduceArea">
                        <div className="introduceCard">
                            <div className="avatar">
                                <Image src={detail.avatar} alt="img" width={140} height={140}/> 
                            </div>
                            <div className="detail">
                                {detail.introduction}
                            </div>
                            <div className="leftPic">
                                <Image src={"/images/Rectangle-left.svg"} alt="img" width={30} height={30}/> 
                            </div>
                            <div className="rightPic">
                                <Image src={"/images/Rectangle-right.svg"} alt="img" width={30} height={30}/> 
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="linksArea">
                {/* pc */}
                {detail.partner_links.map((item, index) => (
                    <div className={`${pcLinksArr[index]} items pc`} style={{ 
                        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(${item.image_url})  no-repeat center center / 105%`,
                        backgroundSize: index === imgHover ? `130%` : `105%`,
                        transition: 'background-size 0.3s',
                            }}
                            onMouseOver={() => imgMouseOver(index)} onMouseOut={imgMouseOut}
                    >
                        <Link target={item.link_type ? `_blank` : ""} href={item.link_url}>
                            <div className="linkArea">
                                <div className="linkCard">
                                    <div className="title">
                                        {item.link_title}
                                    </div>
                                    <div className="linkIcon">
                                        <Image src={"/images/icon_arraw04.svg"} alt="img" width={36} height={36}/> 
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}

                {/* mobile */}
                {moLinksIndexArr.map((item, index) => (
                        <div className={`${item[1]} items mo`} style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(${detail.partner_links[item[0]].image_url}`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                        <Link target={detail.partner_links[item[0]].link_type ? `_blank` : ""} href={detail.partner_links[item[0]].link_url}>
                            <div className="linkArea">
                                <div className="linkCard">
                                    <div className="title">
                                        {detail.partner_links[item[0]].link_title}
                                    </div>
                                    <div className="linkIcon">
                                        <Image src={"/images/icon_arraw04.svg"} alt="img" width={36} height={36}/> 
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
                </div>
                {detail.partner_pages?
                <div className="firstParagraph">    
                    <div className="wordsTitle">
                    {detail.partner_pages[0].title}
                    </div>
                    <div className="wordsTxt">
                    {detail.partner_pages[0].content}
                    </div>
                </div>
                :""}
                {detail?
                    <div className="videoArea"  style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(${detail.video_cover_url})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <Link href={detail.video_url}>
                            <div className="videoCard">
                                <div className="videoTitle">
                                    {detail.video_title}
                                </div>
                                <div className="play">
                                    <Image src={"/images/play-icon.svg"} alt="img" width={48} height={48}/> 
                                </div>
                            </div>
                        </Link>
                    </div>
                :""}
                {detail.partner_pages?
                <div className="secondParagraph">
                    <div className="wordsTitle">
                        {detail.partner_pages[1].title}
                    </div>
                    <div className="wordsTxt">
                        {detail.partner_pages[1].content}
                    </div>
                </div>
                :""}
                {/* 永續觀點的文章頁 */}
                <div className="moreGoodNewsArea">
                    <div className="title">
                        更多共好消息
                    </div>
                    <div className="list">
                        <ul>
                            <li style={{ 
                                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(/images/partner-bg01.jpg)  no-repeat center center / 100%`,
                                backgroundSize: 1 === imgHover ? `${hoverBgSize}%` : `${bgSize}%`,
                                backgroundPosition: 'center center' 
                                }}
                                onMouseOver={() => imgMouseOver(1)} onMouseOut={imgMouseOut}
                            >
                                <Link href="##">
                                    <div className="articleCard">
                                        <div className="articleTitle">
                                            華航永續發展6度入榜 2030地面作業用10%再生能源，華航永續發展6度入榜 2030地面作業用10%再生能源
                                        </div>
                                        <div className="linkIcon">
                                            <Image src={"/images/icon_arraw04.svg"} alt="img" width={36} height={36}/> 
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li style={{ 
                                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(/images/partner-bg01.jpg)  no-repeat center center / 100%`,
                                backgroundSize: 2 === imgHover ? `${hoverBgSize}%` : `${bgSize}%`,
                                backgroundPosition: 'center center' 
                                }}
                                onMouseOver={() => imgMouseOver(2)} onMouseOut={imgMouseOut}
                            >
                                <Link href="##">
                                    <div className="articleCard">
                                        <div className="articleTitle">
                                            華航永續發展6度入榜 2030地面作業用10%再生能源，華航永續發展6度入榜 2030地面作業用10%再生能源
                                        </div>
                                        <div className="linkIcon">
                                            <Image src={"/images/icon_arraw04.svg"} alt="img" width={36} height={36}/> 
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            :''}
        </main>
        <div className="footerLine">
            <div className="box"></div>
        </div>
        <Footer />
    </div>
    );
}

export async function getServerSideProps(context) {
    const { params } = context;
    const { partner } = params;
        // console.log("裏面id");
        // console.log(partner);
        // detail
        // const router = useRouter();
        // const { partner } = router.query;
        // console.log("頁面id");
        // console.log(partner);

    const menuUrl = new URL('/api/menu', process.env.APP_URL);
    const menuRes = await fetch(menuUrl);
    const menu = await menuRes.json();
    // detail
    const detailUrl = new URL(`/api/partners/${partner}`, process.env.API_URL);
    const detaulRes = await fetch(detailUrl);    
    const detailData = await detaulRes.json();
    
    return {
        props: {
            menu,detailData
        },
    };
}