import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../comps/Header'
import Footer from '../comps/Footer'

const inter = Inter({ subsets: ['latin'] })
export default function Focus(props) {
    console.log(props);
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
                    <div className="title">{props.focus.title}</div>
                    <div className="txt">
                        <p>{props.focus.txt}</p>
                        <div className="line"></div>
                    </div>
                </div>
            </div>     
            <div className="list">
                <ul>
                    {
                        props.focus.list.length > 0 ?
                            props.focus.list.map((item, index) => (
                                <li key={index} style={{ 
                                    background: `url(${item.img}) no-repeat center center`,
                                    backgroundSize: `cover`
                                }}>
                                    <a href={item.url}>
                                        <div className="titleBox">
                                            <div className="titleDiv">
                                                <div className="title"><p>{item.title}</p></div>
                                                <div className="txt"><p>{item.txt}</p></div>
                                            </div>
                                            <div className="arraw">
                                                <img src="images/icon_arraw04.svg" alt="arraw" width={42} height={42}/>
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

    const focusUrl = new URL('/api/focus', process.env.APP_URL);
    const focusRes = await fetch(focusUrl);    
    const focus = await focusRes.json();
    
    return {
        props: {
            menu,focus
        },
    };
}