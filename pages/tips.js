import { useState ,useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Header from '../comps/Header'
import Footer from '../comps/Footer'
import List from '../comps/tips/List'

const inter = Inter({ subsets: ['latin'] })
export default function Tips(props) {    
    const appUrl = process.env.APP_URL;
    // 頁面識別
    const thisPage='tips';
    const [showList, setShowList] = useState(props.tipsData);
    const [submenuActive, setSubmenuActive] = useState(0);
    // 處理點擊事件
    const handleClick = (id) => {
        setSubmenuActive(id);
        if(id === 0){
            // 全部
            return setShowList(props.tipsData);
        }
        const filteredData = props.tipsData.filter(item => item.tip_genre.id === id);
        setShowList(filteredData);
    };
    return (
        <div id='wrapper' className={inter.className}> 
            <Head>
                <title>{"生活小撇步 - TVBS ESG專區"}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="Keywords" content="TVBS, TVBS GOOD,TVBS NEWS, TVBS ESG, ESG永續趨勢, ESG永續焦點, ESG永續發展, ESG議題, ESG活動, ESG實踐" />
                <meta name="description" content="ESG理念的實踐，需要從你我做起。如何透過食、衣、住、行、育、樂等方面的小撇步，來實踐ESG理念。" />        
                <meta name="author" content="TVBS" />
                <meta name="copyright" content="TVBS" />
                <meta name="application-name" content="TVBS" />
                <meta name="URL" content={`${appUrl}/${thisPage}`} />
                <meta name="medium" content="mult" />
                <meta name="robots" content="INDEX,FOLLOW"/>
                <link rel="canonical" href={`${appUrl}/${thisPage}`} />     
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
                                <a onClick={() => handleClick(0)}  href="javascript:void(0)" className={submenuActive === 0 ? "act" : ""}>全部</a>
                                {
                                    props.submenuData.length > 0 ?
                                        props.submenuData.map((item, index) => (
                                            <a onClick={() => handleClick(item.id)} href="javascript:void(0)" className={submenuActive === item.id ? "act" : ""}>{item.name}</a>
                                        )):''
                                }
                            </div>  
                        </div>  
                    </div>
                    <List listData={showList} />
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
    const tipsUrl = new URL('/api/tips-list', process.env.APP_URL);
    const tipsRes = await fetch(tipsUrl);    
    const tipsData = await tipsRes.json();    
    return {
        props: {
            menu,tipsData,submenuData
        },
    };
}