import Image from 'next/image'
import { useState ,useEffect } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../../../comps/Header'
import Footer from '../../../comps/Footer'

const inter = Inter({ subsets: ['latin'] })
export default function page(props) {
    const [selectedOptions, setSelectedOptions] = useState([]);    
    const [scorllStop, setScorllStop] = useState(false);
    
    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        if (selectedOptions.includes(value)) {
            setSelectedOptions(selectedOptions.filter(option => option !== value));
        } else {
            setSelectedOptions([...selectedOptions, value]);
        }
    };
    useEffect(() => {
        const contentMore = document.querySelector('.tipsDetailPage .contentMore');  
        const headerHeight = document.querySelector('header').offsetHeight;
        const imgBoxHeight = document.querySelector('.tipsDetailPage .fixBox').offsetHeight;
        const handleScroll = () => {
            if (window.scrollY + headerHeight + imgBoxHeight > contentMore.offsetTop) {
                setScorllStop(true);             
            } else {
                setScorllStop(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const tagColor =['#FFDC34','#68E3BC','#226158','#74D8D2','#F37732','#89EC54']
    const appUrl = process.env.APP_URL;
    // 頁面識別
    const thisPage='tips';    
    return (
    <div id='wrapper' className={inter.className}> 
        <style jsx>{`
            .tipsDetailPage .contentBox .txtBox .checkbox label input[type="checkbox"]:checked ,
            .tipsDetailPage .contentBox .tag,
            .tipsDetailPage .contentBox .txtBox .arraw
            {
                background-color: ${tagColor[0]};
                transition: 0.3s;
            }
        `}
        </style>
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
                    <div className={`imgBox ${scorllStop ? 'act' : ''}`}>
                        <div className={`fixBox ${scorllStop ? 'act' : ''}`}>
                            <div className="box">
                                <div className="tag">食</div>
                                <Image src="/images/tips01.jpg" alt="img" width={800} height={800}/>
                            </div>
                        </div>
                    </div>
                    <div className="txtBox">
                        <div className="question">
                            <div className="tag">食</div>
                            <div className="title">吃完的免洗紙餐盒，需洗完再回收嗎？</div>
                            
                            <div className="checkbox">
                                <label>
                                    <input
                                        type="checkbox"
                                        value="option1"
                                        checked={selectedOptions.includes('option1')}
                                        onChange={handleCheckboxChange}
                                    />
                                    <span>當然要洗啊～</span>
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="option2"
                                        checked={selectedOptions.includes('option2')}
                                        onChange={handleCheckboxChange}
                                    />
                                    <span>我都直接丟</span>
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="option3"
                                        checked={selectedOptions.includes('option3')}
                                        onChange={handleCheckboxChange}
                                    />
                                    <span>大概擦一下而已</span>
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        value="option4"
                                        checked={selectedOptions.includes('option4')}
                                        onChange={handleCheckboxChange}
                                    />
                                    <span>忘記了</span>
                                </label>
                            </div>

                            <div className="btn">
                                <span>送出答案</span>
                                <div className="arraw">
                                    <Image src={`${appUrl}/images/icon_arraw07.svg`} alt="arraw" width={30} height={30}/>
                                </div>
                            </div>                   
                        </div>

                        <div className="answer">
                            <div className="title">
                                <Image src={`${appUrl}/images/smirking-face.png`} alt="img" width={50} height={50}/> 你答對了嗎？
                            </div>
                            <div className="answerTxtBox">
                                <div className="answerTitle">免洗餐盒該當垃圾直接丟棄，還是洗淨回收？</div>
                                <p>記者徐葳倫：「不說還真不知道，其實這個可分解的吸管，來自台灣的公司，連它(吸管)的包裝袋，都能夠分解，包含亞馬遜、蘋果、好市多和星巴克都是主要客戶，甚至在疫情期間，台灣口罩國家隊，所送往國外的口罩包裝袋，也是這家公司的產品。」</p>
                            </div>
                            <div className="answerTxtBox">
                                <div className="answerTitle">免洗餐盒要丟一般垃圾還是資源回收？</div>
                                <p>記者徐葳倫：「不說還真不知道，其實這個可分解的吸管，來自台灣的公司，連它(吸管)的包裝袋，都能夠分解，包含亞馬遜、蘋果、好市多和星巴克都是主要客戶，甚至在疫情期間，台灣口罩國家隊，所送往國外的口罩包裝袋，也是這家公司的產品。」</p>
                            </div>

                            <div className="time">2023-08-17 <span>更新</span></div>
                        </div>

                    </div>
                </div>

                <div className="contentMore">                    
                    <div className="frameBox">
                        <div className="title">繼續看</div>
                        <div className="listBox">
                            <div className="arraw">
                                <Image src={`${appUrl}/images/icon_arraw04.svg`} alt="arraw" width={42} height={42}/>
                            </div>
                            <div className="list">
                                <ul>
                                    <li>
                                        <a href='#'>
                                            <div className="img">
                                                <Image src={`${appUrl}/images/tips01.jpg`} alt="img" width={300} height={300}/>
                                            </div>
                                            <div className="tag tagFoodColor">食</div>
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
                                            <div className="tag tagFoodColor">食</div>
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
                                            <div className="tag tagFoodColor">食</div>
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