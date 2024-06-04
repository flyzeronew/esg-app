import { useState ,useEffect } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../../../comps/Header'
import Footer from '../../../comps/Footer'

const inter = Inter({ subsets: ['latin'] })
export default function viewArticle(props) {    
    const articleId = Number(props.articleId);
    const appUrl = process.env.APP_URL;
    const [bgShow, setBgShow] = useState(true);
    const [paddingTop, setPaddingTop] = useState();
    const getArticleData = props.viewData;
    const genreEnName = props.viewData.article_genres[0].en_name;

    //取資料 文章、共好夥伴、小撇步、延伸閱讀
    const articleContent = getArticleData.content;
    const articlePartner = getArticleData.partner;
    const articleSecret = getArticleData.article_secret;
    const articleExtended = getArticleData.extend_articles;
    // 日期轉換
    const formattedDate = (date) => {
        const originalTime = new Date(date);
        const isoDateString = originalTime.toISOString();
        const formattedDate = isoDateString.substring(0, 10);
        return formattedDate;
    };
    //return <pre>{JSON.stringify(articleList,null,4)}</pre>
    // 頁面識別
    const thisPage='view'; 
    const ogImg = process.env.OG_IMG;   
    // resize 監聽事件
    useEffect(() => {
        const editorNew = document.querySelector('.editorNew');
        const firstParagraph = editorNew.querySelector('p');
        const adBox = document.createElement('div');
        adBox.id = 'ad_box';
        editorNew.insertBefore(adBox, firstParagraph.nextSibling);

        // dfp廣告     
        if (typeof window !== 'undefined') {
            window.googletag = window.googletag || { cmd: [] };
        }        
        const loadAds = () => {
            window.googletag.cmd.push(function () {
                window.googletag.defineSlot('/21697024903/news.tvbs.com.tw_pc_index_top', [970,250], 'gpt_test').addService(window.googletag.pubads());
                window.googletag.pubads().enableSingleRequest();
                window.googletag.enableServices();
                googletag.display('gpt_test');
            });
        };      
        loadAds();
        // dfp廣告 ed        
        const handleResize = (e) => {
            const showBg = window.innerWidth > 767 ? true : false;
            const needPaddingTop = window.innerWidth > 1023 ? "30px" : "";
            setBgShow(showBg);
            setPaddingTop(needPaddingTop);
        };  
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 
    // resize 監聽事件 ed

    return (
    <div id='wrapper' className={inter.className}> 
        <Head>
            <title>{`${getArticleData.title} - TVBS ESG專區`}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="Keywords" content="TVBS,TVBS GOOD,TVBS ESG,企業社會責任,ESG永續發展,ESG指標,ESG企業,ESG議題" />
            <meta name="description" content={getArticleData.description} />
            <meta name="author" content="TVBS" />
            <meta name="copyright" content="TVBS" />
            <meta name="application-name" content="TVBS" />
            <meta name="URL" content={`${appUrl}/${thisPage}/${genreEnName}/${articleId}`} />
            <meta name="medium" content="mult" />
            <meta name="robots" content="INDEX,FOLLOW"/>
            <meta property="og:image" content={ogImg} />
            <link rel="canonical" href={`${appUrl}/${thisPage}/${genreEnName}/${articleId}`} />
        </Head>
        <Header thisPage={thisPage} menuData={props.menu}/>
        <main>
            <div>dfp廣告測試</div>
            <div id="gpt_test"></div>
            <div className="viewArticlePage" style={{ paddingTop:getArticleData.has_cover_img === 0 ? paddingTop : "" }}>   
                {getArticleData.has_cover_img === 1
                ?   <div className="coverImgBanner">
                        <div className="img">
                        <img src={getArticleData.cover_img}/>  
                        </div>
                    </div>
                :""}
                <div className="articleContent">
                    <div className="category">
                        <span>文章 </span>
                        <div className="line"></div>
                        <span>{getArticleData.article_genres[0].name}</span>
                    </div>
                    <h1 className="mainTitle">{getArticleData.title}</h1>


                    <div className="mainDescription">
                        <p>{getArticleData.description}</p>
                        <div className="line"></div>
                    </div>

                    <div className="timeBar">
                        <span>{formattedDate(getArticleData.updated_at)} 更新</span>
                        <span className="line"></span>                        
                        <div>
                            <span>撰稿  </span>
                            <span className="name">{getArticleData.author_name}</span>
                        </div>
                    </div>
                    
                    {/* 編輯器 */}
                    <div className="editorNew" dangerouslySetInnerHTML={{ __html: articleContent }}></div>
                    {/* 編輯器 ed*/}

                    {/* 廠商資訊 樣式三選一*/}

                    {articlePartner ? 
                        <div className="articleSponsor style1">
                            <div className="box">
                                <div className="imgBox">
                                    <div className="img">
                                        <img src={articlePartner.avatar ? articlePartner.avatar : process.env.IMG_DEFAULT_SQUARE} alt="img" width={90} height={90} loading="lazy"/>
                                    </div>
                                    <div className="txt">
                                        <div className="type">共好夥伴</div>
                                        <div className="name">
                                            <p>{articlePartner.name}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="description">
                                    <p>{articlePartner.introduction}</p>                                
                                </div>
                            </div>
                        </div>                    
                    :''}

                    {/* {articlePartner.name ? 
                        <div className="articleSponsor style2">
                            <div className="box">
                                <div className="imgBox">
                                    <div className="img">
                                        <img src={articlePartner.avatar} alt="img" width={90} height={90} loading="lazy"/>
                                    </div>
                                    <div className="txt">
                                        <div className="type">共好夥伴</div>
                                        <div className="name">
                                            <p>{articlePartner.name}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="description">
                                    <p>{articlePartner.introduction}</p>
                                </div>
                            </div>
                        </div>
                    :''} */}

                    {/* {articlePartner.name ?
                        <div className="articleSponsor style3">
                            <div className="box">
                                <div className="imgBox">
                                    <div className="img">
                                        <img src={articlePartner.avatar} alt="img" width={90} height={90} loading="lazy"/>
                                    </div>
                                    <div className="txt">
                                        <div className="type pc">共好夥伴</div>
                                        <div className="name">
                                            <p>{articlePartner.name}</p>
                                        </div>
                                        <div className="type mo">共好夥伴<div className="line"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="description">
                                    <p>{articlePartner.introduction}</p>                               
                                </div>
                            </div>
                        </div>
                    :''} */}

                    {/* 廠商資訊 ed*/}
                    {/* 小撇步報你知 */}    
                    {/* {articleSecret.cover_img ?
                        <div className="articleSecret">
                            <div className="articleTitle">
                                <p>小撇步報你知</p>
                                <div className="line"></div>
                            </div>
                            <div className="object">
                                <div className="imgBox">
                                    <div className="tag">{articleSecret.tag}</div>
                                    <div className="img">
                                        <img src={articlePartner.avatar} alt="img" width={90} height={90} loading="lazy"/>
                                    </div>
                                </div>
                                <div className="txtBox">                                
                                    <div className='rounded'>
                                        <img src="/images/rounded-02.svg" alt="rounded" width={50} height={50} loading="lazy"/>
                                    </div>
                                    <div className='box'>
                                        <div className="company">
                                            <img src={articleSecret.partner_logo} alt="img" width={50} height={50}/>
                                            <span>{articleSecret.partner_name} <span style={{fontStyle:`italic`}}>Sponsored</span></span>
                                        </div>
                                        <div className="title">
                                            <a href={articleSecret.url}>
                                                <p>{articleSecret.description}</p>
                                                <div className="arraw">
                                                    <img src={`${appUrl}/images/icon_arraw05.svg`} alt="arraw" width={50} height={50} loading="lazy"/>
                                                </div>
                                            </a>
                                        </div>                                    
                                    </div>                                                            
                                </div>
                            </div>
                        </div>                    
                    :''} */}
                    {/* 小撇步報你知 ed*/}
                </div>

                {/* 延伸閱讀 */}
                {articleExtended.length > 0 ?
                    <div className="articleExtended">
                        <div className="box">
                            <div className="tagBox">
                                <div className="articleTitle">
                                    <p>延伸閱讀</p>
                                    <div className="line"></div>
                                </div>                                
                                {/* <div className="tags">
                                    <div className="box1">
                                        { articleExtended.tags.length > 0 ?
                                            articleExtended.tags.map((item, index) => (
                                                <a key={index} href={item.url} target={item.is_blank === 1 ? '_blank' :'' } >
                                                    {item.name}
                                                </a>
                                            ))
                                        :''}
                                    </div>
                                </div> */}
                            </div>
                            <div className="listBox">
                                <div className="list">
                                    <ul>
                                        { articleExtended.length > 0 ?
                                            articleExtended.map((item, index) => (
                                                <li key={index}>
                                                    <a href={`${appUrl}/view/${item.article_genres[0].en_name}/${item.article_id}`}>
                                                        <div className="img">                                                          
                                                            <img src={item.cover_img ? item.cover_img : process.env.IMG_DEFAULT} alt="img" width={1072} height={603} loading="lazy"/>
                                                        </div>
                                                        <div className="txt">{item.title}</div>
                                                    </a>
                                                </li>
                                            ))
                                        :''}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>                
                :''}

                {/* 延伸閱讀 ed*/}

            </div>       

        </main>
        <div className="footerLine color1">
            <div className="box"></div>
        </div>
        <Footer act='color1'/>
    </div>
    );
}

export async function getServerSideProps(context) {
    try {
        const articleId = context.query.page;
        const menuUrl = new URL('/api/menu', process.env.APP_URL);
        const menuRes = await fetch(menuUrl);
        const menu = await menuRes.json();
        const viewUrl = new URL(`/api/articles/${articleId}`, process.env.API_URL);
        const viewRes = await fetch(viewUrl); 
        if (!viewRes.ok) {
            if (viewRes.status === 404) {
                return {
                    notFound: true,
                };
            } 
        }
        const viewData = await viewRes.json();
        return {
            props: {
                menu,
                viewData,
                articleId,
            },
        };
    } catch (error) {
        return {
            props: {
                error: error.message
            }
        };
    }
}