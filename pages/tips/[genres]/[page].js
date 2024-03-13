import Image from 'next/image'
import { useState ,useEffect } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../../../comps/Header'
import Footer from '../../../comps/Footer'

const inter = Inter({ subsets: ['latin'] })
export default function page(props) {
    const appUrl = process.env.APP_URL;
    // 頁面識別
    const thisPage='tips';    
    return (
    <div id='wrapper' className={inter.className}> 
        <Head>
            <title>{`永續小撇步文章標題 - TVBS ESG專區`}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="Keywords" content="esg,esg2,esg3" />
            <meta name="description" content="esg description" />        
        </Head>
        <Header thisPage={thisPage} menuData={props.menu}/>
        <main>
            <div className="tipsDetailPage">
                <div className="contentBox">
                    <div className="imgBox">
                        <div className="frameBox">
                            {/* <Image src="/images/tips01.jpg" alt="img" width={800} height={800}/>   */}
                        </div>
                    </div>

                </div>

                <div className="contentMore">                    
                    <div className="frameBox">
                        <div className="title">繼續看</div>
                        <div className="list">
                            <ul>
                                <li>
                                    <a href='#'>
                                        <div className="img">
                                            <Image src={`${appUrl}/images/tips01.jpg`} alt="img" width={300} height={300}/>
                                        </div>
                                        <div className="tag">食</div>
                                        <div className="txtBox">
                                            <div className='rounded'>
                                                <Image src={`${appUrl}/images/rounded-05.svg`} alt="rounded" width={50} height={50}/>
                                            </div>
                                            <div className='txtFlex'>
                                                <div className='txt'>
                                                    <p>怎麼喝咖啡最環保？怎麼喝咖啡最環保？怎麼喝咖啡最環保？怎麼喝咖啡最環保？</p>
                                                </div>
                                                <div className='rounded'>
                                                    <Image src={`${appUrl}/images/rounded-05.svg`} alt="rounded" width={50} height={50}/>
                                                </div>
                                            </div>                                        
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <div className="img">
                                            <Image src={`${appUrl}/images/tips01.jpg`} alt="img" width={300} height={300}/>
                                        </div>
                                        <div className="tag">食</div>
                                        <div className="txtBox">
                                            <div className='rounded'>
                                                <Image src={`${appUrl}/images/rounded-05.svg`} alt="rounded" width={50} height={50}/>
                                            </div>
                                            <div className='txtFlex'>
                                                <div className='txt'>
                                                    <p>怎麼喝咖啡最環保？</p>
                                                </div>
                                                <div className='rounded'>
                                                    <Image src={`${appUrl}/images/rounded-05.svg`} alt="rounded" width={50} height={50}/>
                                                </div>
                                            </div>                                        
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <div className="img">
                                            <Image src={`${appUrl}/images/tips01.jpg`} alt="img" width={300} height={300}/>
                                        </div>
                                        <div className="tag">食</div>
                                        <div className="txtBox">
                                            <div className='rounded'>
                                                <Image src={`${appUrl}/images/rounded-05.svg`} alt="rounded" width={50} height={50}/>
                                            </div>
                                            <div className='txtFlex'>
                                                <div className='txt'>
                                                    <p>怎麼喝咖啡最環保？</p>
                                                </div>
                                                <div className='rounded'>
                                                    <Image src={`${appUrl}/images/rounded-05.svg`} alt="rounded" width={50} height={50}/>
                                                </div>
                                            </div>                                        
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <div className="footerLine color1">
            <div className="box"></div>
        </div>
        <Footer act ='color1'/>
    </div>
    );
}
export async function getServerSideProps(context) {
    const menuUrl = new URL('/api/menu', process.env.APP_URL);
    const menuRes = await fetch(menuUrl);
    const menu = await menuRes.json();
    
    return {
        props: {
            menu
        },
    };
}