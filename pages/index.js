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

export default function Home(props) {
  
  
  const cx = classNames.bind(styles);
  const appUrl = process.env.APP_URL
  const indexHeadlines = props.indexData.indexHeadlines
  const articles = props.indexData.articles
  const partners = props.indexData.partners
  const marquee = props.indexData.marquee
  const tips = props.indexData.tips
  const focus = props.indexData.focusNews
  const impact = props.indexData.impact
  const colorMapping = props.colorMapping
  const ogImg = process.env.OG_IMG

  return (
    <div id="wrapper" >
      <Head>
        <title>TVBS GOOD - ESG 倡議與永續生活平台</title>
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
        <meta property="og:title" content="TVBS GOOD - ESG 倡議與永續生活平台" />
        <meta property="og:url" content={appUrl} />
        <meta property="og:image" content={ogImg} />
        <meta property="og:description" content="TVBS GOOD 是 TVBS 倡議 ESG、實踐與地球共好的平台。我們的永續目標接軌聯合國與世界並進，從報導追蹤企業永續發展，到分享日常永續生活撇步，協同多方一起節能減碳，邁向淨零碳排的永續目標。" />
        <link rel="canonical" href={appUrl} />
      </Head>
      <Header menuData={props.menu} />
      <main>
        <div className={cx("indexPage")}>
          <MainVisionNew data={indexHeadlines} />
          <Marquee data={marquee} />
          <ViewListNew data={articles}/>
          <FocusList data={focus} />
          <InfluenceList data={impact} />
          <PartnerListNew data={partners} />
          <TipsList data={tips} colorMapping={colorMapping} />
          <Responsibility />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const [menu, colorMappingRes, indexDataRes] = await Promise.all(
      [
        genericPageService.getMenu(),
        fetch(new URL('/api/tips-color-mapping', process.env.APP_URL)),
        fetch(new URL('/api/index-data', process.env.API_URL)),
      ]
    );

    const [colorMapping, indexData] = await Promise.all([
      colorMappingRes.json(),
      indexDataRes.json(),
    ]);

    return {
      props: {
        menu,
        indexData,
        colorMapping,
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps (index):", error);
    return {
      notFound: true,
    };
  }
}

