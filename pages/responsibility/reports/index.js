import Head from 'next/head';
import Header from './../../../comps/Header/Header';
import Footer from './../../../comps/Footer/Footer';
import styles from './report.module.css';
import classNames from 'classnames/bind';
import ArrowRight from '@/comps/svgs/ArrowRight';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { extractDetailsFromSub } from '@/util/helpers';

export default function Responsibility(props) {
  // 頁面識別
  const thisPage = 'responsibility';
  const cx = classNames.bind(styles);
  const ogImg = process.env.OG_IMG;
  const router = useRouter();
  const staticPath = process.env.NEXT_PUBLIC_STATIC_FILES;
  const responsibilityData = props.responsibilityData;
  const moreData = responsibilityData.slice(3);
  const reportsPageDetails = extractDetailsFromSub(props.menu, router.asPath);
  const appUrl = process.env.APP_URL;
  //return <pre>{JSON.stringify(reportsPageDetails, null, 2)}</pre>;
  return (
    <div id="wrapper" >
      <Head>
        <title>{reportsPageDetails.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="Keywords"
          content="TVBS,TVBS GOOD,ESG,永續,永續責任"
        />
        <meta name="description" content={reportsPageDetails.meta_description}/>
        <meta name="author" content="TVBS" />
        <meta name="copyright" content="TVBS" />
        <meta name="application-name" content="TVBS" />
        <meta name="URL" content={`${appUrl}${reportsPageDetails.pathname}`} />
        <meta name="medium" content="mult" />
        <meta name="robots" content="index,follow" />
        <meta property="og:image" content={ogImg} />
        <link rel="canonical" href={`${appUrl}${reportsPageDetails.pathname}`} />
      </Head>
      <Header thisPage={thisPage} menuData={props.menu} />
      <main >
        <div className={cx("reportPage")}>
          <div className={cx("mainView")}>
            <div className={cx("img")}>
              <img
                src={`/images/reportPage_bg01.jpg`}
                alt="TVBS-永續影響力報告-永續責任-esg"
                width={1920}
                height={722}
                loading="lazy"
              />

            </div>
            <div className={cx("titleBox")} >
              <div className={cx("title")} >
                <div className={cx("box")} >
                  <div className={cx("rounded")} ></div>
                  <h1 className={cx("t1")} >讓我們一起永續啟航</h1>
                  <div className={cx("rounded")} >
                    <Image
                      src={`/images/rounded-04.svg`}
                      alt="rounded"
                      width={50}
                      height={50}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className={cx("box")} >
                  <div className={cx("rounded")} >
                    <Image
                      src={`/images/rounded-03.svg`}
                      alt="rounded"
                      width={50}
                      height={50}
                      loading="lazy"
                    />
                  </div>
                  <p style={{fontFamily:"var(--font-family-lexend)"}}>Join Us on a Green Journey</p>
                  <div className={cx("rounded")}>
                    <Image
                      src={`/images/rounded-04.svg`}
                      alt="rounded"
                      width={50}
                      height={50}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={cx("titleBoxMobile")} >
              <div className={cx("title")} >
                <div className={cx("box")} >
                <div className={cx("rounded")} ></div>
                  <h1 className={cx("t1")} >讓我們一起永續啟航 </h1>
                  <div className={cx("rounded")} ></div>
                </div>
                <div className={cx("box")} >
                  <div className={cx("rounded")} >
                    <img
                      src={`/images/rounded-03.svg`}
                      alt="rounded"
                      width={50}
                      height={50}
                      loading="lazy"
                    />
                  </div>
                  <p style={{fontFamily:"var(--font-family-lexend)"}}>Join Us on a <br></br> Green Journey </p>
                  <div className={cx("rounded")}>
                    <img
                      src={`/images/rounded-04.svg`}
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
          <div className={cx("content")}>
            <div className={cx("contxt")}>
              <div className={cx("commitmentTitle")}>
                <div className={cx("line")}></div>
                <h3>積極倡議永續<br></br>是我們堅定的承諾</h3>
                <div className={cx("line")}></div>
              </div>
              <p>
                積極倡議永續是我們堅定的承諾，在永續議題上，沒有人是局外人。作為媒體領導品牌，我們深刻理解媒體在塑造公眾意識和影響社會行為方面，擁有巨大的影響力。
              </p>
              <p>
              我們深信，唯有讓永續成為日常，才能創造「韌性」的地球。我們深切期盼各界攜手合作，共同探索解決氣候變遷、全球暖化和再生能源等重要議題的方法，並自我期許將成為媒體界的 ESG 貢獻者，為實現永續發展的美好願景盡心盡力。
              </p>
            </div>
            {/* Report card */}
            <div className={cx("reportCard")}>
                <div className={cx("reportArea")} >
                    <div className={cx("reportContent")}>
                        <div className={cx("content")}>
                            <div className={cx("mainTitle")}>
                                <span>2025 1-4 月永續影響力報告</span>
                            </div>
                            {/* <div className={cx("subTitle")}>
                                <span>
                                </span>
                            </div> */}
                        </div>
                        <div className={cx("downloadArea")} >
                            <a href="https://report.esg.tvbs.com.tw/2025jantoapr" target="_blank" rel="noopener noreferrer">
                                <div className={cx("arraw")}>
                                    <ArrowRight></ArrowRight>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("line")}></div>
            <div className={cx('content')}>
            <div className={cx("contxt")}>
              <div className={cx("reportsTitle")}>
                <p>歷年永續報告</p>
                <div className={cx("list")}>
                  <a href={`${appUrl}/responsibility/reports/annual/2024annual`} target="_blank" rel="noopener noreferrer">2024 年度永續影響力報告</a>
                  <a className={cx("desktopPdf")} href={staticPath+"/reports/quaterly/2024/永續影響報告_q2_Desktop.pdf"} target="_blank" rel="noopener noreferrer">2024 5-8 月永續影響力報告</a>
                  <a className={cx("mobilePdf")} href={staticPath+"/reports/quaterly/2024/永續報告_q2_mobile .pdf"} target="_blank" rel="noopener noreferrer">2024 5-8 月永續影響力報告</a>
                  <a className={cx("desktopPdf")} href={staticPath+"/reports/quaterly/2024/永續影響力報告 - 桌機版q1_desktop.pdf"} target="_blank" rel="noopener noreferrer">2024 1-4 月永續影響力報告</a>
                  <a className={cx("mobilePdf")} href={staticPath+"/reports/quaterly/2024/永續影響力報告 - 手機版q1_mobile.pdf"} target="_blank" rel="noopener noreferrer">2024 1-4 月永續影響力報告</a>
                </div>
                <div className={cx("line")}></div>
              </div>
              <p className={cx("reportsDescription")}>
                TVBS 深信媒體肩負著重大的社會責任，期待與各界攜手合作，共同推動永續發展。我們期許成為永續發展的倡議者與引領者，為實現永續美好的未來貢獻心力。
              </p>
            </div>

            </div>
            {/* Report card  Ends*/}
            <div className={cx("brand")} >
              {moreData && moreData.length > 0 ? (
                <div className={cx("practiceMore")} >
                  <div className={cx("title","s1")} >更多TVBS永續實踐力</div>
                  <div className={cx("list")} >
                    {moreData.map((item, index) => (
                      <a key={index} href={item.url}>
                        <div className={cx("img")} >
                          <img
                            src={item.cover_img}
                            alt="img"
                            width={1072}
                            height={603}
                            loading="lazy"
                          />
                        </div>
                        <div className={cx("txtBox")} >
                          <div className={cx("txt")} >
                            <p>{item.title}</p>
                            <div className={cx("arraw")} >
                              <img
                                src={`/images/icon_arraw04.svg`}
                                alt="arraw"
                                width={100}
                                height={100}
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
      <div className={cx("footerLine color1")} >
        <div className={cx("box")} ></div>
      </div>
      <Footer act="color1" />
    </div>
  );
}

import { fetchPageData } from '@/services/cms/fetchPageData';

export async function getServerSideProps(context) {
  try {
    const { res } = context;
    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=120');
    const { menu, extraData } = await fetchPageData({
      extraApiPaths: [
        `/api/responsibility-${process.env.APP_ENV === 'production' ? 'prd' : 'dev'}`,
      ]
    });
    const [responsibilityData] = extraData;
    return {
      props: {
        menu,
        responsibilityData,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
        notFound: true,
    };
  }
}
