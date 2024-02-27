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
    // console.log("單獨資料");
    // console.log(props.detailData.partner_links[0].image_url);
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
            <title>{"esg | 共好夥伴"}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="Keywords" content="esg,esg2,esg3" />
            <meta name="description" content="esg description" />        
        </Head>
        <Header thisPage={thisPage} menuData={props.menu}/>
        <main>
            <div className="partnerDetailPage">
                <div className="bannerArea">
                    <div className="coverImgBanner" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(/images/partner-bg01.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <div className="partnerName">
                            夥伴名稱寬度不能超過 16 個字
                        </div>
                    </div>
                    <div className="introduceArea">
                        <div className="introduceCard">
                            <div className="avatar">
                                <Image src={"/images/partner01.jpg"} alt="img" width={140} height={140}/> 
                            </div>
                            <div className="detail">
                                普希金講過，生活多美好，所以我希望諸位也能好好地體會這句話。
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
                        <div className="first items pc" style={{ 
                            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(/images/partner-bg01.jpg)  no-repeat center center / 105%`,
                            backgroundSize: 1 === imgHover ? `130%` : `105%`,
                            transition: 'background-size 0.3s',
                             }}
                             onMouseOver={() => imgMouseOver(1)} onMouseOut={imgMouseOut}
                        >
                            <Link  href="##">
                                <div className="linkArea">
                                    <div className="linkCard">
                                        <div className="title">
                                            台灣雀巢獲食創獎最高榮譽肯定
                                        </div>
                                        <div className="linkIcon">
                                            <Image src={"/images/icon_arraw04.svg"} alt="img" width={36} height={36}/> 
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="second items pc" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url("/images/partner01.jpg") no-repeat center center / 100%`, 
                            backgroundSize: 2 === imgHover ? `130%` : `100%`,
                            transition: 'background-size 0.3s',
                             }}
                            onMouseOver={() => imgMouseOver(2)} onMouseOut={imgMouseOut}
                        >
                            <Link  href="##">
                                <div className="linkArea">
                                    <div className="linkCard">
                                        <div className="title">
                                            台灣雀巢獲食創獎最高榮譽肯定
                                        </div>
                                        <div className="linkIcon">
                                            <Image src={"/images/icon_arraw04.svg"} alt="img" width={36} height={36}/> 
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="third items pc" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(/images/partner01.jpg) no-repeat center center / 100%`, 
                            backgroundSize: 3 === imgHover ? `130%` : `100%`,
                            transition: 'background-size 0.3s',
                             }}
                            onMouseOver={() => imgMouseOver(3)} onMouseOut={imgMouseOut}
                        >
                            <Link  href="##">
                                <div className="linkArea">
                                    <div className="linkCard">
                                        <div className="title">
                                            台灣雀巢獲食創獎最高榮譽肯定
                                        </div>
                                        <div className="linkIcon">
                                            <Image src={"/images/icon_arraw04.svg"} alt="img" width={36} height={36}/> 
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="fourth items pc" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(/images/partner-bg01.jpg) no-repeat center center / 105%`,
                            backgroundSize: 4 === imgHover ? `130%` : `105%`,
                            transition: 'background-size 0.3s',
                             }}
                            onMouseOver={() => imgMouseOver(4)} onMouseOut={imgMouseOut}
                        >
                            <Link  href="##">
                                <div className="linkArea">
                                    <div className="linkCard">
                                        <div className="title">
                                            台灣雀巢獲食創獎最高榮譽肯定
                                        </div>
                                        <div className="linkIcon">
                                            <Image src={"/images/icon_arraw04.svg"} alt="img" width={36} height={36}/> 
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        {/* mobile */}
                        <div className="first items mo" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(/images/partner-bg01.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                            <Link  href="##">
                                <div className="linkArea">
                                    <div className="linkCard">
                                        <div className="title">
                                            台灣雀巢獲食創獎最高榮譽肯定
                                        </div>
                                        <div className="linkIcon">
                                            <Image src={"/images/icon_arraw04.svg"} alt="img" width={36} height={36}/> 
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="second items mo" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url("/images/partner01.jpg")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                            <Link  href="##">
                                <div className="linkArea">
                                    <div className="linkCard">
                                        <div className="title">
                                            台灣雀巢獲食創獎最高榮譽肯定
                                        </div>
                                        <div className="linkIcon">
                                            <Image src={"/images/icon_arraw04.svg"} alt="img" width={36} height={36}/> 
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="fourth items mo" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(/images/partner-bg01.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                            <Link  href="##">
                                <div className="linkArea">
                                    <div className="linkCard">
                                        <div className="title">
                                            台灣雀巢獲食創獎最高榮譽肯定
                                        </div>
                                        <div className="linkIcon">
                                            <Image src={"/images/icon_arraw04.svg"} alt="img" width={36} height={36}/> 
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="third items mo" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(/images/partner01.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                            <div className="linkArea">
                                <div className="linkCard">
                                    <div className="title">
                                        台灣雀巢獲食創獎最高榮譽肯定
                                    </div>
                                    <div className="linkIcon">
                                        <Image src={"/images/icon_arraw04.svg"} alt="img" width={36} height={36}/> 
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="firstParagraph">
                    <div className="wordsTitle">
                        推廣具規模的永續食物系統
                    </div>
                    <div className="wordsTxt">
                        我們追求的目標是透過巧妙的包裝設計、創新材質、更完備的回收基礎建設和可再利用或可重複裝填的包裝，讓未來不再有塑膠廢棄物汙染我們的土地或海洋。

                        我們的理想是：未來沒有任何一個來自雀巢的包裝，包括塑膠在內，最終成為填埋廢棄物或棄置於土地、海洋或河川中的垃圾。

                        我們正致力於減少塑膠廢棄物，包括增加回收塑膠使用，減少原生塑膠的使用，並協助建立促進塑膠產品收集、回收與再利用的循環體系。

                        雀巢致力達成 100 % 包裝可回收或再利用，至 2025 年預計超過 95 %包裝完成轉換，並將原生塑膠用量減少三分之一。

                        要解決食物浪費及耗損這個複雜的全球性問題，我們從自身做起，積極與其他業者合作，並鼓勵消費者儘可能選用從田地到餐桌的食物。
                    </div>
                </div>
                <div className="videoArea"  style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(/images/partner-bg01.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <Link href="https://www.youtube.com/shorts/Uz9k6QGqXj0">
                        <div className="videoCard">
                            <div className="videoTitle">
                                在台攜手產學推動永續包裝革新首度推出雀巢
                            </div>
                            <div className="play">
                                <Image src={"/images/play-icon.svg"} alt="img" width={48} height={48}/> 
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="secondParagraph">
                    <div className="wordsTitle">
                        雀巢的零廢棄包裝策略
                    </div>
                    <div className="wordsTxt">
                        我們追求的目標是透過巧妙的包裝設計、創新材質、更完備的回收基礎建設和可再利用或可重複裝填的包裝，讓未來不再有塑膠廢棄物汙染我們的土地或海洋。

                        我們的理想是：未來沒有任何一個來自雀巢的包裝，包括塑膠在內，最終成為填埋廢棄物或棄置於土地、海洋或河川中的垃圾。

                        我們正致力於減少塑膠廢棄物，包括增加回收塑膠使用，減少原生塑膠的使用，並協助建立促進塑膠產品收集、回收與再利用的循環體系。

                        雀巢致力達成 100 % 包裝可回收或再利用，至 2025 年預計超過 95 %包裝完成轉換，並將原生塑膠用量減少三分之一。

                        要解決食物浪費及耗損這個複雜的全球性問題，我們從自身做起，積極與其他業者合作，並鼓勵消費者儘可能選用從田地到餐桌的食物。
                    </div>
                </div>
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
    // const detailUrl = new URL(`/api/partners/${partner}`, process.env.API_URL);
    // const detaulRes = await fetch(detailUrl);    
    // const detailData = await detaulRes.json();
    
    return {
        props: {
            menu
        },
    };
}