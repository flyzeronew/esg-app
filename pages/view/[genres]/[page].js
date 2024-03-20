import Image from 'next/image'
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

    const getArticleData = props.viewData;

    //取資料 文章、共好夥伴、小撇步、延伸閱讀
    const articleContent = getArticleData.content;
    const articlePartner = getArticleData.partner;
    const articleSecret = getArticleData.article_secret;
    const articleExtended = getArticleData.article_extended;

    // 日期轉換
    const formattedDate = (date) => {
        const originalTime = new Date(date);
        const isoDateString = originalTime.toISOString();
        const formattedDate = isoDateString.substring(0, 10);
        return formattedDate;
    };
    console.log(getArticleData.has_cover_img);
    //return <pre>{JSON.stringify(articleList,null,4)}</pre>
    // 頁面識別
    const thisPage='view';    
    // resize 監聽事件
    useEffect(() => { 
        const handleResize = (e) => {
            const showBg = window.innerWidth > 767 ? true : false;
            setBgShow(showBg);
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
            <meta name="Keywords" content="" />
            <meta name="description" content={getArticleData.description} />        
        </Head>
        <Header thisPage={thisPage} menuData={props.menu}/>
        <main>            
            <div className="viewArticlePage" 
            style={{ 
                backgroundImage:getArticleData.has_cover_img == 1 && bgShow ==true ? `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 1) 60%), url(${getArticleData.cover_img})`:'',
                backgroundAttachment:`fixed`,            
            }}>
                
                <div className="articleContent">
                    <div className="category">
                        <span>文章：{getArticleData.article_genres[0].name}</span>
                    </div>
                    <div className="mainTitle">{getArticleData.title}</div>


                    <div className="mainDescription">
                        <p>{getArticleData.description}</p>
                        <div className="line"></div>
                    </div>

                    <div className="timeBar">
                        <span>{formattedDate(getArticleData.updated_at)} 更新</span>
                        <span className="line"></span>                        
                        <div>
                            <span>協助撰稿  </span>
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
                                        <Image src={articlePartner.avatar} alt="img" width={90} height={90}/>
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
                                        <Image src={articlePartner.avatar} alt="img" width={90} height={90}/>
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
                                        <Image src={articlePartner.avatar} alt="img" width={90} height={90}/>
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
                                        <Image src={articlePartner.avatar} alt="img" width={90} height={90}/>
                                    </div>
                                </div>
                                <div className="txtBox">                                
                                    <div className='rounded'>
                                        <Image src="/images/rounded-02.svg" alt="rounded" width={50} height={50}/>
                                    </div>
                                    <div className='box'>
                                        <div className="company">
                                            <Image src={articleSecret.partner_logo} alt="img" width={50} height={50}/>
                                            <span>{articleSecret.partner_name} <span style={{fontStyle:`italic`}}>Sponsored</span></span>
                                        </div>
                                        <div className="title">
                                            <a href={articleSecret.url}>
                                                <p>{articleSecret.description}</p>
                                                <div className="arraw">
                                                    <Image src={`${appUrl}/images/icon_arraw05.svg`} alt="arraw" width={50} height={50}/>
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
                {articleExtended ?
                    <div className="articleExtended">
                        <div className="box">
                            <div className="tagBox">
                                <div className="articleTitle">
                                    <p>延伸閱讀</p>
                                    <div className="line"></div>
                                </div>                                
                                <div className="tags">
                                    <div className="box1">
                                        { articleExtended.tags.length > 0 ?
                                            articleExtended.tags.map((item, index) => (
                                                <a key={index} href={item.url} target={item.is_blank === 1 ? '_blank' :'' } >
                                                    {item.name}
                                                </a>
                                            ))
                                        :''}
                                    </div>
                                </div>
                            </div>
                            <div className="listBox">
                                <div className="arraw">
                                    <Image src={`${appUrl}/images/icon_arraw04.svg`} alt="arraw" width={42} height={42}/>
                                </div>
                                <div className="list">
                                    <ul>
                                        { articleExtended.list.length > 0 ?
                                            articleExtended.list.map((item, index) => (
                                                <li key={index}>
                                                    <a href={item.url} target={item.is_blank === 1 ? '_blank' :'' }>
                                                        <div className="img">
                                                            {item.youtube ?
                                                                <div className='playIcon'>                                 
                                                                    <Image src={`${appUrl}/images/play-icon.svg`} alt="play" width={50} height={50}/>
                                                                </div>
                                                            :''}                                                            
                                                            <Image src={item.cover_img} alt="img" width={1072} height={603}/>
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
    const articleId = context.query.page;
    const menuUrl = new URL('/api/menu', process.env.APP_URL);
    const menuRes = await fetch(menuUrl);
    const menu = await menuRes.json();
    // 線上資料
    // list
    const viewUrl = new URL(`/api/articles/${articleId}`, process.env.API_URL);
    const viewRes = await fetch(viewUrl); 
    const viewData = await viewRes.json();

    return {
        props: {
            menu,viewData,articleId,
        },
    };
}