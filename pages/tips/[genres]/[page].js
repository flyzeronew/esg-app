import { useState ,useEffect } from 'react'
import { Inter } from 'next/font/google'
import Swal from 'sweetalert2'
import Head from 'next/head'
import Header from '../../../comps/Header'
import Footer from '../../../comps/Footer'
import DetailMainView from '../../../comps/tips/DetailMainView'

const inter = Inter({ subsets: ['latin'] })
export default function page(props) {
    // 頁面識別
    const thisPage='tips';
    const ogImg = process.env.OG_IMG;
    const isIOS = props.isIOS;   
    const appUrl = process.env.APP_URL;
    const tipsData = props.tipsData.tip;
    const colorMapping = props.colorMapping;
    const getEnName =  props.getEnName;
    const thisPageGenreUri =`${appUrl}/${thisPage}/${getEnName}`;
    const thisPageUri =`${appUrl}/${thisPage}`;
    // random 繼續看區塊
    const keepReading = props.tipsData.more;
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

    return (
    <div id='wrapper' className={inter.className}>        
        <style jsx global>{`
            .tipsDetailPage .contentBox .txtBox .checkbox label input[type="checkbox"]:checked ,
            .tipsDetailPage .contentBox .tag,
            .tipsDetailPage .contentBox .txtBox .arraw,
            .tipsDetailPage .slick-dots li.slick-active button:before          
            {
                background-color: ${colorMapping[tipsData.genre-1].bgColor};
                color:${colorMapping[tipsData.genre-1].txtColor};
                transition: 0.3s;
            }
            .tipsDetailPage .contentBox .txtBox .checkbox label input[type="checkbox"]:checked::before {
                color: ${colorMapping[tipsData.genre-1].txtColor};
            }
        `}
        </style>
        <Head>
            <title>{`${tipsData.title} - TVBS ESG專區`}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="Keywords" content='TVBS,TVBS GOOD,TVBS ESG,企業社會責任,ESG永續發展,ESG指標,ESG企業,ESG議題' />
            <meta name="description" content='ESG企業永續治理，是企業在環境、社會、公司治理三個層面，採取永續發展的經營方式。ESG企業永續治理的內涵在於企業不僅要追求財務獲利，更要兼顧環境保護、社會責任與公司治理，才能創造永續發展的價值。' /> 
            <meta name="author" content="TVBS" />
            <meta name="copyright" content="TVBS" />
            <meta name="application-name" content="TVBS" />
            <meta name="URL" content={`${thisPageGenreUri}/${tipsData.id}`} />
            <meta name="medium" content="mult" />
            <meta name="robots" content="INDEX,FOLLOW"/>
            <meta property="og:image" content={ogImg} />
            <link rel="canonical" href={`${thisPageGenreUri}/${tipsData.id}`} />
        </Head>
        <Header thisPage={thisPage} menuData={props.menu}/>
        <main>
            <div className="tipsDetailPage">
                <div className="contentBox">
                    <div className={`imgBox ${scorllStop ? 'act' : ''}`}>
                        <div className={`fixBox ${scorllStop ? 'act' : ''}`}>
                                <DetailMainView data={tipsData} tag={colorMapping[tipsData.genre-1].genre} />
                        </div>
                    </div>
                    <div className="txtBox">
                        <div className="question">
                            <div className="tag">{colorMapping[tipsData.genre-1].genre}</div>
                            <h1 className="title">{tipsData.title}</h1>
                            {tipsData? 
                            <div className="checkbox">
                                { optionArr.map((item, index) => (
                                    tipsData[answerArr[index]] !== null && tipsData[answerArr[index]].trim() !== ''
                                    ?
                                    <label key={index}>
                                        <div className="inputArea">
                                            <input
                                                className={isIOS ? 'ios-only' : ''}
                                                type="checkbox"
                                                value={optionArr[index]}
                                                checked={selectedOptions.includes(optionArr[index])}
                                                onChange={handleCheckboxChange}
                                            />
                                        </div>
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
                            {selectedOptions.length > 0 ? 
                                <>
                                    <div className="title">
                                        <img src={`${appUrl}/images/smirking-face.png`} alt="img" width={50} height={50}/> 你答對了嗎？
                                    </div>
                                    <div className="line"></div>
                                    <div  className="tipsContent" dangerouslySetInnerHTML={{ __html: tipsData.content }} />
                                    <div className="time">{formattedDate(tipsData.updated_at)}<span> 更新</span></div>
                                </>
                            : ''}
                        </div>

                    </div>
                </div>

                <div className="contentMore">
                    <div className="title">繼續看</div>
                    <div className="frameBox">                        
                        <div className="listBox">
                            <div className="list">
                                <ul>
                                    { keepReading ? keepReading.map((item, index) => (
                                            <li key={index}>
                                                <a href={`${thisPageUri}/${colorMapping[item.genre-1].en_name}/${item.id}`}>
                                                    <div className="img">
                                                        <img src={item.tip_galleries[0].image_url} alt="img" width={300} height={300} loading='lazy'/>
                                                    </div>
                                                    <div className={`tag ${colorMapping[item.genre-1].color}`}>{colorMapping[item.genre-1].genre}</div>
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
                                    )) : "" }
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
    const userAgent = context.req.headers['user-agent'];
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);
    const { page } = params;

    const menuUrl = new URL('/api/menu', process.env.APP_URL);
    const menuRes = await fetch(menuUrl);
    const menu = await menuRes.json();

    // submenu
    const submenuUrl = new URL('/api/tips-genres', process.env.APP_URL);
    const submenuRes = await fetch(submenuUrl);
    const submenuData = await submenuRes.json();

    // 顏色配對
    const colorMappingUrl = new URL('/api/tips-color-mapping', process.env.APP_URL);
    const colorMappingRes = await fetch(colorMappingUrl);
    const colorMapping = await colorMappingRes.json();

    // 小撇步內頁資料
    const tipsUrl = new URL(`/api/tips/${page}`, process.env.API_URL);
    const tipsRes = await fetch(tipsUrl);

    let tipsData = '';
    let getEnName = '';
      
    //判斷撈不到東西直接跳404
    if(tipsRes.status !== 404){
        tipsData = await tipsRes.json();
        getEnName = submenuData.filter(item => item.id == tipsData.tip.genre)[0].en_name;
    }else{
        return {
            notFound: true,
        };
    }
    
    return {
        props: {
            menu, tipsData, isIOS, colorMapping, submenuData, getEnName
        },
    };
}