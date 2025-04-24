import { useState ,useEffect } from 'react'
import Swal from 'sweetalert2'
import Head from 'next/head'
import Header from '../../../comps/Header/Header'
import Footer from '../../../comps/Footer/Footer'
import DetailMainView from './../../../comps/tips/detailedMainView/DetailMainView'
import styles from './[page].module.css';
import classNames from 'classnames/bind';
import { genericPageService } from '@/services/cms/apisCMS';

const cx = classNames.bind(styles);
export default function Page(props) {
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
    
    const themeValues = {
        bgColor: colorMapping[tipsData.genre-1].bgColor,
        color:colorMapping[tipsData.genre-1].txtColor,
        classNamesGenre:colorMapping[tipsData.genre-1].color
    }
    const scrollToAnswer = () => {
        if(selectedOptions.length === 0){
            Swal.fire({
                title: "提醒",
                text: "尚未選擇答案",
                icon: "warning"
            });
            return;
        }
        const answerTop = document.querySelector("." + cx('answer')).offsetTop; 
        const headerHeight = 100;        
        window.scrollTo({
            top: answerTop - headerHeight,
            behavior: 'smooth',
        });
    }; 
    
    // 選單
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
        const contentMore = document.querySelector("." + cx('contentMore'));  
        // const headerHeight = document.querySelector("." + cx('header')).offsetHeight;
        const headerHeight = 100;
        const imgBoxHeight = document.querySelector("." +  cx('fixBox')).offsetHeight;
        const handleScroll = () => {
            if (window.scrollY + 100 + imgBoxHeight > contentMore.offsetTop) {
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
    <div id='wrapper'>        
       
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
            <div className={cx("tipsDetailPage")}>
                <div className={cx("contentBox")}>
                    <div className={cx('imgBox', scorllStop ? 'act' : '' )}>
                        <div className={cx('fixBox', scorllStop ? 'act' : '' )}>
                                <DetailMainView data={tipsData} tag={colorMapping[tipsData.genre-1].genre} themeValues={"tagFoodColor"} />
                        </div>
                    </div>
                    {(tipsData?.answers.length > 0) && <div className={cx("txtBox")}>
                        <div className={cx("question")}>
                            <div className={cx("tag")}>{colorMapping[tipsData.genre-1].genre}</div>
                            <h1 className={cx("title")}>{tipsData.title}</h1>
                            { tipsData? 
                            <div className={cx("checkbox")}>
                                { tipsData.answers.map((answer, index) => (
                                    answer !== null && answer.trim() !== ''
                                    ?
                                    <label key={index}>
                                        {/* <div className={cx(themeValues.classNamesGenre)}></div> */}
                                        <div>
                                            <input
                                                className={cx(isIOS ? 'ios-only' : '')}
                                                type="checkbox"
                                                value={index}
                                                onChange={handleCheckboxChange}
                                            />
                                        </div>
                                        <span className={cx("answerText")}>{answer}</span>
                                    </label>
                                    :''
                                    ))
                                }
                            </div>
                            :''}
                            <div className={cx("btn")} onClick={scrollToAnswer} >
                                <span>送出答案</span>
                                {/* <div className={cx("arraw")} style={{backgroundColor:themeValues.bgColor,color:themeValues.color}}>↓</div> */}
                                <div className={cx("arraw")}>↓</div>
                            </div>                   
                        </div>
                        {/* //this for question with answers */}
                        <div className={cx("answer", 0 === selectedOptions.length  ? "no" : "")}>
                            {selectedOptions.length > 0 ? 
                                <>
                                    <div className={cx("title")}>
                                        <img src={`${appUrl}/images/smirking-face.png`} alt="img" width={50} height={50}/> 你答對了嗎？
                                    </div>
                                    <div className={cx("line")}></div>
                                    <div  className={cx("tipsContent")} dangerouslySetInnerHTML={{ __html: tipsData.content }} />
                                    <div className={cx("time")}>{formattedDate(tipsData.updated_at)}<span> 更新</span></div>
                                </>
                            : ''}
                        </div>
                    </div>}
                  { tipsData?.answers.length === 0 &&  <div className={cx("txtBox")}>
                        <div className={cx("question")}>
                            <div className={cx("tag")}>{colorMapping[tipsData.genre-1].genre}</div>
                            <h1 className={cx("title")}>{tipsData.title}</h1>
                        </div>
                         {/* wihout any questions Only answers displayed  */}
                         <div className={cx("onlyanswer")}>
                            <div  className={cx("onlyAnswerContent")} dangerouslySetInnerHTML={{ __html: tipsData.content }} />
                            <div className={cx("time")}>{formattedDate(tipsData.updated_at)}<span> 更新</span></div>
                        </div>

                    </div>}
                </div>

                <div className={cx("contentMore")}>
                    <div className={cx("title")}>繼續看</div>
                    <div className={cx("frameBox")}>                        
                        <div className={cx("listBox")}>
                            <div className={cx("list")}>
                                <ul>
                                    { keepReading ? keepReading.map((item, index) => (
                                            <li key={index}>
                                                <a href={`${thisPageUri}/${colorMapping[item.genre-1].en_name}/${item.id}`}>
                                                    <div className={cx("img")}>
                                                        <img src={item.tip_galleries[0].image_url} alt="img" width={300} height={300} loading='lazy'/>
                                                    </div>
                                                    <div className={`tag ${colorMapping[item.genre-1].color}`}>{colorMapping[item.genre-1].genre}</div>
                                                    <div className={cx("txtBox")}>
                                                        <div className={cx("rounded")}>
                                                            <img src={`${appUrl}/images/rounded-05.svg`} alt="rounded" width={50} height={50} loading='lazy'/>
                                                        </div>
                                                        <div className={cx("txtFlex")}>
                                                            <div className={cx("txt")}>
                                                                <p>{item.title}</p>
                                                            </div>
                                                            <div className={cx("rounded")}>
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
        <div className={cx("footerLine","color1")}>
            <div className={cx("box")}></div>
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

    const menu =  await genericPageService.getMenu();

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