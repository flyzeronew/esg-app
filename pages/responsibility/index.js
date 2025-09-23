import { useState, useEffect } from 'react';
import Header from '../../comps/Header/Header';
import Footer from '../../comps/Footer/Footer';
import Practice from '../../comps/responsibility/Practice';
import classNames from 'classnames/bind';
import styles from './responsibility.module.css';
import MetaTags from '@/comps/MetaTag/MetaTag';
import { usePathname } from 'next/navigation';
const cx = classNames.bind(styles);

const BrandCard = ({ appUrl, brand, index, currentPage }) => {

    return (
        <li key={index} role="brandCard">
            <a href={`${appUrl}/${currentPage}/brands/${brand.id}`}>
                <div className={cx('imgBox')}>
                    <div className={cx('img')}>
                        <img
                            src={brand.cover_img}
                            alt="img"
                            width={1072}
                            height={603}
                            loading="lazy"
                        />
                    </div>
                    <div className={cx('logoBox')}>
                        <div className={cx('rounded')}>
                            <img
                                src={`${appUrl}/images/rounded-04.svg`}
                                alt="rounded"
                                width={50}
                                height={50}
                                loading="lazy"
                            />
                        </div>
                        <div className={cx('logoFlex')}>
                            <div className={cx('logo')}>
                                <img src={brand.logo} alt="logo" layout="fill" loading="lazy" />
                            </div>
                            <div className={cx('rounded')}>
                                <img
                                    src={`${appUrl}/images/rounded-04.svg`}
                                    alt="rounded"
                                    width={50}
                                    height={50}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('txt')}>
                    <div className={cx('description')}>{brand.description}</div>
                    <img
                        src={`${appUrl}/images/icon_arraw09.svg`}
                        alt="rounded"
                        width={50}
                        height={50}
                        loading="lazy"
                    />
                </div>
            </a>
        </li>
    );
};
export default function Responsibility(props) {
    // 頁面識別
    const thisPage = 'responsibility';
    const pathName =  usePathname();
    const detailsOfPage = props.menu.find((menuItem) => menuItem.pathname === pathName);
    const ogImg = process.env.OG_IMG;
    const responsibilityData = props.responsibilityData;
    const pageMetaDetails = {
        title: detailsOfPage.title,
        keywords: "TVBS, TVBS GOOD,TVBS NEWS, TVBS ESG, ESG永續趨勢, ESG永續焦點, ESG永續發展, ESG議題",
        description: detailsOfPage.meta_description,
        author: "TVBS",
    }
    const practiceData = responsibilityData.slice(0, 3);
    const moreData = responsibilityData.slice(3);
    const brands = props.brands;
    const appUrl = process.env.APP_URL;
    const MetaTageDetails = {
        currentPage: thisPage,
        ogImg: ogImg,
        pageInfo:pageMetaDetails,
        appUrl:appUrl,

    }
    const [clicked, setClicked] = useState(false);
    // 處理點擊事件
    const handleClick = () => {
        setClicked(!clicked);
    };
    return (
        <div id="wrapper">
            <MetaTags {...MetaTageDetails} />
            <Header thisPage={thisPage} menuData={props.menu} />
            <main>
                <div className={cx('responsibilityPage')}>
                    <div className={cx('mainView')}>
                        <div className={cx('img')}>
                            <img
                                src={`${appUrl}/images/responsibility_bg01.jpg`}
                                alt="bg"
                                width={1920}
                                height={1024}
                                loading="lazy"
                            />
                        </div>
                        <div className={cx('titleBox')}>
                            <div className={cx('title')}>
                                <div className={cx('box')}>
                                    <div className={cx('rounded')}></div>
                                    <h1 className={cx('t1')}>TVBS GOOD 永續共好</h1>
                                    <div className={cx('rounded')}>
                                        <img
                                            src={`${appUrl}/images/rounded-04.svg`}
                                            alt="rounded"
                                            width={50}
                                            height={50}
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div className={cx('box')}>
                                    <div className={cx('rounded')}>
                                        <img
                                            src={`${appUrl}/images/rounded-03.svg`}
                                            alt="rounded"
                                            width={50}
                                            height={50}
                                            loading="lazy"
                                        />
                                    </div>
                                    <p style={{fontFamily:"var(--font-family-lexend)"}}>
                                        Better Future.
                                        <br />
                                        Together
                                    </p>
                                    <div className={cx('rounded')}>
                                        <img
                                            src={`${appUrl}/images/rounded-04.svg`}
                                            alt="rounded"
                                            width={50}
                                            height={50}
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('title')}>
                            {/* <h2>引領永續新視界</h2> */}
                            <div className={cx('line')}></div>
                        </div>

                        <div className={cx('mainImage')}>
                            {clicked && (
                                <div className={cx('video')}>
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/cdIQQleUB14?autoplay=1&mute=1"
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture"
                                        allowFullScreen
                                        title="TVBS GOOD 永續共好"
                                    ></iframe>
                                </div>
                            )}
                            <div className={cx('img')} onClick={handleClick}>
                                <div className={cx('playIcon')}>
                                    <img
                                        src={`${appUrl}/images/play-icon.svg`}
                                        alt="play"
                                        width={50}
                                        height={50}
                                        loading="lazy"
                                    />
                                </div>
                                <div className={cx('txt')} style={clicked ? ({position: 'relative'}) : ({position: 'absolute'})}>
                                    {/* <div className={cx('t1')}>數位永續皆卓越！TVBS總經理劉文硯<br/>再獲APEA「卓越企業領袖」</div> */}
                                </div>
                                <div className={cx('video')}>
                                    <img
                                        src="http://img.youtube.com/vi/cdIQQleUB14/maxresdefault.jpg"
                                        alt="img"
                                        width={1920}
                                        height={1080}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={cx('contxt')}>
                            <div className={cx('t1')}>
                                <div className={cx('line')}></div>
                                <p>積極倡議永續 是我們堅定的承諾</p>
                                <div className={cx('line')}></div>
                            </div>
                            <p>
                                在永續議題上，沒有人是局外人。因為永續攸關人類發展，更是決定地球存亡的關鍵！作為媒體領導品牌，我們深刻理解媒體在塑造公眾意識和影響社會行為方面，擁有巨大的影響力。TVBS新聞長期製作深度專題報導，探討聯合國17項永續發展目標
                                (SDGs)
                                議題，包括監督環境危機的「帳篷下的秘密」，檢視長照、醫療制度的「你我老之路-老病死之生路」，關注派遣勞工權益的「派遣工的正義-我不是你的免洗筷」，以及探究人生老化過程中、各種照顧困境的「大照顧時代」，都透過深入淺出的剖析，傳達環境保護及永續理念，並獲得卓越新聞獎肯定。
                            </p>
                            <p>
                                各內容品牌也都提出具體的ESG主張，例如:女人我最大節目，倡議「純淨美容Clean
                                Beauty」的觀念，在變美之餘，也不造成地球環境負擔；地球黃金線關注電動車與環保材質汽車的最新趨勢；食尚玩家提倡綠色低碳旅遊等，皆是永續觀念的「具體轉譯」，與觀眾一起培養永續識讀力。唯有讓永續成為日常，才能創造「韌性」的地球。我們深切期盼各界攜手合作，共同探索解決氣候變遷、全球暖化和再生能源等重要議題的方法，並自我期許將成為媒體界的ESG貢獻者，為實現永續發展的美好願景盡心盡力。
                            </p>
                            <p style={{ textAlign: 'right' }}>
                                聯利媒體 TVBS 總經理
                                <br />
                                永續發展委員會 主任委員  劉文硯
                            </p>
                        </div>
                        <div className={cx('reportArea')}>
                            <div className={cx('reportLogo')}>
                                <img src="images/responsibility-report-logo.svg" />
                            </div>
                            <div className={cx('reportTitle')}>永續影響力報告</div>
                            <div className={cx('reportEnTitle')}>看TVBS如何實踐永續承諾</div>
                            <div className={cx('downloadArea')}>
                                <a href="/responsibility/reports">
                                    <div className={cx('desktop', 'bar')}>
                                        <div className={cx('word')}>了解更多</div>
                                        <div className={cx('arraw')}>
                                            <img
                                                src="/images/icon_arraw02.svg"
                                                alt="arraw"
                                                width="36"
                                                height="36"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className={cx("infoGraphic")}>
                            <p>
                                TVBS在新聞專題及各節目中，長期關注聯合國「2023 永續發展目標」 (Sustainable Development Goals, SDGs) 17 項核心目標的精神與價 值。為進一步善盡永續轉譯者、倡議者的角色，我們列出「四大倡議 願景」，並分別對應 7 項 SDG 作為重點，期發揮媒體影響力，與閱聽大 眾一起努力，邁向永續共好。
                            </p>
                        </div>
                        <div className={cx('block')}>
                            <div className={cx('img')}>
                                <img
                                    className={cx('pc')}
                                    src="images/responsibility-block.svg"
                                    alt="img"
                                    loading="lazy"
                                />
                                <img
                                    className={cx('mo')}
                                    src="images/responsibility-block-mo.svg"
                                    alt="img"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className={cx('peopleBox')}>
                            <div className={cx('title')}>
                                <h2>TVBS永續倡議大使 莊開文</h2>
                                <div className={cx('line')}></div>
                            </div>
                            <div className={cx('contxt')}>
                                <p>
                                    TVBS資深主播<strong>莊開文</strong>
                                    ，擔任「TVBS永續倡議大使」，我們將從「永續、共好、愛無限」三面向積極推進ESG策略，與您攜手，共創美好的永續殿堂。
                                </p>
                            </div>

                            <div className={cx('people')}>
                                <div className={cx('img')}>
                                    <img
                                        src={`${appUrl}/images/people01.jpg`}
                                        alt="img"
                                        width={1920}
                                        height={1080}
                                        loading="lazy"
                                    />
                                </div>
                                <div className={cx('txtBox')}>
                                    <div className={cx('txt')}>
                                        我們深信，媒體的傳播力量可以撼動生命，影響一整個世代;
                                        而您的關心和投入，更是這股力量的加速器!
                                    </div>
                                    <div className={cx('small')}>- 永續倡議大使 莊開文 </div>
                                </div>
                            </div>
                            <div className={cx('line')}></div>
                            <p>
                                誠如 TVBS GOOD 的品牌識別設計，中間兩個 O
                                相連相握，便成為一個「無限大」的符號，這正是我們的核心精神：永續、共好、愛無限。面對氣候劇烈變遷、自然資源枯竭、糧食分配不均、疾病災害兵戎屢現等嚴酷考驗，我們需要更堅定的意志、更多元的學習、更包容的態度、更具體的作為。
                            </p>
                            <p>
                                TVBS 在新聞專題及各節目中，長期關注聯合國「 2030 永續發展目標
                                」( Sustainable Development Goals, SDGs ) 17
                                項核心目標的精神與價值，為進一步善盡永續轉譯者、倡議者的角色，我們列出「四大倡議願景」，並分別對應
                                7 項 SDG
                                作為重點，期待在永續議題上，成為臺灣的推手，做世界的通道，為滋養我們的地球，盡心盡力。
                            </p>

                        </div>

                        <div className={cx('brand')}>
                            <div className={cx('title')}>
                                <h2>TVBS永續品牌</h2>
                                <div className={cx('line')}></div>
                            </div>
                            <p>
                                根據英國牛津大學調查認證:
                                TVBS連續7年獲選為最受信賴商業電視台，身為臺灣媒體領導品牌，我們秉持「真實」（Truth）、「信賴」（Trust）、「科技」（Technology）三大核心價值，發展出各大永續品牌。包括:倡議「純淨美容clean
                                Beauty」觀念的「女人我最大」，關注電動車與環保材質汽車最新趨勢的「地球黃金線」，提倡綠色低碳旅遊的「食尚玩家」，關懷健康生活的「健康
                                2.0」，我們用觀眾能夠接受和理解的方式，將永續觀念「轉譯」為更親和易懂的內容。
                            </p>
                            <div className={cx('listBox')}>
                                <div className={cx('list')}>
                                    <ul aria-label="brandCardsList">
                                        {brands && brands.length > 0
                                            ? brands.map((item, index) => (
                                                <BrandCard key={index} appUrl={appUrl} brand={item} index={index} currentPage={thisPage}></BrandCard>
                                            ))
                                            : ''}
                                    </ul>
                                </div>
                            </div>
                            <div className={cx('title', 's1')}>
                                <h2>領航ESG媒體 實踐永續承諾</h2>
                                <div className={cx('line')}></div>
                            </div>

                            <p>
                                永續不是口號，而是關乎人類生存的關鍵字。
                                <br />
                                <br />
                                我們希望透過永續領航者的角色，號召更多媒體、民眾能一起加入關注永續議題的行列，讓永續成為一門顯學。
                                <br />
                                <br />
                                除了對台灣這片土地的關懷，TVBS未來也將跨足國際，發揮媒體影響力，期待在永續議題上，成為臺灣的推手，做世界的通道，為滋養我們的地球，盡心盡力。
                            </p>
                            {/* 輪播部分 */}
                            {practiceData && practiceData.length > 0 ? (
                                <Practice practiceData={practiceData} />
                            ) : (
                                ''
                            )}
                            {/* 輪播部分 ed*/}
                            {moreData && moreData.length > 0 ? (
                                <div className={cx('practiceMore')}>
                                    <div className={cx('title', 's1')}>更多TVBS永續實踐力</div>
                                    <div className={cx('list')}>
                                        {moreData.map((item, index) => (
                                            <a key={index} href={item.url}>
                                                <div className={cx('img')}>
                                                    <img
                                                        src={item.cover_img}
                                                        alt="img"
                                                        width={1072}
                                                        height={603}
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className={cx('txtBox')}>
                                                    <div className={cx('txt')}>
                                                        <p>{item.title}</p>
                                                        <div className={cx('arraw')}>
                                                            <img
                                                                src={`${appUrl}/images/icon_arraw04.svg`}
                                                                alt="arraw"
                                                                width={42}
                                                                height={42}
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <div className={cx('footerLine', 'color1')}>
                <div className={cx('box')}></div>
            </div>
            <Footer act="color1" />
        </div>
    );
}
import { fetchPageData } from '@/services/cms/fetchPageData';

export async function getServerSideProps(context) {
    try {
        // 設定 response headers
        const { res } = context;
        res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=120');
        const { menu, extraData } = await fetchPageData({
            extraApiPaths: [
                `/api/responsibility-${process.env.APP_ENV === 'production' ? 'prd' : 'dev'}`,
                '/api/brands',
            ],
        });
        const [responsibilityData, brands] = extraData;
        return {
            props: {
                menu,
                responsibilityData,
                brands,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            notFound: true,
        };
    }
}
