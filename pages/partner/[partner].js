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
                        <div className="first items pc">
                            <Image src={"/images/partner-bg01.jpg"} alt="img" width={1060} height={596}/> 
                        </div>
                        <div className="second items pc">
                            <Image src={"/images/partner01.jpg"} alt="img" width={452} height={452}/> 
                        </div>
                        <div className="third items pc">
                            <Image src={"/images/partner01.jpg"} alt="img" width={452} height={452}/> 
                        </div>
                        <div className="fourth items pc">
                            <Image src={"/images/partner-bg01.jpg"} alt="img" width={1060} height={596}/>
                        </div>
                        {/* mobile */}
                        <div className="first items mo">
                            <Image src={"/images/partner-bg01.jpg"} alt="img" width={1060} height={596}/> 
                        </div>
                        <div className="second items mo">
                            <Image src={"/images/partner01.jpg"} alt="img" width={452} height={452}/> 
                        </div>
                        <div className="fourth items mo">
                            <Image src={"/images/partner-bg01.jpg"} alt="img" width={1060} height={596}/>
                        </div>
                        <div className="third items mo">
                            <Image src={"/images/partner01.jpg"} alt="img" width={452} height={452}/> 
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
    const detailUrl = new URL(`/api/partners/${partner}`, process.env.API_URL);
    const detaulRes = await fetch(detailUrl);    
    const detailData = await detaulRes.json();
    
    return {
        props: {
            menu,detailData
        },
    };
}