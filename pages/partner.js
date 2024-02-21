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
const [showList, setShowList] = useState(props.partnerData);
    const imgMouseOver = (e) => {
        const isLargeScreen = window.innerWidth > 767;
        setHoverBgSize(isLargeScreen ? 120 : 280);
        setImgHover(e);
    };

    const imgMouseOut = (e) => {
        setImgHover(null);
    };

    // 处理点击事件的函数
    const handleClick = (id) => {
        if(id === 0){
            return setShowList(props.partnerData);
        }
        // 筛选出partner_genre_id等于2的数据
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
                        <a  onClick={() => handleClick(0)}  href="##" className='act'>全部</a>
                        {
                    props.submenuData.length > 0 ?
                        props.submenuData.map((item, index) => (
                            <a onClick={() => handleClick(item.id)} href="##">{item.name}</a>
                        )):''
                        }
                    </div>  
                </div>  
                <div className="list">
                    <ul>
                    {
                    showList.length > 0 ?
                    showList.map((item, index) => (
                            <li key={index} style={{ 
                                background: `url(${item.cover_img}) no-repeat center center`,
                                backgroundSize: index === imgHover ? `${hoverBgSize}%` : `${bgSize}%`,
                                transition: 'background-size 0.3s',
                            }} onMouseOver={() => imgMouseOver(index)} onMouseOut={imgMouseOut}>
                                <a href={item.url}>
                                <div class="itemMask"></div>
                                <div className="profileCard">
                                    <div className="profileImg">
                                        <div className="img">
                                            <Image src={item.avatar} alt="img" width={50} height={50}/> 
                                        </div>
                                    </div>
                                    <div className='name'>
                                        {item.name}
                                    </div>
                                    <div className='outBorder'>
                                        <div className='txt'>
                                            {item.brief}
                                        </div>
                                    </div>
                                </div> 
                            </a>
                                    </li>
                                ))
                            :''
                        }
                        <li key={1} style={{ 
                                        background: `url("/images/partner-bg01.jpg") no-repeat center center`,
                                        backgroundSize: 1 === imgHover ? `${hoverBgSize}%` : `${bgSize}%`,
                                        transition: 'background-size 0.3s',
                                    }} onMouseOver={() => imgMouseOver(1)} onMouseOut={imgMouseOut}>
                            <a href="##">
                                <div class="itemMask"></div>
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
                            </a>
                        </li>
                        <li  key={2} style={{ 
                                        background: `url("/images/partner-bg01.jpg") no-repeat center center`,
                                        backgroundSize: 2 === imgHover ? `${hoverBgSize}%` : `${bgSize}%`,
                                        transition: 'background-size 0.3s',
                                    }} onMouseOver={() => imgMouseOver(2)} onMouseOut={imgMouseOut}>
                            <a href='##'>
                                <div class="itemMask"></div>
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
                                            追求
                                        </div>
                                    </div>
                                </div> 
                            </a>
                        </li>
                        <li key={3} style={{ 
                                        background: `url("/images/partner-bg01.jpg") no-repeat center center`,
                                        backgroundSize: 3 === imgHover ? `${hoverBgSize}%` : `${bgSize}%`,
                                        transition: 'background-size 0.3s',
                                    }} onMouseOver={() => imgMouseOver(3)} onMouseOut={imgMouseOut}>
                             <a href='##'>
                                <div class="itemMask"></div>
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
                            </a>
                        </li>
                        <li key={4} style={{ 
                                        background: `url("/images/partner-bg01.jpg") no-repeat center center`,
                                        backgroundSize: 4 === imgHover ? `${hoverBgSize}%` : `${bgSize}%`,
                                        transition: 'background-size 0.3s',
                                    }} onMouseOver={() => imgMouseOver(4)} onMouseOut={imgMouseOut}>  
                            <a href='##'>
                                <div class="itemMask"></div>
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
                            </a>
                        </li>
                        <li  key={5} style={{ 
                                        background: `url("/images/partner-bg01.jpg") no-repeat center center`,
                                        backgroundSize: 5 === imgHover ? `${hoverBgSize}%` : `${bgSize}%`,
                                        transition: 'background-size 0.3s',
                                    }} onMouseOver={() => imgMouseOver(5)} onMouseOut={imgMouseOut}>
                            <a href='##'>
                                <div class="itemMask"></div>
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
                            </a>
                        </li>
                        <li key={6} style={{ 
                                        background: `url("/images/partner-bg01.jpg") no-repeat center center`,
                                        backgroundSize: 6 === imgHover ? `${hoverBgSize}%` : `${bgSize}%`,
                                        transition: 'background-size 0.3s',
                                    }} onMouseOver={() => imgMouseOver(6)} onMouseOut={imgMouseOut}>
                            <a href='##'>
                                <div class="itemMask"></div>
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
    // 線上資料
    // submenu
    const submenuUrl = new URL('/api/partner-genres', process.env.API_URL);
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