import { useState ,useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Header from '../comps/Header'
import Footer from '../comps/Footer'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })
export default function Partner(props) {    
// 頁面識別
const thisPage='tips';
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
            <title>{"ESG共好夥伴 - TVBS ESG專區"}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="Keywords" content="esg,esg2,esg3" />
            <meta name="description" content="透過企業合作，ESG共好夥伴可以共享資源、互補優勢、擴大影響力，共同推動ESG理念的實踐，創造永續發展的未來。" />        
        </Head>
        <Header thisPage={thisPage} menuData={props.menu}/>
        <main>
            <div className="tipsListPage">
                <div className="mainArea">
                    <div className="sharedBanner">
                        <div className="mask"></div>
                        <div className="box">
                            <div className="title">永續生活小撇步</div>
                            <div className="txt">
                                <p>踏上永續生活的路上，小小的舉措，我們珍愛這片土地，永續生活於其中。</p>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div> 
                    <div className='submenuArea'>
                        <div className='submenu'> 
                            <div className='submenuMask'></div>  
                            <Link onClick={() => handleClick(0)}  href="javascript:void(0)" className={submenuActive === 0 ? "act" : ""}>全部</Link>
                            {
                                props.submenuData.length > 0 ?
                                    props.submenuData.map((item, index) => (
                                        <Link onClick={() => handleClick(item.id)} href="javascript:void(0)" className={submenuActive === item.id ? "act" : ""}>{item.name}</Link>
                                    )):''
                            }
                        </div>  
                    </div>  
                </div>
                <div className="list">
                    <ul>
                        <li>
                            <a href='#'>
                                <div className="genres tagFoodColor">食</div>
                                <div className="img">
                                    <Image src="https://esg-statics-staging.tvbs.com.tw/partner/avatar/IcYiBBxwm3SokXcl6GQW3WZRhkCp48u2iNhjOahA.jpg" alt="img" width={360} height={360}/>
                                </div>
                                <div className="detail">
                                <div className='upImg'>
                                    <Image src="images/Rectangle-grey.svg" alt="img" width={20} height={20}/>
                                </div>
                                    <div className="txt">吃完的免洗紙餐盒，需洗完再回收嗎？吃完的免洗紙餐盒，需洗完再回收嗎？</div>
                                <div className='rightImg'>
                                    <Image src="images/Rectangle-grey.svg" alt="img" width={20} height={20}/>
                                </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="##">
                                <div className="genres tagClothingColor">衣</div>
                                <div className="img">
                                    <Image src="https://esg-statics-staging.tvbs.com.tw/partner/avatar/IcYiBBxwm3SokXcl6GQW3WZRhkCp48u2iNhjOahA.jpg" alt="img" width={360} height={360}/>
                                </div>
                                <div className="detail">
                                <div className='upImg'>
                                    <Image src="images/Rectangle-grey.svg" alt="img" width={20} height={20}/>
                                </div>
                                    <div className="txt">吃完的免洗紙餐盒</div>
                                <div className='rightImg'>
                                    <Image src="images/Rectangle-grey.svg" alt="img" width={20} height={20}/>
                                </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="##">
                                <div className="genres tagHousingColor">住</div>
                                <div className="img">
                                    <Image src="https://esg-statics-staging.tvbs.com.tw/partner/avatar/IcYiBBxwm3SokXcl6GQW3WZRhkCp48u2iNhjOahA.jpg" alt="img" width={360} height={360}/>
                                </div>
                                <div className="detail">
                                <div className='upImg'>
                                    <Image src="images/Rectangle-grey.svg" alt="img" width={20} height={20}/>
                                </div>
                                    <div className="txt">123</div>
                                <div className='rightImg'>
                                    <Image src="images/Rectangle-grey.svg" alt="img" width={20} height={20}/>
                                </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="##">
                                <div className="genres tagTransportColor">行</div>
                                <div className="img">
                                    <Image src="https://esg-statics-staging.tvbs.com.tw/partner/avatar/IcYiBBxwm3SokXcl6GQW3WZRhkCp48u2iNhjOahA.jpg" alt="img" width={360} height={360}/>
                                </div>
                                <div className="detail">
                                <div className='upImg'>
                                    <Image src="images/Rectangle-grey.svg" alt="img" width={20} height={20}/>
                                </div>
                                    <div className="txt">123</div>
                                <div className='rightImg'>
                                    <Image src="images/Rectangle-grey.svg" alt="img" width={20} height={20}/>
                                </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="##">
                                <div className="genres tagEducationColor">育</div>
                                <div className="img">
                                    <Image src="https://esg-statics-staging.tvbs.com.tw/partner/avatar/IcYiBBxwm3SokXcl6GQW3WZRhkCp48u2iNhjOahA.jpg" alt="img" width={360} height={360}/>
                                </div>
                                <div className="detail">
                                <div className='upImg'>
                                    <Image src="images/Rectangle-grey.svg" alt="img" width={20} height={20}/>
                                </div>
                                    <div className="txt">123</div>
                                <div className='rightImg'>
                                    <Image src="images/Rectangle-grey.svg" alt="img" width={20} height={20}/>
                                </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="##">
                                <div className="genres tagEntertainmentColor">樂</div>
                                <div className="img">
                                    <Image src="https://esg-statics-staging.tvbs.com.tw/partner/avatar/IcYiBBxwm3SokXcl6GQW3WZRhkCp48u2iNhjOahA.jpg" alt="img" width={360} height={360}/>
                                </div>
                                <div className="detail">
                                <div className='upImg'>
                                    <Image src="images/Rectangle-grey.svg" alt="img" width={20} height={20}/>
                                </div>
                                    <div className="txt">123</div>
                                <div className='rightImg'>
                                    <Image src="images/Rectangle-grey.svg" alt="img" width={20} height={20}/>
                                </div>
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
    // submenu
    const submenuUrl = new URL('/api/tips-genres', process.env.APP_URL);
    const submenuRes = await fetch(submenuUrl);    
    const submenuData = await submenuRes.json();
    // list
    const partnerUrl = new URL('/api/partners', process.env.API_URL);
    const partnerRes = await fetch(partnerUrl);    
    const partnerData = await partnerRes.json();

    
    return {
        props: {
            menu,partnerData,submenuData
        },
    };
}