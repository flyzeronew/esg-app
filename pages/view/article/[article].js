
import Link from 'next/link'
import Image from 'next/image'
import { useState ,useEffect } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../../../comps/Header'
import Footer from '../../../comps/Footer'

const inter = Inter({ subsets: ['latin'] })
export default function viewArticle(props) {
    const appUrl = process.env.APP_URL;
    const [bgShow, setBgShow] = useState(true);
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
            <title>{"文章標題 - TVBS ESG專區"}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="Keywords" content="esg,esg2,esg3" />
            <meta name="description" content="esg description" />        
        </Head>
        <Header thisPage={thisPage} menuData={props.menu}/>
        <main>
            <div className="viewArticlePage" 
            style={{ 
                backgroundImage:bgShow ==true ? `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 1) 60%), url(${appUrl}/images/esg02.jpg)`:'',
                backgroundAttachment:`fixed`,            
            }}>
                
                <div className="articleContent">
                    <div className="category">
                        <span>文章：綠色生活</span>
                    </div>
                    <div className="mainTitle">全聯300家惜食門市，幫社福團體1123萬人次加菜</div>


                    <div className="mainDescription">
                        <p>日前超市全聯「36元特價便當」引發熱烈討論，但這不僅僅只是一般的促銷，而是全聯推出「剩食策略」的一環。</p>
                        <div className="line"></div>
                    </div>

                    <div className="timeBar">
                        <span>2023-08-17 更新</span>
                        <span className="line"></span>                        
                        <div>
                            <span>協助撰稿  </span>
                            <span className="name">劉俐均</span>
                        </div>
                    </div>

                    <div className="mainImg">
                        <div className="pic">
                            <div className='playIcon'>
                                <Image src={`${appUrl}/images/play-icon.svg`} alt="play" width={50} height={50}/>
                            </div>
                            <Image src="/images/esg05.jpg" alt="全聯惜食專區。（圖／胡瑞麒攝）" width={1072} height={603}/>
                        </div>                        
                        <div className="imgAlt">全聯惜食專區。（圖／胡瑞麒攝）</div>
                    </div>

                    {/* 編輯器 */}
                    <div className="editor">
                        <p>但單從即期品打折的方式遠遠不夠，根據環保署統計，2017年3月至2018年4月超市和量販業廚餘的廢棄食品申報量高達6630公噸，平均每月有超過500公噸剩食變廚餘，以一個500公克便當來計算，相當於100萬個便當的量。</p>
                        <p>看守台灣協會祕書長謝和霖指出，剩食的出現是從農產品一路到餐桌，農場端率先就會有農作物被丟棄的狀況，一路到賣場、果菜市場通路端將一些醜蔬果、沒賣掉的進行報廢。</p>
                        <p>針對源頭出現的浪費，全聯表示，目前主要是藉由採用契作和契養，和農友們有計畫性的生產，避免某一時期全部農民都搶種同一種生鮮蔬果商品，導致後續出現爆量、價格暴跌的窘境。</p>
                        <div className="articleAd">
                            <small>Sponsored</small>
                            <div className="pc">
                                <Image src="/images/article-ad.jpg" alt="arraw" width={970} height={250}/>
                            </div>
                            <div className="mo">
                                <Image src="/images/article-ad-m.jpg" alt="arraw" width={343} height={250}/>
                            </div>
                        </div>

                        <div className="articleGroup">
                            <div className="img">
                                <Image src="/images/esg02.jpg" alt="img" width={1072} height={603}/>
                            </div>
                            <div className="txt">
                                <div className="line"></div>
                                <p>
                                    不說還真不知道，其實這個可分解的吸管，來自台灣的公司，連它(吸管)的包裝袋，都能夠分解，包含亞馬遜、蘋果、
                                    好市多和星巴克都是主要客戶，甚至在疫情期間，台灣口罩國家隊，所送往國外的口罩包裝袋，也是這家公司的產品。
                                </p>
                                <small style={{textAlign:`center`}}>— 記者徐葳倫</small>
                                <div className="line"></div>
                            </div>

                        </div>

                        <h2>藉由非一次性使用的環保商品推廣，減少環境的汙染及惡化</h2>
                        <p>搖一搖，再把飲料倒進紙杯，但這杯飲料使用的吸管，暗藏玄機；因為過去常使用的塑膠吸管，在這間飲料店，再也看不到。飲料店店長邱小姐：「可分解吸管的話，就是比較不會製造垃圾跟塑膠的問題，其實現在很多客人也都響應環保，使用上客人也覺得蠻好的。」響應環保、減塑概念，手搖飲店把每天都會用到的塑膠吸管，全部換成可分解材質。</p>

                        <div className="articleImg">
                            <Image src="/images/esg01.jpg" alt="img" width={1072} height={603}/>
                            <div className="imgAlt">全聯惜食專區。（圖／胡瑞麒攝）</div>
                        </div>

                        <blockquote>
                            不說還真不知道，其實這個可分解的吸管，來自台灣的公司，連它(吸管)的包裝袋，都能夠分解，包含亞馬遜、蘋果、好市多和星巴克都是主要客戶，甚至在疫情期間，台灣口罩國家隊，所送往國外的口罩包裝袋，也是這家公司的產品。 
                            <small style={{textAlign:`center`}}>— 記者徐葳倫</small>
                        </blockquote>

                        <h2>藉由非一次性使用的環保商品推廣，減少環境的汙染及惡化</h2>
                        <p>原來製作這個可分解吸管的公司，發跡在台中無尾巷，靠著可分解塑膠的技術，闖進國際市場，不僅僅限於吸管，幾乎所有塑膠製品，從一次性餐具、餐盒、購物袋，全都找得到，差別在於它的「塑膠」，是完全能被分解。會做這些可分解材質，來自於董事長想培育學生，做中學的概念。</p>

                        <div className="imageGroup">
                            <div className="box">
                                <div className="img">
                                    <Image src="/images/esg02.jpg" alt="img" width={1072} height={603}/>                                    
                                </div>
                                <div className="imgAlt">全聯惜食專區。（圖／胡瑞麒攝）</div>
                            </div>
                            <div className="box">
                                <div className="img">
                                    <Image src="/images/esg03.jpg" alt="img" width={1072} height={603}/>                                    
                                </div>
                                <div className="imgAlt">全聯惜食專區。（圖／胡瑞麒攝）</div>
                            </div>
                        </div>

                        <p>銘安科技董事長黃建銘：「因為當你分解以後，有可能這個東西會稍微被濃縮，我們希望就是，你完全是低於土壤的背景值，所以全世界的認證裡面，分解度是大家都一致的要求，用堆肥的標準來講，你材料要在12周內就能崩解完畢，然後再接下來3個月，就是總共是180天內，你要能夠有90%以上，完全被轉換成二氧化碳跟水的能力，你不小心掉在土壤裡面，掉在地上，它還是會分解。」</p>
                        <p>標榜連掉在地上，三年內都能分解；其實這種可分解吸管的製作過程相當費工，不只溫度不能太高或太低，加工過程連含水量，都得注意，因為這些都可能影響材料老化，因此它的產量會比一般塑膠吸管少2成。掌握產品的分解速度，更是技術核心所在，如何做到兼顧可分解，又能拉長它的壽命，難度最高</p>
                        <p>以下廠商資訊三款樣式(手機版)</p>
                    </div>
                    {/* 編輯器 ed*/}
                    {/* 廠商資訊 */}
                    
                    <div className="articleSponsor style1">
                        <div className="box">
                            <div className="imgBox">
                                <div className="img">
                                    <Image src="/images/logo-view2.png" alt="img" width={90} height={90}/>
                                </div>
                                <div className="txt">
                                    <div className="type">共好夥伴</div>
                                    <div className="name">
                                        <p>全聯福利中心</p>
                                    </div>
                                </div>
                            </div>
                            <div className="description">
                                <p>秉持「從心出發，實現美好生活」為核心，提供優質的產品與服務。</p>                                
                            </div>
                        </div>
                    </div>
                    
                    <div className="articleSponsor style2">
                        <div className="box">
                            <div className="imgBox">
                                <div className="img">
                                    <Image src="/images/logo-view2.png" alt="img" width={90} height={90}/>
                                </div>
                                <div className="txt">
                                    <div className="type">共好夥伴</div>
                                    <div className="name">
                                        <p>全聯福利中心</p>
                                    </div>
                                </div>
                            </div>
                            <div className="description">
                                <p>秉持「從心出發，實現美好生活」為核心，提供優質的產品與服務。</p>                                
                            </div>
                        </div>
                    </div>

                    <div className="articleSponsor style3">
                        <div className="box">
                            <div className="imgBox">
                                <div className="img">
                                    <Image src="/images/logo-view2.png" alt="img" width={90} height={90}/>
                                </div>
                                <div className="txt">
                                    <div className="type pc">共好夥伴</div>
                                    <div className="name">
                                        <p>全聯福利中心</p>
                                    </div>
                                    <div className="type mo">
                                        共好夥伴
                                        <div className="line"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="description">
                                <p>秉持「從心出發，實現美好生活」為核心，提供優質的產品與服務。</p>                                
                            </div>
                        </div>
                    </div>

                    {/* 廠商資訊 ed*/}
                    {/* 小撇步報你知 */}                    
                    <div className="articleSecret">
                        <div className="articleTitle">
                            <p>小撇步報你知</p>
                            <div className="line"></div>
                        </div>
                        <div className="object">
                            <div className="imgBox">
                                <div className="tag">食</div>
                                <div className="img">
                                    <Image src="/images/food01-m.jpg" alt="img" width={140} height={140}/>
                                </div>
                            </div>
                            <div className="txtBox">                                
                                <div className='rounded'>
                                    <Image src="/images/rounded-02.svg" alt="rounded" width={50} height={50}/>
                                </div>
                                <div className='box'>
                                    <div className="company">
                                        <Image src="/images/partner01.jpg" alt="img" width={50} height={50}/>
                                        <span>台灣雀巢 Nestlé Taiwan <span style={{fontStyle:`italic`}}>Sponsored</span></span>
                                    </div>
                                    <div className="title">
                                        <p>吃完的免洗紙餐盒，需洗完再回收嗎？</p>
                                        <div className="arraw">
                                            <Image src={`${appUrl}/images/icon_arraw05.svg`} alt="arraw" width={50} height={50}/>
                                        </div>
                                    </div>                                    
                                </div>                                                            
                            </div>
                        </div>
                    </div>
                    
                    {/* 小撇步報你知 ed*/}


                </div>

                {/* 延伸閱讀 */}
                <div className="articleExtended">
                    <div className="box">
                        <div className="tagBox">
                            <div className="articleTitle">
                                <p>延伸閱讀</p>
                                <div className="line"></div>
                            </div>
                            <div className="tags">
                                <div className="box1">
                                    <Link href={`javascript:void(0)`}>#環保餐具</Link>
                                    <Link href={`javascript:void(0)`}>#環保吸管</Link>
                                    <Link href={`javascript:void(0)`}>#可分解材質</Link>
                                    <Link href={`javascript:void(0)`}>#銘安科技</Link>
                                </div>
                            </div>
                        </div>
                        <div className="listBox">
                            <div className="arraw">
                                <Image src={`${appUrl}/images/icon_arraw04.svg`} alt="arraw" width={42} height={42}/>
                            </div>
                            <div className="list">
                                <ul>
                                    <li>
                                        <Link href={`javascript:void(0)`}>
                                            <div className="img">
                                                <div className='playIcon'>                                 
                                                    <Image src={`${appUrl}/images/play-icon.svg`} alt="play" width={50} height={50}/>
                                                </div>
                                                <Image src="/images/esg03.jpg" alt="img" width={1072} height={603}/>
                                            </div>
                                            <div className="txt">
                                                使用「紙吸管、竹吸管」
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={`javascript:void(0)`}>
                                            <div className="img">
                                                <Image src="/images/esg03.jpg" alt="img" width={1072} height={603}/>
                                            </div>
                                            <div className="txt">
                                                使用「紙吸管、竹吸管」真環保？真相竟是這樣使用「紙吸管、竹吸管」真環保？真相竟是這樣使用「紙吸管、竹吸管」真環保？真相竟是這樣
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={`javascript:void(0)`}>
                                            <div className="img">
                                                <Image src="/images/esg03.jpg" alt="img" width={1072} height={603}/>
                                            </div>
                                            <div className="txt">
                                                使用「紙吸管、竹吸管」真環保？真相竟是這樣
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 延伸閱讀 ed*/}

            </div>       

        </main>
        <div className="footerLine">
            <div className="box color1"></div>
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

    
    return {
        props: {
            menu
        },
    };
}