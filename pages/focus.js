import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../comps/Header'
import Footer from '../comps/Footer'

const inter = Inter({ subsets: ['latin'] })
export default function Focus(props) {

// 頁面識別
const thisPage='focus';
return (
<div id='wrapper' className={inter.className}>    
    <Head>
    <title>{"esg | TVBS 官網"}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="Keywords" content="esg,esg2,esg3" />
    <meta name="description" content="esg description" />        
    </Head>
    <Header thisPage={thisPage} menuData={props.menu}/>
    <main>
        <div className="focusPage">
            <div className="sharedBanner">
                <div className="mask"></div>
                <div className="box">
                    <div className="title">未來焦點</div>
                    <div className="txt">
                        <p>綠能發展、資源再生，海洋保護與氣候因應，都成為社會訴求，企業以綠色思維，創新技術，營造永續商業新模式。</p>
                        <div className="line"></div>
                    </div>
                </div>
            </div>     
            <div className="list">
                <ul>
                    <li>
                        <a href='javascript:void(0)'>
                            <div className="titleBox">
                                <div className="titleDiv">
                                    <div className="title"><p>台灣剩食危機</p></div>
                                    <div className="txt"><p>每人每天浪費一個便當！</p></div>
                                </div>
                                <div className="arraw">
                                    <img src="images/icon_arraw04.svg" alt="arraw" width={42} height={42}/>
                                </div>
                            </div>
                            <img className='pc' src="images/food01.jpg" alt="arraw" width={1130} height={520}/>
                            <img className='mo' src="images/food01-m.jpg" alt="arraw" width={500} height={500}/>
                        </a>
                    </li>
                    <li>
                        <a href='javascript:void(0)'>
                            <div className="titleBox">
                                <div className="titleDiv">
                                    <div className="title"><p>碳排放</p></div>
                                    <div className="txt"><p>碳排放之重，大地喘息之聲。攜手減碳，寶島綠意永續。</p></div>
                                </div>
                                <div className="arraw">
                                    <img src="images/icon_arraw04.svg" alt="arraw" width={42} height={42}/>
                                </div>
                            </div>
                            <img className='pc' src="images/food02.jpg" alt="arraw" width={1130} height={520}/>
                            <img className='mo' src="images/food02-m.jpg" alt="arraw" width={500} height={500}/>
                        </a>
                    </li>
                    <li>
                        <a href='javascript:void(0)'>
                            <div className="titleBox">
                                <div className="titleDiv">
                                    <div className="title"><p>氣候變遷</p></div>
                                    <div className="txt"><p>大地呼籲，氣候變遷警世，太陽炙烤，風雨無常，為環保，緩解氣候危機。</p></div>
                                </div>
                                <div className="arraw">
                                    <img src="images/icon_arraw04.svg" alt="arraw" width={42} height={42}/>
                                </div>
                            </div>
                            <img className='pc' src="images/food03.jpg" alt="arraw" width={1130} height={520}/>
                            <img className='mo' src="images/food03-m.jpg" alt="arraw" width={500} height={500}/>
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
    return {
        props: {
            menu,
        },
    };
}