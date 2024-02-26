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
    console.log(props);
    console.log("單獨資料");
    console.log(props.detailData.partner_links[0].image_url);
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
                        {/* pc */}
                        <div className="first items pc" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(/images/partner-bg01.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
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
                        <div className="second items pc" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url("/images/partner01.jpg")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
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
                        <div className="third items pc" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(/images/partner01.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
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
                        <div className="fourth items pc" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(/images/partner-bg01.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
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
                    <div className="fistTitle">
                        推廣具規模的永續食物系統
                    </div>
                    <div className="firstTxt">
                        排放路徑圖顯示，我們有近三分之二的溫室氣體排放來自農業。因此，改善農業碳排放是我們的主要專注的領域之一。
                    </div>
                </div>
                <div className="videoArea"  style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(/images/partner-bg01.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <Link href="https://www.youtube.com/shorts/Uz9k6QGqXj0">
                        <div className="videoCard">
                            <div className="videoTitle">
                                在台攜手產學推動永續包裝革新首度推出雀巢
                            </div>
                            <div className="playIcon">
                            <Image src={"/images/playIcon.svg"} alt="img" width={48} height={48}/> 
                            </div>
                        </div>
                    </Link>
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
    const detailUrl = new URL(`/api/partners/${partner}`, process.env.API_URL);
    const detaulRes = await fetch(detailUrl);    
    const detailData = await detaulRes.json();
    
    return {
        props: {
            menu,detailData
        },
    };
}