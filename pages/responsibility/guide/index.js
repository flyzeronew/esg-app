import Head from 'next/head';
import Header from './../../../comps/Header/Header';
import Footer from './../../../comps/Footer/Footer';
import styles from './guide.module.css';
import classNames from 'classnames/bind';
import ArrowRight from '@/comps/svgs/ArrowRight'; 
import Image from 'next/image';
import { useRouter } from 'next/router'
import { genericPageService } from '@/services/cms/apisCMS';
import { extractDetailsFromSub } from '@/util/helpers';

const cx = classNames.bind(styles);

export default function Responsibility(props) {
  // 頁面識別
  const thisPage = 'responsibility';  
  const router = useRouter();
  const staticPath = process.env.NEXT_PUBLIC_STATIC_FILES;
  const ogImg = `${staticPath}/esg_pics/TVBSGOOD_og_image.png`;
  const responsibilityData = props.responsibilityData;
  const moreData = responsibilityData.slice(3);
  const guidePdfList = props.guides;
  const guidePageDetails = extractDetailsFromSub(props.menu, router.asPath);
  const appUrl = process.env.APP_URL;

  return (
    <div id="wrapper" >
      <Head>
        <title>{guidePageDetails.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="Keywords"
          content="TVBS,TVBS GOOD,ESG,永續,永續責任"
        />
        <meta name="description" content={guidePageDetails.meta_description}/>
        <meta name="author" content="TVBS" />
        <meta name="copyright" content="TVBS" />
        <meta name="application-name" content="TVBS" />
        <meta name="URL" content={`${appUrl}${guidePageDetails.pathname}`} />
        <meta name="medium" content="mult" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content={guidePageDetails.title} />
        <meta property="og:image" content={ogImg} />
        <link rel="canonical" href={`${appUrl}${guidePageDetails.pathname}`} />
      </Head>
      <Header thisPage={thisPage} menuData={props.menu} />
      <main >
        <div className={cx("reportPage")}>
          <div className={cx("mainView")}>
            <div className={cx("img")}>
              <img
                src={`/images/guidePage_bg01.jpg`}
                alt="TVBS-永續e指南-永續責任-esg"
                width={1920}
                height={722}
                loading="lazy"
              />
              
            </div>
            <div className={cx("titleBox")} >
              <div className={cx("title")} >
                <div className={cx("box")} >
                  <div className={cx("rounded")} ></div>
                  <h1 className={cx("t1")} >讓永續成為你我日常</h1>
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
                  <p style={{fontFamily:"var(--font-family-lexend)"}}>Let's go green, every day</p>
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
                  <h1 className={cx("t1")} >讓永續成為你我日常</h1>
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
                  <p style={{fontFamily:"var(--font-family-lexend)"}}>Let's go green,<br></br>every day</p>
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
                <h3>用有意識生活創造<br></br>永續發展的未來</h3>
                <div className={cx("line")}></div>
              </div>
              <p>
                永續不僅是一個理念，更是在生活中的實踐。為了實現永續發展，TVBS 致力於打造友善環境與職場的工作環境，藉由建立企業內部的永續文化，通過建立企業內部的串連，我們希望每一位員工能提升工作幸福感及歸屬感、增強專業技能，還有對身心健康的關注。
              </p>
              <p>
                TVBS 定期推出「永續 E 指南」分享公司推動的永續作為，讓大家激盪不同的想法。此外，透過舉辦活動、培訓課程及工作坊等，幫助員工提升對永續議題的理解，並激勵員工提出創新的解決方案。從節能減碳到多元共融的職場管理，每一項小小的改變都在推動公司朝著對環境友善的未來邁進。我們相信，只有當每個人都成為這場變革的一部分時，才能真正實現企業內部全面的永續轉型，因此我們邀請所有員工加入這場旅程，一起維護地球及社會未來。
              </p>
            </div>
            {/* Report card */}
            {guidePdfList && guidePdfList.length > 0 ? (
                <>
                  <div className={cx("reportCard")}>
                      <div className={cx("reportArea")} 
                        style={{ 
                          background: `url(${guidePdfList[0].cover_img_url}) no-repeat center center`,
                          backgroundSize: 'cover'
                        }}
                      >
                          <div className={cx("reportContent")}>
                              <div className={cx("content")}>
                                  <div className={cx("mainTitle")}>
                                      <span>{guidePdfList[0].title}</span>
                                      </div>
                                  <div className={cx("subTitle")}>
                                      <span>
                                        {guidePdfList[0].subtitle}
                                      </span>
                                  </div>
                              </div>
                              <div className={cx("downloadArea")} >
                                  <a href={guidePdfList[0].pdf_url} target="_blank">
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
                      {guidePdfList && guidePdfList.length > 1 ?
                          <div className={cx("reportsTitle")}>
                              <p>更多e指南報告</p>
                              <div className={cx("list")}>
                                  {guidePdfList.map((item, index) => (
                                      1 <= index ? (
                                      <a key={index} href={item.pdf_url} target="_blank" >{item.title}</a>
                                      ) : ''
                                    ))
                                  }
                              </div>
                              <div className={cx("line")}></div>
                          </div>
                          : ''
                        }
                      <p className={cx("reportsDescription")}>
                        TVBS 陪伴大家走入永續生活，每個人的微小改變，都有助於保護我們的地球，為後代子孫創造一個更美好的世界。
                      </p>
                    </div>
                  </div>                  
                </>
              ) : ''
            }
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

export async function getServerSideProps() {
  const menu =  await genericPageService.getMenu();
  // 線上資料

  const responsibilityUrl =
    process.env.APP_ENV === 'production'
      ? new URL('/api/responsibility-prd', process.env.APP_URL)
      : new URL('/api/responsibility-dev', process.env.APP_URL);
  const brandsUrl = new URL('/api/brands', process.env.API_URL);

  try {
    const responsibilityRes = await fetch(responsibilityUrl);
    const responsibilityData = await responsibilityRes.json();

    const brandsRes = await fetch(brandsUrl);
    const brands = await brandsRes.json();

    const guidesData = new URL('/api/guides', process.env.API_URL);
    const guidesRes = await fetch(guidesData);
    const guides = await guidesRes.json();

    return {
      props: {
        menu,
        responsibilityData,
        brands,
        guides
      },
    };
  } catch (error) {
      console.log("Error Responsibility----------> ", error);
  }
}
