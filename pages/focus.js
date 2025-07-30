import { useState ,useEffect } from 'react';
import Head from 'next/head';
import Header from '../comps/Header/Header';
import Footer from '../comps/Footer/Footer';
import styles from './focus.module.css';
import classNames from 'classnames/bind';
import SharedBanner from '@/comps/sharedBanner/SharedBanner';
import { genericPageService } from '@/services/cms/apisCMS';
import { usePathname } from 'next/navigation';

const cx = classNames.bind(styles);

export default function Focus({menu, focus}) {
    const appUrl = process.env.APP_URL;
    // 頁面識別
    const pathname = usePathname();
    const detailsOfPage = menu.find((menuItem) => menuItem.pathname === pathname);
    const ogImg = process.env.OG_IMG;
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
    <div id='wrapper'> 
        <Head>
            <title>{detailsOfPage.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="Keywords" content="TVBS, TVBS GOOD,TVBS NEWS, TVBS ESG, ESG永續趨勢, ESG永續焦點, ESG永續發展, 世界地球日活動, ESG議題, ESG活動" />
            <meta name="description" content={detailsOfPage.meta_description} />
            <meta name="author" content="TVBS" />
            <meta name="copyright" content="TVBS" />
            <meta name="application-name" content="TVBS" />
            <meta name="URL" content={`${appUrl}/${detailsOfPage.pathname}`} />
            <meta name="medium" content="mult" />
            <meta name="robots" content="index,follow"/>
            <meta property="og:image" content={ogImg} />  
            <link rel="canonical" href={`${appUrl}/${detailsOfPage.pathname}`} />      
        </Head>
        <Header menuData={menu}/>
        <main>
            <div className={cx("focusPage")}>
            <SharedBanner
                title={detailsOfPage.page}
                description={detailsOfPage.page_description}
            ></SharedBanner>
                <div className={cx("list")}>
                    <ul>
                        {
                            focus.length > 0 ?
                                focus.map((item, index) => (
                                    <li key={index} style={{ 
                                        background: `url(${item.cover_img}) no-repeat center center`,
                                        backgroundSize: index === imgHover ? `${hoverBgSize}%` : `${bgSize}%`,
                                        transition: 'background-size 0.3s',
                                    }} onMouseOver={() => imgMouseOver(index)} onMouseOut={imgMouseOut}>
                                        <a href={item.url} target={item.is_blank === 1 ? '_blank' :'' } >                                        
                                            <div className={cx("titleBox")}>                                        
                                                <div className={cx("titleDiv")}>                                            
                                                    <h2 className={cx("title")}><p>{item.title}</p></h2>
                                                    <div className={cx("txt")}><p>{item.description}</p></div>
                                                </div>
                                                <div className={cx('arraw',index === imgHover ? 'act':'')}>
                                                    <img src={`${appUrl}/images/icon_arraw04.svg`} alt="arraw" width={42} height={42} loading='lazy'/>
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
        <div className={cx("footerLine")}>
            <div className={cx("box")}></div>
        </div>
        <Footer />
    </div>
    );
}

export async function getServerSideProps() {
    const menu =  await genericPageService.getMenu();
    const test = [
        {
          page: '首頁',
          pathname: '/',
          title: 'TVBS GOOD - ESG 倡議與永續生活平台',
          meta_description: 'TVBS GOOD 是 TVBS 倡議 ESG、實踐與地球共好的平台。我們的永續目標接軌聯合國與世界並進，從報導追蹤企業永續發展，到分享日常永續生活撇步，協同多方一起節能減碳，邁向淨零碳排的永續目標。',
          page_description: 'TVBS GOOD 是 TVBS 倡議 ESG、實踐與地球共好的平台。我們的永續目標接軌聯合國與世界並進，從報導追蹤企業永續發展，到分享日常永續生活撇步，協同多方一起節能減碳，邁向淨零碳排的永續目標。',
          subMenu: []
        },
      
      ]
    // 線上資料
    const focusUrl = new URL('/api/focus-news', process.env.API_URL);
    const focusRes = await fetch(focusUrl);    
    const focus = await focusRes.json();
    
    return {
        props: {
            menu,
            focus
        },
    };
}

