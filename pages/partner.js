import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../comps/Header/Header'
import Footer from '../comps/Footer/Footer'
import styles from './partner.module.css';
import classNames from 'classnames/bind';
import SharedBanner from '@/comps/sharedBanner/SharedBanner';
import { genericPageService } from '@/services/cms/apisCMS';
import { usePathname } from 'next/navigation';

const cx = classNames.bind(styles);
export default function Partner(props) {
  const appUrl = process.env.APP_URL
  // 頁面識別
  const thisPage = 'partner'
  const pathname = usePathname();
  const detailsOfPage = props.menu.find((menuItem) => menuItem.pathname === pathname);
  const ogImg = process.env.OG_IMG
  const [imgHover, setImgHover] = useState(null)
  const [bgSize, setBgSize] = useState()
  const [hoverBgSize, setHoverBgSize] = useState()
  const [showList, setShowList] = useState(props.partnerData)
  const [submenuActive, setSubmenuActive] = useState(0)
  const imgMouseOver = (e) => {
    const isLargeScreen = window.innerWidth > 767
    setHoverBgSize(isLargeScreen ? 120 : 280)
    setImgHover(e)
  }

  const imgMouseOut = (e) => {
    setImgHover(null)
  }

  // 處理點擊事件
  const handleClick = (id) => {
    setSubmenuActive(id)
    if (id === 0) {
      // 全部
      return setShowList(props.partnerData)
    }
    const filteredData = props.partnerData.filter(
      (item) => item.partner_genre_id === id
    )
    setShowList(filteredData)
  }

  // resize 監聽事件
  useEffect(() => {
    const handleResize = (e) => {
      let newSize = 100
      if (window.innerWidth < 1609 && window.innerWidth > 1208) {
        newSize = 135
      } else if (window.innerWidth < 403) {
        newSize = 125
      }
      setBgSize(newSize)
      setHoverBgSize(newSize)
      setImgHover(null)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div id="wrapper">
      <Head>
        <title>{detailsOfPage.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="Keywords"
          content="TVBS, TVBS GOOD,TVBS NEWS, TVBS ESG, ESG永續趨勢, ESG永續焦點, ESG永續發展, ESG議題, ESG共好夥伴"
        />
        <meta
          name="description"
          content={detailsOfPage.meta_description}
        />
        <meta name="author" content="TVBS" />
        <meta name="copyright" content="TVBS" />
        <meta name="application-name" content="TVBS" />
        <meta name="URL" content={`${appUrl}/${detailsOfPage.pathname}`} />
        <meta name="medium" content="mult" />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta property="og:image" content={ogImg} />
        <link rel="canonical" href={`${appUrl}/${detailsOfPage.pathname}`} />
      </Head>
      <Header thisPage={thisPage} menuData={props.menu} />
      <main>
        <div className={cx("partnerPage")}>
          {/* shared banner component goes here*/}
          <div className={cx("bannerSection")}>
            <SharedBanner
                title={detailsOfPage.page}
                description={detailsOfPage.page_description}
            ></SharedBanner>   
          </div>
          {/* <div className={cx("submenuArea")}>
            <div className={cx("submenu")}>
              <div className={cx("submenuMask")}></div>
              <a
                onClick={() => handleClick(0)}
                href="#"
                className={submenuActive === 0 ? 'act' : ''}
              >
                全部
              </a>
              {props.submenuData.length > 0
                ? props.submenuData.map((item, index) => (
                    <a
                      key={index}
                      onClick={() => handleClick(item.id)}
                      href="#"
                      className={submenuActive === item.id ? 'act' : ''}
                    >
                      {item.name}
                    </a>
                  ))
                : ''}
            </div>
          </div> */}
          <div className={cx("list")}>
            <ul>
              {showList && showList.length > 0
                ? showList.map((item, index) => (
                    <li
                      key={index}
                      style={{
                        background: `url(${
                          item.cover_img
                            ? item.cover_img
                            : process.env.IMG_DEFAULT
                        }) no-repeat center center / 100%`,
                        backgroundSize:
                          index === imgHover ? `${hoverBgSize}%` : `${bgSize}%`,
                        transition: 'background-size 0.3s',
                      }}
                      onMouseOver={() => imgMouseOver(index)}
                      onMouseOut={imgMouseOut}
                    >
                      <a
                        href={
                          1 === item.has_detail_page
                            ? `/partner/` + item.name
                            : item.outer_url
                        }
                        style={
                          0 === item.has_detail_page && '' === item.outer_url
                            ? { pointerEvents: 'none' }
                            : {}
                        }
                      >
                        <div className={cx("itemMask")}></div>
                        <div className={cx("profileCard")}>
                          <div className={cx("profileImg")}>
                            <div className={cx("img")}>
                              <img
                                src={
                                  item.avatar
                                    ? item.avatar
                                    : process.env.IMG_DEFAULT_SQUARE
                                }
                                alt="img"
                                width={50}
                                height={50}
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <h2 className={cx("name")}>{item.name}</h2>
                          {item.brief ? (
                            <div className={cx("outBorder")}>
                              <div className={cx("txt")}>{item.brief}</div>
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                      </a>
                    </li>
                  ))
                : ''}
            </ul>
          </div>
        </div>
      </main>
      <div className={cx("footerLine")}>
        <div className={cx("box")}></div>
      </div>
      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  const menu =  await genericPageService.getMenu();
  // submenu
  const submenuUrl = new URL('/api/partner-genres', process.env.API_URL)
  const submenuRes = await fetch(submenuUrl)
  const submenuData = await submenuRes.json()
  // list
  const partnerUrl = new URL('/api/partners', process.env.API_URL)
  const partnerRes = await fetch(partnerUrl)
  const partnerData = await partnerRes.json()

  return {
    props: {
      menu,
      partnerData,
      submenuData,
    },
  }
}
