import Head from 'next/head'
import Header from '../comps/Header/Header'
import Footer from '../comps/Footer/Footer'
import MainVisionNew from '../comps/index/MainVisionNew'
import Marquee from '../comps/index/Marquee'
import ViewListNew from '../comps/index/ViewListNew'
import FocusList from '../comps/index/FocusList'
import InfluenceList from '../comps/index/InfluenceList'
import PartnerListNew from '../comps/index/PartnerListNew'
import Responsibility from '../comps/index/Responsibility'
import TipsList from '../comps/index/TipsList'
import styles from './index-new.module.css';
import classNames from 'classnames/bind';
import { genericPageService } from '@/services/cms/apisCMS'

const cx = classNames.bind(styles);
export default function Home(props) {
  const appUrl = process.env.APP_URL
  const indexHeadlines = props.indexData.indexHeadlines
  const articles = props.indexData.articles
  const partners = props.indexData.partners
  const tips = props.indexData.tips
  const colorMapping = props.colorMapping

  // 頁面識別
  const thisPage = 'home'
  // 社群分享圖
  const ogImg = process.env.OG_IMG
  
  return (
    <div id="wrapper" >
      <Head>
        <title>{'TVBS GOOD - ESG 倡議與永續生活平台'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="Keywords"
          content="TVBS,TVBS GOOD,TVBS ESG,企業社會責任,ESG永續發展,ESG指標,ESG企業,ESG議題"
        />
        <meta
          name="description"
          content="TVBS GOOD 是 TVBS 倡議 ESG、實踐與地球共好的平台。我們的永續目標接軌聯合國與世界並進，從報導追蹤企業永續發展，到分享日常永續生活撇步，協同多方一起節能減碳，邁向淨零碳排的永續目標。"
        />
        <meta name="author" content="TVBS" />
        <meta name="copyright" content="TVBS" />
        <meta name="application-name" content="TVBS" />
        <meta name="URL" content={appUrl} />
        <meta name="medium" content="mult" />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta property="og:image" content={ogImg} />
        <link rel="canonical" href={appUrl} />
      </Head>
      <Header thisPage={thisPage} menuData={props.menu} />
      <main>
        <div className={cx("indexPage")}>
          <MainVisionNew data={indexHeadlines} />
          <Marquee />
          <ViewListNew />
          <FocusList />
          <InfluenceList />
          <PartnerListNew />
          <TipsList />
          <Responsibility />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  const menu =  await genericPageService.getMenu();
  // data
  const dataUrl = new URL('/api/index-other', process.env.APP_URL)
  const dataRes = await fetch(dataUrl)
  const data = await dataRes.json()
  // 顏色配對
  const colorMappingUrl = new URL(
    '/api/tips-color-mapping',
    process.env.APP_URL
  )
  const colorMappingRes = await fetch(colorMappingUrl)
  const colorMapping = await colorMappingRes.json()

  const indexDataUrl = new URL('/api/index-data', process.env.API_URL)
  const indexDataRes = await fetch(indexDataUrl)
  const indexData = await indexDataRes.json()

  return {
    props: {
      menu,
      data,
      indexData,
      colorMapping
    },
  }
}
