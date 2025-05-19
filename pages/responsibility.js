import { useState ,useEffect } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../comps/Header'
import Footer from '../comps/Footer'
import Practice from '../comps/responsibility/Practice'

const inter = Inter({ subsets: ['latin'] })
export default function Responsibility(props) {
    // 頁面識別
    const thisPage='responsibility';
    const ogImg = process.env.OG_IMG;
    const [clicked, setClicked] = useState(false);
    // 處理點擊事件
    const handleClick = () => {
        setClicked(!clicked);
    };

    const defaultClick = (event) => {
        event.preventDefault();
    };
    const responsibilityData = props.responsibilityData;
    const practiceData = responsibilityData.slice(0, 3);
    const moreData = responsibilityData.slice(3);
    const appUrl = process.env.APP_URL;
    return (
    <div id='wrapper' className={inter.className}> 
        <Head>
            <title>{"永續責任 - TVBS ESG專區"}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="Keywords" content="TVBS, TVBS GOOD,TVBS NEWS, TVBS ESG, ESG永續趨勢, ESG永續焦點, ESG永續發展, ESG議題" />
            <meta name="description" content="" /> 
            <meta name="author" content="TVBS" />
            <meta name="copyright" content="TVBS" />
            <meta name="application-name" content="TVBS" />
            <meta name="URL" content={`${appUrl}/${thisPage}`} />
            <meta name="medium" content="mult" />
            <meta name="robots" content="INDEX,FOLLOW"/>
            <meta property="og:image" content={ogImg} /> 
            <link rel="canonical" href={`${appUrl}/${thisPage}`}/>       
        </Head>
        <Header thisPage={thisPage} menuData={props.menu}/>
        <main>
            <div className="responsibilityPage">
                <div className='mainView'>
                    <div className='img'>
                        <img src={`${appUrl}/images/responsibility_bg01.jpg`} alt="bg" width={1920} height={1024} loading="lazy"/>
                    </div>
                    <div className='titleBox'>
                        <div className='title'>                            
                            <div className='box'>
                                <div className='rounded'></div>
                                <h1 className='t1'>TVBS GOOD 永續共好</h1>
                                <div className='rounded'>
                                    <img src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                </div>
                            </div>
                            <div className='box'>
                                <div className='rounded'>
                                    <img src={`${appUrl}/images/rounded-03.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                </div>
                                <p>Better Future.<br/>Together</p>
                                <div className='rounded'>
                                    <img src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='content'>

                    <div className='title'>
                        <h2>引領永續新視界</h2>
                        <div className='line'></div>
                    </div>

                    <div className='mainImage'>
                        {
                            clicked ? 
                                <div className='video'>
                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/pMTFK3q-rek?autoplay=1&mute=1" frameborder="0" allowfullscreen></iframe>
                                </div>
                            :''
                        }
                        <div className='img' onClick={handleClick}>
                            <div className='playIcon'>
                                <img src={`${appUrl}/images/play-icon.svg`} alt="play" width={50} height={50} loading="lazy"/>
                            </div>
                            <div className='txt'>
                                <div className='t1'>數位永續皆卓越！TVBS總經理劉文硯<br/>再獲APEA「卓越企業領袖」</div>
                            </div>
                            <div className='video'>
                                <img src='http://img.youtube.com/vi/pMTFK3q-rek/maxresdefault.jpg' alt="img" width={1920} height={1080} loading="lazy"/>
                            </div>
                        </div>                        
                    </div>

                    <div className='contxt'>
                        <div className='t1'>  
                            <div className='line'></div>                         
                            <p>積極倡議永續 是我們堅定的承諾</p>                            
                            <div className='line'></div>
                        </div>
                        <p>
                            在永續議題上，沒有人是局外人。因為永續攸關人類發展，更是決定地球存亡的關鍵！作為媒體領導品牌，我們深刻理解媒體在塑造公眾意識和影響社會行為方面，擁有巨大的影響力。TVBS新聞長期製作深度專題報導，探討聯合國17項永續發展目標 (SDGs) 議題，包括監督環境危機的「帳篷下的秘密」，檢視長照、醫療制度的「你我老之路-老病死之生路」，關注派遣勞工權益的「派遣工的正義-我不是你的免洗筷」，以及探究人生老化過程中、各種照顧困境的「大照顧時代」，都透過深入淺出的剖析，傳達環境保護及永續理念，並獲得卓越新聞獎肯定。
                        </p>
                        <p>
                            各內容品牌也都提出具體的ESG主張，例如:女人我最大節目，倡議「純淨美容Clean Beauty」的觀念，在變美之餘，也不造成地球環境負擔；地球黃金線關注電動車與環保材質汽車的最新趨勢；食尚玩家提倡綠色低碳旅遊等，皆是永續觀念的「具體轉譯」，與觀眾一起培養永續識讀力。唯有讓永續成為日常，才能創造「韌性」的地球。我們深切期盼各界攜手合作，共同探索解決氣候變遷、全球暖化和再生能源等重要議題的方法，並自我期許將成為媒體界的ESG貢獻者，為實現永續發展的美好願景盡心盡力。
                        </p>
                        <p>
                            聯利媒體 TVBS 總經理<br/>
                            永續發展委員會 主任委員  劉文硯
                        </p>
                    </div>

                    <div className='peopleBox'>
                        <div className='title'>
                            <h2>TVBS永續倡議大使 莊開文</h2>
                            <div className='line'></div>
                        </div>
                        <div className='contxt'>
                            <p>
                                TVBS資深主播<strong>莊開文</strong>，擔任「TVBS永續倡議大使」，我們將從「永續、共好、愛無限」三面向積極推進ESG策略，與您攜手，共創美好的永續殿堂。
                            </p>
                        </div>

                        <div className='people'>
                            <div className='img'>
                                <img src={`${appUrl}/images/people01.jpg`} alt="img" width={1920} height={1080} loading="lazy"/>
                            </div>
                            <div className='txtBox'>
                                <div className='txt'>
                                    我們深信，媒體的傳播力量可以撼動生命，影響一整個世代; 而您的關心和投入，更是這股力量的加速器! 
                                </div>
                                <div className='small'>- 永續倡議大使 莊開文 </div>
                            </div>
                        </div> 
                        <div className='line'></div>
                        <p>
                            誠如TVBS GOOD 的品牌識別設計，中間兩個O相連相握，便成為一個「無限大」的符號，我們也深信，只要共好，就能永續無限、愛無限。面對氣候劇烈變遷、自然資源枯竭、糧食分配不均、疾病災害兵戎屢現等嚴酷考驗，我們需要更堅定的意志、更多元的學習、更包容的態度、更具體的作為，才能讓我們一起擁有永續美好的生活。
                        </p>

                        <div className="imageGroup">
                            <div className="box">
                                <div className="img">
                                    <img src="/images/people01-1.jpg" alt="img" width={1072} height={603} loading="lazy"/>                                    
                                </div>
                                {/* <div className="imgAlt">TVBS 永續倡議大使(圖／TVBS)</div> */}
                            </div>
                            <div className="box">
                                <div className="img">
                                    <img src="/images/people01-2.jpg" alt="img" width={1072} height={603} loading="lazy"/>
                                </div>
                                {/* <div className="imgAlt">TVBS 永續倡議大使(圖／TVBS)</div> */}
                            </div>
                        </div>
                    </div>

                    <div className="brand">
                        <div className='title'>
                            <h2>TVBS永續品牌</h2>
                            <div className='line'></div>
                        </div>

                        <p>
                            根據英國牛津大學調查認證: TVBS連續6年獲選為最受信賴商業電視台，身為臺灣媒體領導品牌，我們秉持「真實」（Truth）、「信賴」（Trust）、「科技」（Technology）三大核心價值，發展出各大永續品牌。包括:倡議「純淨美容clean Beauty」觀念的「女人我最大」，關注電動車與環保材質汽車最新趨勢的「地球黃金線」，提倡綠色低碳旅遊的「食尚玩家」，關懷健康生活的「健康 2.0」，我們用觀眾能夠接受和理解的方式，將永續觀念「轉譯」為更親和易懂的內容。
                        </p>
                        <div className='listBox'>
                            <div className='list'>
                                <ul>
                                    <li>
                                        <a href='#' onClick={defaultClick}>
                                            <div className='imgBox'>
                                                <div className='img'>
                                                    <img src={`${appUrl}/images/brand01.jpg`} alt="img" width={1072} height={603} loading="lazy"/>
                                                </div>                                            
                                                <div className='logoBox'>
                                                    <div className='rounded'>
                                                        <img src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                                    </div>
                                                    <div className='logoFlex'>
                                                        <div className='logo'>
                                                            <img src={`${appUrl}/images/brand-logo01.png`} alt="img" width={1072} height={603} loading="lazy"/>
                                                        </div>
                                                        <div className='rounded'>
                                                            <img src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='txt'>關注台灣電動車分析與產業動態，讓永續行動更落地。</div>                                    
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' onClick={defaultClick}>
                                            <div className='imgBox'>
                                            <div className='img'>
                                                    <img src={`${appUrl}/images/brand02.jpg`} alt="img" width={1072} height={603} loading="lazy"/>
                                                </div>  
                                                <div className='logoBox'>
                                                    <div className='rounded'>
                                                        <img src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                                    </div>
                                                    <div className='logoFlex'>
                                                        <div className='logo'>
                                                            <img src={`${appUrl}/images/brand-logo02.png`} alt="img" width={1072} height={603} loading="lazy"/>
                                                        </div>
                                                        <div className='rounded'>
                                                            <img src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='txt'>以AI科技協助民眾就醫、改善自身健康，實踐聯合國「促進各年齡層健康生活與福祉」的永續目標。</div>                                    
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' onClick={defaultClick}>
                                            <div className='imgBox'>
                                                <div className='img'>
                                                    <img src={`${appUrl}/images/brand03.jpg`} alt="img" width={1072} height={603} loading="lazy"/>
                                                </div>  
                                                <div className='logoBox'>
                                                <div className='rounded'>
                                                        <img src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                                    </div>
                                                    <div className='logoFlex'>
                                                        <div className='logo'>
                                                            <img src={`${appUrl}/images/brand-logo03.png`} alt="img" width={1072} height={603} loading="lazy"/>
                                                        </div>
                                                        <div className='rounded'>
                                                            <img src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='txt'>讓愛美、愛自己的同時，也能同時愛地球。提供天然成分、無害化學物質的美妝新選擇。</div>                                    
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' onClick={defaultClick}>
                                            <div className='imgBox'>
                                                <div className='img'>
                                                    <img src={`${appUrl}/images/brand04.jpg`} alt="img" width={1072} height={603} loading="lazy"/>
                                                </div>  
                                                <div className='logoBox'>
                                                    <div className='rounded'>
                                                        <img src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                                    </div>
                                                    <div className='logoFlex'>
                                                        <div className='logo'>
                                                            <img src={`${appUrl}/images/brand-logo04.png`} alt="img" width={1072} height={603} loading="lazy"/>
                                                        </div>
                                                        <div className='rounded'>
                                                            <img src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='txt'>關注綠色生活旅遊，報導旅遊業的最新發展、政策變化、環保倡議，鼓勵更多人參與可持續旅遊。</div>                                    
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' onClick={defaultClick}>
                                            <div className='imgBox'>
                                                <div className='img'>
                                                    <img src={`${appUrl}/images/brand05.jpg`} alt="img" width={1072} height={603} loading="lazy"/>
                                                </div>  
                                                <div className='logoBox'>
                                                    <div className='rounded'>
                                                        <img src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                                    </div>
                                                    <div className='logoFlex'>
                                                        <div className='logo'>
                                                            <img src={`${appUrl}/images/brand-logo05.png`} alt="img" width={1072} height={603} loading="lazy"/>
                                                        </div>
                                                        <div className='rounded'>
                                                            <img src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='txt'>以報導全球環境、永續議題為己任，深度追蹤企業在社會責任、公司治理與永續環境間的作為。</div>                                    
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' onClick={defaultClick}>
                                            <div className='imgBox'>
                                                <div className='img'>
                                                    <img src={`${appUrl}/images/brand06.jpg`} alt="img" width={1072} height={603} loading="lazy"/>
                                                </div>  
                                                <div className='logoBox'>
                                                    <div className='rounded'>
                                                        <img src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                                    </div>
                                                    <div className='logoFlex'>
                                                        <div className='logo'>
                                                            <img src={`${appUrl}/images/brand-logo06.png`} alt="img" width={1072} height={603} loading="lazy"/>
                                                        </div>
                                                        <div className='rounded'>
                                                            <img src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='txt'>理解政府與企業面對淨零轉型所遇到的痛點，提出可執行的解方，成為大眾理解ESG的轉譯者。</div>                                    
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' onClick={defaultClick}>
                                            <div className='imgBox'>
                                                <div className='img'>
                                                    <img src={`${appUrl}/images/brand07.jpg`} alt="img" width={1072} height={603} loading="lazy"/>
                                                </div>  
                                                <div className='logoBox'>
                                                    <div className='rounded'>
                                                        <img src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                                    </div>
                                                    <div className='logoFlex'>
                                                        <div className='logo'>
                                                            <img src={`${appUrl}/images/brand-logo07.png`} alt="img" width={1072} height={603} loading="lazy"/>
                                                        </div>
                                                        <div className='rounded'>
                                                            <img src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='txt'>TVBS原創劇集及節目製作團隊，落實永續意識由內部做起，打造環保餐食、道具再利用。</div>                                    
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' onClick={defaultClick}>
                                            <div className='imgBox'>
                                                <div className='img'>
                                                    <img src={`${appUrl}/images/brand08.jpg`} alt="img" width={1072} height={603} loading="lazy"/>
                                                </div>  
                                                <div className='logoBox'>
                                                    <div className='rounded'>
                                                        <img src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                                    </div>
                                                    <div className='logoFlex'>
                                                        <div className='logo'>
                                                            <img src={`${appUrl}/images/brand-logo08.png`} alt="img" width={1072} height={603} loading="lazy"/>
                                                        </div>
                                                        <div className='rounded'>
                                                            <img src={`${appUrl}/images/rounded-04.svg`} alt="rounded" width={50} height={50} loading="lazy"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='txt'>集結旗下藝人、職人及達人，共同倡議永續議題，號召投入環境保護。</div>                                    
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='title s1'>
                            <h2>領航ESG媒體 實踐永續承諾</h2>
                            <div className='line'></div>
                        </div>

                        <p>
                            永續不是口號，而是關乎人類生存的關鍵字。<br/><br/>
                            我們希望透過永續領航者的角色，號召更多媒體、民眾能一起加入關注永續議題的行列，讓永續成為一門顯學。<br/><br/>
                            除了對台灣這片土地的關懷，TVBS未來也將跨足國際，發揮媒體影響力，期待在永續議題上，成為臺灣的推手，做世界的通道，為滋養我們的地球，盡心盡力。
                        </p>
                        {/* 輪播部分 */}
                        { practiceData.length > 0 ? 
                            <Practice practiceData={practiceData} />
                            :''
                        }
                        {/* 輪播部分 ed*/}
                        { moreData.length > 0 ? 
                            <div className='practiceMore'>
                                <div className='title s1'>更多TVBS永續實踐力</div>
                                <div className='list'>
                                    {moreData.map((item, index) => (
                                        <a key={index} href={`${appUrl}/view/${item.article_genres[0].en_name}/${item.article_id}`} >
                                            <div className='img'>
                                                <img src={item.cover_img} alt="img" width={1072} height={603} loading="lazy"/>
                                            </div>
                                            <div className='txtBox'>
                                                <div className='txt'>
                                                    <p>{item.title}</p>
                                                    <div className='arraw' >
                                                        <img src={`${appUrl}/images/icon_arraw04.svg`} alt="arraw" width={42} height={42} loading="lazy"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                            :''
                        }
                    </div>
                </div>

            </div>
        </main>
        <div className="footerLine color1">
            <div className="box"></div>
        </div>
        <Footer act='color1'/>
    </div>
    );
}

export async function getServerSideProps() {
    const menuUrl = new URL('/api/menu', process.env.APP_URL);
    const menuRes = await fetch(menuUrl);
    const menu = await menuRes.json();
    // 線上資料

    const responsibilityUrl = process.env.APP_ENV==='production'?
    new URL('/api/responsibility-prd', process.env.APP_URL):
    new URL('/api/responsibility-dev', process.env.APP_URL);    

    const responsibilityRes = await fetch(responsibilityUrl);
    const responsibilityData = await responsibilityRes.json();
    
    return {
        props: {
            menu,responsibilityData
        },
    };
}