import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../../../comps/Header/Header'
import Footer from '../../../comps/Footer/Footer'
import StructuredData from '../../../comps/StructuredData/StructuredData'
import classNames from 'classnames/bind';
import styles from './page.module.css';

const cx = classNames.bind(styles);
export default function ViewArticle(props) {
  const articleId = Number(props.articleId)
  const appUrl = process.env.APP_URL
  const [bgShow, setBgShow] = useState(true)
  const [paddingTop, setPaddingTop] = useState()
  const getArticleData = props.viewData || {}
  const genreEnName = props.viewData?.article_genres?.[0]?.en_name
  //取資料 文章、共好夥伴、小撇步、延伸閱讀
  const articleContent = getArticleData.content || ''
  const articlePartner = getArticleData.partner
  const articleSecret = getArticleData.article_secret
  const articleExtended = getArticleData.extend_articles || []
  // 日期轉換
  const formattedDate = (date) => {
    const originalTime = new Date(date)
    const isoDateString = originalTime.toISOString()
    const formattedDate = isoDateString.substring(0, 10)
    return formattedDate
  }
  //return <pre>{JSON.stringify(articleList,null,4)}</pre>
  // 頁面識別
  const thisPage = 'view'
  const ogImg = getArticleData.cover_img
  // resize 監聽事件
  useEffect(() => {
    // dfp廣告
    if (typeof window !== 'undefined') {
      window.googletag = window.googletag || { cmd: [] }
    }
    let adType = [
      {
        id: '31610311',
        type: 'esg.tvbs.com.tw_pc_read_in1',
        size: [
          [970, 250],
          [1, 1],
        ],
        style: 'adPc1',
        mode: 'pc',
      },
      {
        id: '31610311',
        type: 'esg.tvbs.com.tw_m_read_in1',
        size: [
          [300, 250],
          [1, 1],
        ],
        style: 'adMo1',
        mode: 'mo',
      },
      {
        id: '31610311',
        type: 'esg.tvbs.com.tw_m_read_in2',
        size: [
          [320, 480],
          [1, 1],
        ],
        style: 'adMo2',
        mode: 'mo',
      },
    ]
    //插入一般廣告
    const insertNormalAd = (adIndex, adData) => {
      const allAdBoxes = document.querySelectorAll('.adBox')
      if (allAdBoxes[adIndex]) {
        const adInsert = document.createElement('div')
        adInsert.id = adData.style
        adInsert.classList.add(adData.mode)
        allAdBoxes[adIndex].appendChild(adInsert)
        window.googletag.cmd.push(() => {
          window.googletag
            .defineSlot(
              `/${adData.id}/${adData.type}`,
              adData.size,
              adData.style
            )
            .addService(window.googletag.pubads())
          window.googletag.pubads().collapseEmptyDivs()
          window.googletag.pubads().setTargeting('news_channel', 'esg')
          window.googletag.pubads().enableSingleRequest()
          window.googletag.enableServices()
          window.googletag.display(adData.style?adData.style:"")
        })
      }
    }
    //插入視覺插廣告
    const insertFlyAd = (adIndex, adData) => {
      const allAdBoxes = document.querySelectorAll('.adBox')
      if (allAdBoxes[adIndex]) {
        allAdBoxes[adIndex].innerHTML = `
                    <div class="fly_outbox">
                        <div class="fly_inbox">
                            <div class="fly_ad">
                                <div id="${adData.style}"></div>
                            </div>
                        </div>
                    </div>
                    `
        window.googletag.cmd.push(() => {
          window.googletag
            .defineSlot(
              `/${adData.id}/${adData.type}`,
              adData.size,
              adData.style
            )
            .addService(window.googletag.pubads())
          window.googletag.pubads().collapseEmptyDivs()
          window.googletag.pubads().setTargeting('news_channel', 'esg')
          window.googletag.pubads().enableSingleRequest()
          window.googletag.enableServices()
          window.googletag.display(adData.style)
        })
      }
    }
    //廣告規則在幾個p後插入廣告 adBox
    const insertAdBoxes = () => {
      const editorNew = document.querySelector('.'+cx('editorNew'))
      if (!editorNew) return

      const paragraphs = editorNew.querySelectorAll('p');
      const positions = [2, 8]

      positions.forEach((pos, index) => {
        if (paragraphs[pos]) {
          const adBox = document.createElement('div');
          adBox.className = cx('adBox')
          if (1 === index) adBox.classList.add(cx('mo'));
          paragraphs[pos].insertAdjacentElement('afterend', adBox);
        }
      });
    }
    const initializeAds = () => {
      const editorNew = document.querySelector('.'+cx('editorNew'))
      if (!editorNew || document.querySelector('.'+cx('adBox'))) return
      insertAdBoxes()
      //塞入廣告 adType[0] & adType[1] 塞在第1個adBox adType[2] 塞在第2個adBox
      adType.forEach((adData, index) => {
        if (2 === index) {
          insertFlyAd(1, adData)
        } else {
          insertNormalAd(0, adData)
        }
      })
    }
    initializeAds()

    // dfp廣告 ed
    const handleResize = (e) => {
      const showBg = window.innerWidth > 767 ? true : false
      const needPaddingTop = window.innerWidth > 1023 ? '30px' : ''
      setBgShow(showBg)
      setPaddingTop(needPaddingTop)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  // 準備結構化資料
  const structuredDataProps = {
    title: getArticleData.title,
    description: getArticleData.description,
    coverImg: getArticleData.cover_img,
    authorName: getArticleData.author_name,
    createdAt: getArticleData.created_at,
    updatedAt: getArticleData.updated_at,
    genres: getArticleData.article_genres,
    articleId: articleId,
    genreEnName: genreEnName,
    partner: articlePartner,
    extendedArticles: articleExtended,
    content: articleContent
  }

  // 準備麵包屑導航資料
  const breadcrumbData = {
    items: [
      {
        name: "首頁",
        item: `${appUrl}/`
      },
      {
        name: getArticleData.article_genres?.[0]?.name || "ESG",
        item: `${appUrl}/view/${genreEnName}`
      },
      {
        name: getArticleData.title,
        item: `${appUrl}/view/${genreEnName}/${articleId}`
      }
    ]
  }

  // resize 監聽事件 ed
  return (
    <div id="wrapper">
      <Head>
        <title>{`${getArticleData.title} - TVBS ESG專區`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="Keywords"
          content="TVBS,TVBS GOOD,TVBS ESG,企業社會責任,ESG永續發展,ESG指標,ESG企業,ESG議題"
        />
        <meta name="description" content={getArticleData.description} />
        <meta name="author" content="TVBS" />
        <meta name="copyright" content="TVBS" />
        <meta name="application-name" content="TVBS" />
        <meta
          name="URL"
          content={`${appUrl}/${thisPage}/${genreEnName}/${articleId}`}
        />
        <meta name="medium" content="mult" />
        <meta name="robots" content="index,follow" />
        <meta property="og:image" content={ogImg} />
        <meta property="og:title" content={`${getArticleData.title} - TVBS ESG專區`} />
        <meta property="og:description" content={getArticleData.description} />
        <meta property="og:url" content={`${appUrl}/${thisPage}/${genreEnName}/${articleId}`} />
        <meta property="og:type" content="article"></meta>
        <link
          rel="canonical"
          href={`${appUrl}/${thisPage}/${genreEnName}/${articleId}`}
        />
      </Head>
      
      {/* 結構化資料組件 */}
      <StructuredData 
        type="NewsArticle"
        data={structuredDataProps}
        appUrl={appUrl}
      />
      
      {/* 麵包屑導航結構化資料 */}
      <StructuredData 
        type="BreadcrumbList"
        data={breadcrumbData}
        appUrl={appUrl}
      />
      <Header thisPage={thisPage} menuData={props.menu} />
      <main className={cx('mainContent')}>
        <div
          className={cx("viewArticlePage")}
          style={{
            paddingTop: getArticleData.has_cover_img === 0 ? paddingTop : 0,
          }}
        >
          {getArticleData.has_cover_img === 1 ? (
            <div className={cx("coverImgBanner")}>
              <div className={cx("img")}>
                <img src={getArticleData.cover_img} />
              </div>
            </div>
          ) : (
            ''
          )}
          <div className={cx("articleContent")}>
            <div className={cx("category")}>
              <span>文章 </span>
              <div className={cx("line")}></div>
              <span>{getArticleData.article_genres?.[0]?.name || '未知分類'}</span>
            </div>

            <h1 className={cx("mainTitle")}>{getArticleData.title}</h1>
            <div className={cx("timeBar")}>
              <span>{formattedDate(getArticleData.updated_at)} 更新</span>
              <span className={cx("line")}></span>
              <div>
                <span>撰稿 </span>
                <span className={cx("name")}>{getArticleData.author_name}</span>
              </div>
            </div>
            {/* Always description may not be available  */}
            {getArticleData?.description.length > 0 && <div className={cx("mainDescription")}>
              <p>{getArticleData.description}</p>
            </div>
            }

            {/* 編輯器 */}
            <div
              className={cx("editorNew")}
              dangerouslySetInnerHTML={{ __html: articleContent }}
            ></div>
            {/* 編輯器 ed*/}

            {/* 廠商資訊 樣式三選一*/}

            {articlePartner ? (
              <div className={cx("articleSponsor","style1")}>
                <a
                  href={
                    1 === articlePartner.has_detail_page
                      ? `/partner/` + articlePartner.name
                      : articlePartner.outer_url
                  }
                  style={
                    0 === articlePartner.has_detail_page &&
                    !articlePartner.outer_url
                      ? { pointerEvents: 'none' }
                      : {}
                  }
                >
                  <div className={cx("box")}>
                    <div className={cx("imgBox")}>
                      <div className={cx("img")}>
                        <img
                          src={
                            articlePartner.avatar
                              ? articlePartner.avatar
                              : process.env.IMG_DEFAULT_SQUARE
                          }
                          alt="img"
                          width={90}
                          height={90}
                          loading="lazy"
                        />
                      </div>
                      <div className={cx("txt","pc")}>
                        <div className={cx("type")}>共好夥伴</div>
                        <div className={cx("name")}>
                          <p>{articlePartner.name}</p>
                        </div>
                      </div>
                      <div className={cx("txt","mo")}>
                        <div className={cx("type")}>{articlePartner.name}</div>
                        <div className={cx("name")}>
                          <p>共好夥伴</p>
                        </div>
                      </div>
                    </div>
                    <div className={cx("description")}>
                      <p>{articlePartner.introduction}</p>
                    </div>
                  </div>
                </a>
              </div>
            ) : (
              ''
            )}
            {/* 廠商資訊 ed*/}
            {/* 小撇步報你知 */}
          </div>


        </div>
      </main>
      <div className={cx('extendedContent')}>
            {/* 延伸閱讀 */}
            {articleExtended.length > 0 ? (
            <div className={cx("articleExtended")}>
              <div className={cx("box")}>
                <div className={cx("tagBox")}>
                  <div className={cx("articleTitle")}>
                    <p>延伸閱讀</p>
                    <div className={cx("line")}></div>
                  </div>
                </div>
                <div className={cx("listBox")}>
                  <div className={cx("list")}>
                    <ul>
                      {articleExtended.length > 0
                        ? articleExtended.map((item, index) => (
                            <li key={index}>
                              <a
                                href={`${appUrl}/view/${item.article_genres?.[0]?.en_name || 'unknown'}/${item.article_id}`}
                              >
                                <div className={cx("img")}>
                                  <img
                                    src={
                                      item.cover_img
                                        ? item.cover_img
                                        : process.env.IMG_DEFAULT
                                    }
                                    alt="img"
                                    width={1072}
                                    height={603}
                                    loading="lazy"
                                  />
                                </div>
                                <div className={cx("txt")}>{item.title}</div>
                              </a>
                            </li>
                          ))
                        : ''}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}

          {/* 延伸閱讀 ed*/}
      </div>
      <div className={cx("footerLine","color1")}>
        <div className={cx("box")}></div>
      </div>
      <Footer act="color1" />
    </div>
  )
}

import { fetchPageData } from '@/services/cms/fetchPageData';
export async function getServerSideProps(context) {
  try {
    const { query, res } = context;
    const articleId = query.page;
    // 設定 response headers
    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=120');
    const { menu, extraData } = await fetchPageData({
      extraApiPaths: [`/api/articles/${articleId}`],
    });
    const viewData = extraData[0];
    if (!viewData) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        menu,
        viewData,
        articleId,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
        notFound: true,
    };
  }
}
