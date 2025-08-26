import { useState ,useEffect } from 'react'
import Head from 'next/head'
import Header from '../comps/Header/Header'
import Footer from '../comps/Footer/Footer'
import styles from './action.module.css';
import classNames from 'classnames/bind';
import SharedBanner from '@/comps/sharedBanner/SharedBanner';

export default function Focus(props) {
    const thisPage='action';
    const cx = classNames.bind(styles);
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
            <title>{"esg | 永續行動"}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="Keywords" content="esg,esg2,esg3" />
            <meta name="description" content="esg description" />
            <meta property="og:image" content={ogImg} />
        </Head>
        <Header thisPage={thisPage} menuData={props.menu}/>
            <main>
                <div className={cx("actionPage")}>
                    <div className={cx("bannerSection")}>
                        <SharedBanner
                            title={"永續行動"}
                            description={"成為悉心栽培社會福祉的一份子，傳承文化，關懷弱勢，燃起社會的溫暖火光，照顧在地環境。"}
                        ></SharedBanner>
                    </div>
                    <div className={cx("submenuArea")}>
                        <div className={cx("submenu")}>
                            <div className={cx("submenuMask")}></div>
                            <a className={cx("act")} href={'#'}>即將開始</a>
                            <a href={'#'}>過去活動</a>
                        </div>
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
export async function getServerSideProps() {
    try {
        const { menu, colorMapping, extraData } = await fetchPageData({
            extraApiPaths: [''],
        });
        return {
            props: {
                menu,
            }
        };
    } catch (error) {
        return {
            props: {
                menu: [],
                error: error.message || '資料取得失敗'
            },
        };
    }

}
