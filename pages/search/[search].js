import { useState ,useEffect } from 'react';
import Head from 'next/head';
import SearchBar from '../../comps/SearchBar/SearchBar';
import Header from '../../comps/Header/Header';
import Footer from '../../comps/Footer/Footer';
import Pagination from '../../comps/pagination/Pagination';
import styles from './search.module.css';
import classnames from 'classnames/bind';
import { genericPageService } from '@/services/cms/apisCMS';
import { usePathname } from 'next/navigation';
const cx = classnames.bind(styles);

export default function Search(props) {    
    const showSearchBar = true;
    const searchType = 'pageSearch';
    const menu = props.menu;
    const page = props.page;
    const appUrl = process.env.APP_URL;
    const pathname = usePathname();
    const url = `${appUrl}${pathname}`;
    const searchKeyword = pathname.startsWith('/search/') ? decodeURIComponent(pathname.split('/')[2]) : '';
    const ogImg = process.env.OG_IMG;
    const [imgHover, setImgHover] = useState(null);
    const [bgSize, setBgSize] = useState();
    const [hoverBgSize, setHoverBgSize] = useState();

    // 計算文章數量轉頁面數
    const articleNum = 10;
    // const articleCount = props.articlesData.article_count-1;
    const articleCount = 20;
    const articleMath = Math.floor(articleCount / articleNum);
    const pageCount = articleCount % articleNum != 0 ? articleMath + 1 : articleMath ;
    // 計算文章數量轉頁面數 ed

    const imgMoBoxuseOver = (e) => {
        const isLargeScreen = window.innerWidth > 767;
        setHoverBgSize(isLargeScreen ? 120 : 280);
        setImgHover(e);
    };

    const imgMoBoxuseOut = (e) => {
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
            <title>{searchKeyword} 搜尋結果第{page}頁 - TVBS ESG專區</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="Keywords" content="TVBS, TVBS GOOD,TVBS NEWS, TVBS ESG, ESG永續趨勢, ESG永續焦點, ESG永續發展, 世界地球日活動, ESG議題, ESG活動" />
            <meta name="description" content={`${searchKeyword} 搜尋結果在這裡，TVBS GOOD 是 TVBS 倡議 ESG、實踐與地球共好的平台`} />
            <meta property="og:image" content={ogImg} />
            <meta property="og:title" content={`${searchKeyword} 搜尋結果第${page}頁 - TVBS ESG專區}`} />
            <meta property="description" content={`${searchKeyword} 搜尋結果在這裡，TVBS GOOD 是 TVBS 倡議 ESG、實踐與地球共好的平台`} />
            <meta property="fb:admins" content="560824649" />
            <meta property="fb:app_id" content="759962200847400" />
            <meta name="author" content="TVBS" />
            <meta name="copyright" content="TVBS" />
            <meta name="application-name" content="TVBS" />
            <meta name="URL" content={url} />
            <meta name="robots" content="INDEX,FOLLOW"/>
            <link rel="canonical" href={url} />
            <link rel="image_src" type="image/jpeg" href={ogImg} />
        </Head>
        <Header menuData={menu} searchKeyword= {searchKeyword}/>
        <main>
            <div className={cx('searchPage')}>
                <SearchBar 
                    showSearchBar = {showSearchBar}
                    searchType={searchType}
                    searchKeyword= {searchKeyword}
                />

                <div className={cx('noResults','be8*^&@' === searchKeyword && 'show')}> 
                    <div className={cx('frameBox')}>
                        <div className={cx('txt')}>
                            找不到符合搜尋字詞「 <strong>{searchKeyword}</strong> 」的結果
                        </div>
                        <div className={cx('txtList')}>                        
                            <p>建議：</p>
                            <ul>
                                <li>‧請檢查有無錯別字</li>
                                <li>‧試試以其他關鍵字搜尋</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={cx('resultsBox','be8*^&@' === searchKeyword && 'hide')}>
                    <div className={cx('results')}>
                        <div className={cx('frameBox')}>
                            <div className={cx('related')}>
                                搜尋結果 <span className={cx('greenTxt')}>63</span> 筆
                            </div>                    
                        </div>
                    </div>

                    <div className={cx('list')}>
                        <div className={cx('frameBox')}>
                            <ul>
                                <li>
                                    <a href='#'>
                                        <div className={cx('txtBox')}>
                                            <div className={cx('title')}>
                                                <strong>{searchKeyword}</strong> EP2｜顛覆想像！養蝦不只賣蝦，還能賣「碳」救地球
                                            </div>
                                            <div className={cx('time')}>
                                                2025-03-13 <span>更新</span>
                                            </div>
                                            <div className={cx('txt')}>
                                                <p>永續加 第二集登場！養蝦還能斜槓到氣候科技，這次「永續加」邀請艾滴科技創辦人余萬洲，與聽眾分享他如何與太陽能業者合作「蝦電共生」，甚至發展成碳信用業務，還跟與輝達合作還跟與輝達合作還跟與輝達合作</p>
                                                <div className={cx('imgMoBox')}>
                                                    <div className={cx('img')}>
                                                        <img src={`${appUrl}/images/esg01.jpg`} alt="arraw" width={1072} height={603} loading="lazy"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('imgBox')}>
                                            <div className={cx('img')}>
                                                <img src={`${appUrl}/images/esg01.jpg`} alt="arraw" width={1072} height={603} loading="lazy"/>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <div className={cx('txtBox')}>
                                            <div className={cx('title')}>
                                                <strong>{searchKeyword}</strong> EP2｜顛覆想像！養蝦不只賣蝦，還能賣「碳」救地球
                                            </div>
                                            <div className={cx('time')}>
                                                2025-03-13 <span>更新</span>
                                            </div>
                                            <div className={cx('txt')}>
                                                <p>永續加 第二集登場！養蝦還能斜槓到氣候科技，這次「永續加」邀請艾滴科技創辦人余萬洲，與聽眾分享他如何與太陽能業者合作「蝦電共生」，甚至發展成碳信用業務，還跟與輝達合作還跟與輝達合作還跟與輝達合作</p>
                                                <div className={cx('imgMoBox')}>
                                                    <div className={cx('img')}>
                                                        <img src={`${appUrl}/images/esg01.jpg`} alt="arraw" width={1072} height={603} loading="lazy"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('imgBox')}>
                                            <div className={cx('img')}>
                                                <img src={`${appUrl}/images/esg01.jpg`} alt="arraw" width={1072} height={603} loading="lazy"/>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <div className={cx('txtBox')}>
                                            <div className={cx('title')}>
                                                <strong>{searchKeyword}</strong> EP2｜顛覆想像！養蝦不只賣蝦，還能賣「碳」救地球
                                            </div>
                                            <div className={cx('time')}>
                                                2025-03-13 <span>更新</span>
                                            </div>
                                            <div className={cx('txt')}>
                                                <p>永續加 第二集登場！養蝦還能斜槓到氣候科技，這次「永續加」邀請艾滴科技創辦人余萬洲，與聽眾分享他如何與太陽能業者合作「蝦電共生」，甚至發展成碳信用業務，還跟與輝達合作還跟與輝達合作還跟與輝達合作</p>
                                                <div className={cx('imgMoBox')}>
                                                    <div className={cx('img')}>
                                                        <img src={`${appUrl}/images/esg01.jpg`} alt="arraw" width={1072} height={603} loading="lazy"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('imgBox')}>
                                            <div className={cx('img')}>
                                                <img src={`${appUrl}/images/esg01.jpg`} alt="arraw" width={1072} height={603} loading="lazy"/>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <div className={cx('txtBox')}>
                                            <div className={cx('title')}>
                                                <strong>{searchKeyword}</strong> EP2｜顛覆想像！養蝦不只賣蝦，還能賣「碳」救地球
                                            </div>
                                            <div className={cx('time')}>
                                                2025-03-13 <span>更新</span>
                                            </div>
                                            <div className={cx('txt')}>
                                                <p>永續加 第二集登場！養蝦還能斜槓到氣候科技，這次「永續加」邀請艾滴科技創辦人余萬洲，與聽眾分享他如何與太陽能業者合作「蝦電共生」，甚至發展成碳信用業務，還跟與輝達合作還跟與輝達合作還跟與輝達合作</p>
                                                <div className={cx('imgMoBox')}>
                                                    <div className={cx('img')}>
                                                        <img src={`${appUrl}/images/esg01.jpg`} alt="arraw" width={1072} height={603} loading="lazy"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('imgBox')}>
                                            <div className={cx('img')}>
                                                <img src={`${appUrl}/images/esg01.jpg`} alt="arraw" width={1072} height={603} loading="lazy"/>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <div className={cx('txtBox')}>
                                            <div className={cx('title')}>
                                                <strong>{searchKeyword}</strong> EP2｜顛覆想像！養蝦不只賣蝦，還能賣「碳」救地球
                                            </div>
                                            <div className={cx('time')}>
                                                2025-03-13 <span>更新</span>
                                            </div>
                                            <div className={cx('txt')}>
                                                <p>永續加 第二集登場！養蝦還能斜槓到氣候科技，這次「永續加」邀請艾滴科技創辦人余萬洲，與聽眾分享他如何與太陽能業者合作「蝦電共生」，甚至發展成碳信用業務，還跟與輝達合作還跟與輝達合作還跟與輝達合作</p>
                                                <div className={cx('imgMoBox')}>
                                                    <div className={cx('img')}>
                                                        <img src={`${appUrl}/images/esg01.jpg`} alt="arraw" width={1072} height={603} loading="lazy"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('imgBox')}>
                                            <div className={cx('img')}>
                                                <img src={`${appUrl}/images/esg01.jpg`} alt="arraw" width={1072} height={603} loading="lazy"/>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <div className={cx('txtBox')}>
                                            <div className={cx('title')}>
                                                <strong>{searchKeyword}</strong> EP2｜顛覆想像！養蝦不只賣蝦，還能賣「碳」救地球
                                            </div>
                                            <div className={cx('time')}>
                                                2025-03-13 <span>更新</span>
                                            </div>
                                            <div className={cx('txt')}>
                                                <p>永續加 第二集登場！養蝦還能斜槓到氣候科技，這次「永續加」邀請艾滴科技創辦人余萬洲，與聽眾分享他如何與太陽能業者合作「蝦電共生」，甚至發展成碳信用業務，還跟與輝達合作還跟與輝達合作還跟與輝達合作</p>
                                                <div className={cx('imgMoBox')}>
                                                    <div className={cx('img')}>
                                                        <img src={`${appUrl}/images/esg01.jpg`} alt="arraw" width={1072} height={603} loading="lazy"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('imgBox')}>
                                            <div className={cx('img')}>
                                                <img src={`${appUrl}/images/esg01.jpg`} alt="arraw" width={1072} height={603} loading="lazy"/>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <div className={cx('txtBox')}>
                                            <div className={cx('title')}>
                                                <strong>{searchKeyword}</strong> EP2｜顛覆想像！養蝦不只賣蝦，還能賣「碳」救地球
                                            </div>
                                            <div className={cx('time')}>
                                                2025-03-13 <span>更新</span>
                                            </div>
                                            <div className={cx('txt')}>
                                                <p>永續加 第二集登場！養蝦還能斜槓到氣候科技，這次「永續加」邀請艾滴科技創辦人余萬洲，與聽眾分享他如何與太陽能業者合作「蝦電共生」，甚至發展成碳信用業務，還跟與輝達合作還跟與輝達合作還跟與輝達合作</p>
                                                <div className={cx('imgMoBox')}>
                                                    <div className={cx('img')}>
                                                        <img src={`${appUrl}/images/esg01.jpg`} alt="arraw" width={1072} height={603} loading="lazy"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('imgBox')}>
                                            <div className={cx('img')}>
                                                <img src={`${appUrl}/images/esg01.jpg`} alt="arraw" width={1072} height={603} loading="lazy"/>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <div className={cx('txtBox')}>
                                            <div className={cx('title')}>
                                                <strong>{searchKeyword}</strong> EP2｜顛覆想像！養蝦不只賣蝦，還能賣「碳」救地球
                                            </div>
                                            <div className={cx('time')}>
                                                2025-03-13 <span>更新</span>
                                            </div>
                                            <div className={cx('txt')}>
                                                <p>永續加 第二集登場！養蝦還能斜槓到氣候科技，這次「永續加」邀請艾滴科技創辦人余萬洲，與聽眾分享他如何與太陽能業者合作「蝦電共生」，甚至發展成碳信用業務，還跟與輝達合作還跟與輝達合作還跟與輝達合作</p>
                                                <div className={cx('imgMoBox')}>
                                                    <div className={cx('img')}>
                                                        <img src={`${appUrl}/images/esg01.jpg`} alt="arraw" width={1072} height={603} loading="lazy"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('imgBox')}>
                                            <div className={cx('img')}>
                                                <img src={`${appUrl}/images/esg01.jpg`} alt="arraw" width={1072} height={603} loading="lazy"/>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <div className={cx('txtBox')}>
                                            <div className={cx('title')}>
                                                <strong>{searchKeyword}</strong> EP2｜顛覆想像！養蝦不只賣蝦，還能賣「碳」救地球
                                            </div>
                                            <div className={cx('time')}>
                                                2025-03-13 <span>更新</span>
                                            </div>
                                            <div className={cx('txt')}>
                                                <p>永續加 第二集登場！養蝦還能斜槓到氣候科技，這次「永續加」邀請艾滴科技創辦人余萬洲，與聽眾分享他如何與太陽能業者合作「蝦電共生」，甚至發展成碳信用業務，還跟與輝達合作還跟與輝達合作還跟與輝達合作</p>
                                                <div className={cx('imgMoBox')}>
                                                    <div className={cx('img')}>
                                                        <img src={`${appUrl}/images/esg01.jpg`} alt="arraw" width={1072} height={603} loading="lazy"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('imgBox')}>
                                            <div className={cx('img')}>
                                                <img src={`${appUrl}/images/esg01.jpg`} alt="arraw" width={1072} height={603} loading="lazy"/>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <div className={cx('txtBox')}>
                                            <div className={cx('title')}>
                                                <strong>{searchKeyword}</strong> EP2｜顛覆想像！養蝦不只賣蝦，還能賣「碳」救地球
                                            </div>
                                            <div className={cx('time')}>
                                                2025-03-13 <span>更新</span>
                                            </div>
                                            <div className={cx('txt')}>
                                                <p>永續加 第二集登場！養蝦還能斜槓到氣候科技，這次「永續加」邀請艾滴科技創辦人余萬洲，與聽眾分享他如何與太陽能業者合作「蝦電共生」，甚至發展成碳信用業務，還跟與輝達合作還跟與輝達合作還跟與輝達合作</p>
                                                <div className={cx('imgMoBox')}>
                                                    <div className={cx('img')}>
                                                        <img src={`${appUrl}/images/esg01.jpg`} alt="arraw" width={1072} height={603} loading="lazy"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('imgBox')}>
                                            <div className={cx('img')}>
                                                <img src={`${appUrl}/images/esg01.jpg`} alt="arraw" width={1072} height={603} loading="lazy"/>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/* 跳頁選單 */}
                <div style={{display:'be8*^&@' === searchKeyword && 'none' }}>
                    { pageCount > 1 ? <Pagination uri={pathname} pageCount={pageCount} /> :''}
                </div>                    
                {/* 跳頁選單 ed */}
            </div>
        </main>
        <Footer />
    </div>
    );
}

export async function getServerSideProps(context) {
    const { query } = context;
    const page = Number(query.page) || 1;    
    const menu =  await genericPageService.getMenu();
    // 線上資料
    const focusUrl = new URL('/api/focus-news', process.env.API_URL);
    const focusRes = await fetch(focusUrl);
    const focus = await focusRes.json();

    return {
        props: {
            menu,            
            page,
            focus
        },
    };
}

