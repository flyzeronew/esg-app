import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../comps/Header'
import Footer from '../comps/Footer'
import MainVision from '../comps/index/MainVision'
import SecretList from '../comps/index/SecretList'
import ViewList from '../comps/index/ViewList'
import PartnerList from '../comps/index/PartnerList'
import { useState ,useEffect } from 'react'
const inter = Inter({ subsets: ['latin'] })
export default function Home(props) {
  const appUrl = process.env.APP_URL;
  const indexHeadlines = props.indexData.indexHeadlines;
  const articles = props.indexData.articles;
  const partners = props.indexData.partners;
  const tips = props.indexData.tips;
  const colorMapping = props.colorMapping;
  // 頁面識別
  const thisPage='home';
  // 社群分享圖
  const ogImg = process.env.OG_IMG;
  // 參加活動hover
  const [hover, setHover] = useState(false); 
  // ourMissionHover
  const [ourMissionHover, setOurMissionHover] = useState(false); 
  // what is ESG Hover
  const [esgHover, setEsgHover] = useState(false); 
  // 參加活動hover事件
  const mouseOver = (e) => {
      setHover(true);
  };
  const mouseOut = (e) => {
      setHover(false);
  }; 
  // ourMissionHoverhover事件
  const missionMouseOver = (e) => {
    const isPcScreen = window.innerWidth > 1023;
    if(isPcScreen){
      setOurMissionHover(true);
    }
  };
  const missionMouseOut = (e) => {
    const isPcScreen = window.innerWidth > 1023;
    if(isPcScreen){
      setOurMissionHover(false);
    }
  };
    // what is ESG hover事件
    const esgMouseOver = () => {
      const isPcScreen = window.innerWidth > 1023;
      if(isPcScreen){
        setEsgHover(true);
      }
    };
    const esgMouseOut = () => {
      const isPcScreen = window.innerWidth > 1023;
      if(isPcScreen){
        setEsgHover(false);
      }
    };
  return (
    <div id='wrapper' className={inter.className}>  
      <Head>
        <title>{"TVBS GOOD - ESG 倡議與永續生活平台"}</title>        
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Keywords" content="TVBS,TVBS GOOD,TVBS ESG,企業社會責任,ESG永續發展,ESG指標,ESG企業,ESG議題" />
        <meta name="description" content="TVBS GOOD 是 TVBS 倡議 ESG、實踐與地球共好的平台。我們的永續目標接軌聯合國與世界並進，從報導追蹤企業永續發展，到分享日常永續生活撇步，協同多方一起節能減碳，邁向淨零碳排的永續目標。" />      
        <meta name="author" content="TVBS" />
        <meta name="copyright" content="TVBS" />
        <meta name="application-name" content="TVBS" />
        <meta name="URL" content={appUrl} />
        <meta name="medium" content="mult" />
        <meta name="robots" content="INDEX,FOLLOW"/>
        <meta property="og:image" content={ogImg} />  
        <link rel="canonical" href={appUrl} />
      </Head>
      <Header thisPage={thisPage} menuData={props.menu}/>
      <main>
        <div className="indexPage">
          <div className="flexBox">
            <section>
              <MainVision indexHeadlines={indexHeadlines} />

              <div className="other">

                {props.data.ourMissoin ?
                    <div className="ourMission mo">                          
                        <a href={props.data.ourMissoin.url}>
                          <div className="txtBox">
                            <div className="title">Our Mission</div>
                            <div className="txt">{props.data.ourMissoin.title}
                                <img src="/images/icon_arraw04.svg" alt="arraw" width={42} height={42}/>                      
                            </div>
                          </div>
                        </a>      
                    </div>
                :""}

                {props.data.whatIsEsg?
                  <div className="whatEsg" onMouseOver={() => esgMouseOver(1)}   onMouseOut={esgMouseOut}>
                    
                    <div className={`whatEsgHover ${esgHover ? 'act':''}`}>
                      <a href={props.data.whatIsEsg.url}>
                        <div className="txt">{props.data.whatIsEsg.detail}</div>
                        <div className="txtBox">
                          <div className="txt">看文章了解更多</div>
                          <div className="arraw">                        
                              <img src="/images/icon_arraw02.svg" alt="arraw" width={42} height={42} loading="lazy"/>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="title">What is ESG?</div>
                    <div className="txtBox">
                      <div className="txt">{props.data.whatIsEsg.description}</div>
                      <div className="arraw">
                          <img src="/images/icon_arraw02.svg" alt="arraw" width={42} height={42} loading='lazy'/>
                      </div>
                    </div>
                  </div>

                :""}
                <ViewList articles={articles}/>
                
                { props.data.activity ?
                
                  <div className="action" onMouseOver={() => mouseOver(1)}  onMouseOut={mouseOut} >
                    <div className={`titleComingSoon ${hover ? 'act' : ''}`}>
                      {props.data.activity.detail}
                    </div>
                    <div className="title">參加活動GO!</div>
                    <div className="txtBox">
                      <div className="txt">{props.data.activity.description}</div>
                      <div className="arraw" style={{cursor: "auto"}}>
                        {/* <img src="/images/icon_arraw04.svg" alt="arraw" width={42} height={42} loading="lazy"/> */}
                      </div>
                    </div>                  
                    </div>
                :""}

              </div>

            </section>
            <section>
              {props.data.ourMissoin ?

                <div onMouseOver={() => missionMouseOver(1)}   onMouseOut={missionMouseOut} >
                  <div className="ourMission pc">
                        <div className={`ourMissionHover ${ourMissionHover ? 'act' : ''}`}>
                          <a href={props.data.ourMissoin.url}>
                            <div className="txtBox">
                              <div className="txt up">{props.data.ourMissoin.description}</div>
                              <div className="txt">看更多
                                    <img src={`${appUrl}/images/icon_arraw04.svg`} alt="arraw" width={42} height={42} loading="lazy"/>
                                </div>
                            </div>
                          </a>
                        </div>
                      <a href={props.data.ourMissoin.url}>
                        <div className="txtBox">
                          <div className="title">Our Mission</div>
                          <div className="txt">{props.data.ourMissoin.title}
                              <img src="/images/icon_arraw04.svg" alt="arraw" width={42} height={42}/>                      
                          </div>
                        </div>
                      </a>      
                  </div>
                </div>

              :""}

              <SecretList tips={tips} colorMapping={colorMapping} />
              <PartnerList partners={partners}  />
              
            </section>
          </div>
          <div className="bottomTxt">圖片提供｜達志影像美聯社 路透社 Shutterstock</div>
        </div>        
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const menuUrl = new URL('/api/menu', process.env.APP_URL);
  const menuRes = await fetch(menuUrl);
  const menu = await menuRes.json();

  // data
  const dataUrl = new URL('/api/index-other', process.env.APP_URL);
  const dataRes = await fetch(dataUrl);
  const data = await dataRes.json();
  
  // 顏色配對
  const colorMappingUrl = new URL('/api/tips-color-mapping', process.env.APP_URL);
  const colorMappingRes = await fetch(colorMappingUrl);
  const colorMapping = await colorMappingRes.json();

  const indexDataUrl = new URL('/api/index-data', process.env.API_URL);
  const indexDataRes = await fetch(indexDataUrl);
  const indexData = await indexDataRes.json();

  return {
    props: {
      menu,data,indexData,colorMapping
    },
  };
}