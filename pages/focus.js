import { useState ,useEffect } from 'react';
import Head from 'next/head';
import Header from '../comps/Header/Header';
import Footer from '../comps/Footer/Footer';
import styles from './focus.module.css';
import classNames from 'classnames/bind';
import SharedBanner from '@/comps/sharedBanner/SharedBanner';
import { usePathname } from 'next/navigation';

export default function Focus({menu, focus}) {
    const cx = classNames.bind(styles);
    const pathname = usePathname();
    const appUrl = process.env.APP_URL;
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
                            focus && focus.length > 0 ?
                                focus.map((item, index) => (
                                    <li key={index} style={{
                                        background: `url(${item.cover_img}) no-repeat center center`,
                                        backgroundSize: index === imgHover ? `${hoverBgSize}%` : `${bgSize}%`,
                                        transition: 'background-size 0.3s',
                                    }} onMouseOver={() => imgMouseOver(index)} onMouseOut={imgMouseOut}>
                                        <a
                                            href={item.url}
                                            target={1=== item.is_blank ? '_blank' : undefined}
                                            rel={1=== item.is_blank ? 'noopener noreferrer' : undefined}
                                        >
                                            <div className={cx("titleBox")}>
                                                <div className={cx("titleDiv")}>
                                                    <h2 className={cx("title")}>
                                                        <p>{item.title}</p>
                                                    </h2>
                                                    <div className={cx("txt")}>
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                                <div className={cx('arraw',index === imgHover ? 'act':undefined)}>
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

import { fetchPageData } from '@/services/cms/fetchPageData';
export async function getServerSideProps(context) {
    try {
        const { res } = context;
        res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=120');
        const { menu, extraData } = await fetchPageData({
            extraApiPaths: ['/api/focus-news'],
        });
        return {
            props: {
                menu,
                focus: extraData[0],
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            notFound: true,
        };
    }
}

