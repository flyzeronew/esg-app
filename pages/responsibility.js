import { useState ,useEffect } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../comps/Header'
import Footer from '../comps/Footer'

const inter = Inter({ subsets: ['latin'] })
export default function Focus(props) {
    // 頁面識別
    const thisPage='responsibility';
    const appUrl = process.env.APP_URL;
    return (
    <div id='wrapper' className={inter.className}> 
        <Head>
            <title>{"永續責任 - TVBS ESG專區"}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="Keywords" content="" />
            <meta name="description" content="" />        
        </Head>
        <Header thisPage={thisPage} menuData={props.menu}/>
        <main>
            <div className="responsibilityPage">
                <div className='mainView'>
                    <div className='img'>
                        <Image src={`${appUrl}/images/responsibility_bg.jpg`} alt="arraw" width={1920} height={1024}/>
                    </div>
                    <div className='titleBox'>
                        <div className='title'>
                            <div className='box'>
                                <div className='rounded'></div>
                                <p>關於共好未來</p>
                                <div className='rounded'>
                                    <Image src={`${appUrl}/images/rounded-04.svg`} alt="arraw" width={50} height={50}/>
                                </div>
                            </div>
                            <div className='box'>
                                <div className='rounded'>
                                    <Image src={`${appUrl}/images/rounded-03.svg`} alt="arraw" width={50} height={50}/>
                                </div>
                                <p>Better Future. Together</p>
                                <div className='rounded'>
                                    <Image src={`${appUrl}/images/rounded-04.svg`} alt="arraw" width={50} height={50}/>
                                </div>
                            </div>
                        </div>
                    </div>
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
    // 線上資料

    
    return {
        props: {
            menu
        },
    };
}