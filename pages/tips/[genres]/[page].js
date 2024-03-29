import DetailMainView from '../../../comps/tips/DetailMainView'
import Footer from '../../../comps/Footer'
import Head from 'next/head'
import Header from '../../../comps/Header'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Swal from 'sweetalert2'
import { useState ,useEffect } from 'react'
import { useRouter } from 'next/router'


const inter = Inter({ subsets: ['latin'] })
export default function page(props) {    
    const router = useRouter();
    const tipId = router.query.page - 1;    
    const appUrl = process.env.APP_URL;
    const tipsData = props.tipsData[tipId];
    const genreEnName = tipsData.tip_genre.en_name;
    // random 繼續看區塊
    let randomElements = props.randomElements;
    // 頁面識別
    const thisPage='tips';
    const [selectedOptions, setSelectedOptions] = useState([]);    
    const [scorllStop, setScorllStop] = useState(false);

    //送出答案錨點程式
    const scrollToAnswer = () => {
        if(selectedOptions.length === 0){
            Swal.fire({
                title: "提醒",
                text: "尚未選擇答案",
                icon: "warning"
              });
            return;
        }
        const answerTop = document.querySelector('.tipsDetailPage .contentBox .answer').offsetTop; 
        const headerHeight = document.querySelector('header').offsetHeight;
        
        window.scrollTo({
            top: answerTop - headerHeight,
            behavior: 'smooth',
        });
    }; 
    
    // 選單
    const optionArr = ['option1','option2','option3','option4'];
    const answerArr = ['answer1','answer2','answer3','answer4'];
    //選單程式
    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        if (selectedOptions.includes(value)) {
            setSelectedOptions(selectedOptions.filter(option => option !== value));
        } else {
            setSelectedOptions([...selectedOptions, value]);
        }
    };

    // 日期轉換
    const formattedDate = (date) => {
        const originalTime = new Date(date);
        const isoDateString = originalTime.toISOString();
        const formattedDate = isoDateString.substring(0, 10);
        return formattedDate;
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
    
    const tagColor =[
        {
            'bgColor':'#FFC400',
            'txtColor':'#333333',
        },
        {
            'bgColor':'#E2F6F9',
            'txtColor':'#333333',
        },
        {
            'bgColor':'#D1FFE0',
            'txtColor':'#333333',
        },
        {
            'bgColor':'#00BAFF',
            'txtColor':'#333333',
        },
        {
            'bgColor':'#00422C',
            'txtColor':'#fff',
        },
        {
            'bgColor':'#001C48',
            'txtColor':'#fff',
        },
    ];

    const tipsGenresArr = [
        'tagFoodColor',
        'tagClothingColor',
        'tagHousingColor',
        'tagTransportColor',
        'tagEducationColor',
        'tagEntertainmentColor',
    ];

    return (
    <div id='wrapper' className={inter.className}> 
        <style jsx global>{`
            .tipsDetailPage .contentBox .txtBox .checkbox label input[type="checkbox"]:checked ,
            .tipsDetailPage .contentBox .tag,
            .tipsDetailPage .contentBox .txtBox .arraw,
            .tipsDetailPage .slick-dots li.slick-active button:before          
            {
                background-color: ${tagColor[tipsData.tip_genre.id-1].bgColor};
                color:${tagColor[tipsData.tip_genre.id-1].txtColor};
                transition: 0.3s;
            }
            .tipsDetailPage .contentBox .txtBox .checkbox label input[type="checkbox"]:checked::before {
                color: ${tagColor[tipsData.tip_genre.id-1].txtColor};
            }
        `}
        </style>
        <Head>
            <title>{`${tipsData.title} - TVBS ESG專區`}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="Keywords" content={tipsData.keywords} />
            <meta name="description" content={tipsData.description} /> 
            <meta name="author" content="TVBS" />
            <meta name="copyright" content="TVBS" />
            <meta name="application-name" content="TVBS" />
            <meta name="URL" content={`${appUrl}${tipsData.url}`} />
            <meta name="medium" content="mult" />
            <meta name="robots" content="INDEX,FOLLOW"/>
            <link rel="canonical" href={`${appUrl}${tipsData.url}`} />
        </Head>
        <Header thisPage={thisPage} menuData={props.menu}/>
        <main>
            <div className="tipsDetailPage">
                <div className="contentBox">
                    <div className={`imgBox ${scorllStop ? 'act' : ''}`}>
                        <div className={`fixBox ${scorllStop ? 'act' : ''}`}>
                            <DetailMainView data={tipsData} />
                        </div>
                    </div>
                    <div className="txtBox">
                        <div className="question">
                            <div className="tag">{tipsData.tip_genre.name}</div>
                            <div className="title">{tipsData.title}</div>
                            {tipsData? 
                            <div className="checkbox">
                                {
                                optionArr.map((item, index) => (
                                     tipsData[answerArr[index]] !== null && tipsData[answerArr[index]].trim() !== ''
                                     ?
                                     <label>
                                        <input
                                            type="checkbox"
                                            value={optionArr[index]}
                                            checked={selectedOptions.includes(optionArr[index])}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span>{tipsData[answerArr[index]]}</span>
                                    </label>
                                     :''
                                    ))
                                }
                            </div>
                            :''}
                            <div className="btn" onClick={scrollToAnswer}>
                                <span>送出答案</span>
                                <div className="arraw">↓</div>
                            </div>                   
                        </div>

                        <div className="answer">
                            <div className="title">
                                <img src={`${appUrl}/images/smirking-face.png`} alt="img" width={50} height={50}/> 你答對了嗎？
                            </div>
                            <div className="line"></div>
                            <div  className="tipsContent" dangerouslySetInnerHTML={{ __html: tipsData.content }} />
                            <div className="time">{formattedDate(tipsData.updated_at)}<span> 更新</span></div>
                            {/* <div className="time">2023-08-17 <span>更新</span></div> */}
                        </div>

                    </div>
                </div>

                <div className="contentMore">                    
                    <div className="frameBox">
                        <div className="title">繼續看</div>
                        <div className="listBox">
                            {/* <div className="arraw">
                            <img src={`${appUrl}/images/icon_arraw04.svg`} alt="arraw" width={42} height={42}/>
                            </div> */}
                            <div className="list">
                                <ul>
                                    {randomElements?
                                    randomElements.map((item, index) => (
                                    <li>
                                        <a href={item.url}>
                                            <div className="img">
                                                <img src={item.img} alt="img" width={300} height={300} loading='lazy'/>
                                            </div>
                                            <div className={`tag ${tipsGenresArr[item.tip_genre.id-1]}`}>{item.tip_genre.name}</div>
                                            <div className="txtBox">
                                                <div className='rounded'>
                                                    <img src={`${appUrl}/images/rounded-05.svg`} alt="rounded" width={50} height={50} loading='lazy'/>
                                                </div>
                                                <div className='txtFlex'>
                                                    <div className='txt'>
                                                        <p>{item.title}</p>
                                                    </div>
                                                    <div className='rounded'>
                                                        <img src={`${appUrl}/images/rounded-05.svg`} alt="rounded" width={50} height={50} loading='lazy'/>
                                                    </div>
                                                </div>                                   
                                            </div>
                                        </a>
                                    </li>
                                    ))
                                    :""}
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
    const { params } = context;
    const { page } = params;
    const menuUrl = new URL('/api/menu', process.env.APP_URL);
    const menuRes = await fetch(menuUrl);
    const menu = await menuRes.json();

    // list
    const tipsListUrl = new URL('/api/tips-list', process.env.APP_URL);
    const tipsListRes = await fetch(tipsListUrl);    
    let tipsListData = await tipsListRes.json();
    // 處理繼續看random資料
    tipsListData = tipsListData.filter(item => item.id !== parseInt(page));
    // 每次從原始 array 中隨機取出三個元素
    function getRandomElements(array, count) {
        const shuffled = array.sort(() => Math.random()-0.5); // 隨機排序
        return shuffled.slice(0, count); // 取出前 count 個元素
    }
    const randomElements = getRandomElements(tipsListData, 3);

    // 小撇步資料
    const tipsUrl = new URL('/api/tips-detail', process.env.APP_URL);
    const tipsRes = await fetch(tipsUrl);    
    const tipsData = await tipsRes.json();
    
    return {
        props: {
            menu,randomElements,tipsData
        },
    };
}