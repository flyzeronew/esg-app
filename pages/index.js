import Image from 'next/image'
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
  // 頁面識別
  const thisPage='home';
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
    setOurMissionHover(true);
  };
  const missionMouseOut = (e) => {
    setOurMissionHover(false);
  };
    // what is ESG hover事件
    const esgMouseOver = () => {
      setEsgHover(true);
    };
    const esgMouseOut = () => {
      setEsgHover(false);
    };
  return (
    <div id='wrapper' className={inter.className}>  
      <Head>
        <title>{"ESG企業永續治理 - TVBS ESG專區"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Keywords" content="esg,esg2,esg3" />
        <meta name="description" content="ESG企業永續治理，是企業在環境、社會、公司治理三個層面，採取永續發展的經營方式。ESG企業永續治理的內涵在於企業不僅要追求財務獲利，更要兼顧環境保護、社會責任與公司治理，才能創造永續發展的價值。" />  \      
      </Head>
      <Header thisPage={thisPage} menuData={props.menu}/>
      <main>
        <div className="indexPage">
          <section>
            <MainVision/>

            <div className="other">
              
              <div className="whatEsg" onMouseOver={() => esgMouseOver(1)}   onMouseOut={esgMouseOut}>
                {esgHover
                ?
                <div className="whatEsgHover">
                  <div className="txt">ESG分別是環境保護（E，Environmental）、社會責任（S，Social）以及公司治理（G，governance）的縮寫，是一種新型態評估企業的數據與指標</div>
                  <div className="txtBox">
                    <div className="txt">看文章了解更多</div>
                    <div className="arraw">
                      <a href="#">
                        <Image src="/images/icon_arraw03.svg" alt="arraw" width={42} height={42}/>
                      </a>
                    </div>
                  </div>
                </div>
                :
                <div>
                  <div className="title">What is ESG?</div>
                  <div className="txtBox">
                    <div className="txt">什麼是ESG?</div>
                    <div className="arraw">
                      <a href="#">
                        <Image src="/images/icon_arraw03.svg" alt="arraw" width={42} height={42}/>
                      </a>
                    </div>
                  </div>
                </div>}
              </div>

              <ViewList/>
              
            
              <div className="action" onMouseOver={() => mouseOver(1)}  onMouseOut={mouseOut} style={{backgroundColor:hover?'#FFB834':'#FFDC34',transition:'0.5s'}}>
                {hover?
                <div style={{display:"flex",justifyContent:"center"}}>
                  <div className="titleComingSoon">COMING SOON</div>
                </div>
                :<div>
                  <div className="title">參加活動GO!</div>
                  <div className="txtBox">
                    <div className="txt">一起實踐永續</div>
                    <div className="arraw" style={{cursor: "auto"}}>
                      {/* <Image src="/images/icon_arraw04.svg" alt="arraw" width={42} height={42}/> */}
                    </div>
                  </div>
                </div>}
              </div>
            </div>

          </section>
          <section>
            <div onMouseOver={() => missionMouseOver(1)}   onMouseOut={missionMouseOut} >
              {ourMissionHover
              ?<div className="ourMissionHover" >
              <div className="txtBox">
                <div className="txt up">TVBS持續為閱聽眾帶來更全面，更淺顯易懂的永體，共創關懷環境生態與新聞學的永續殿堂</div>
                <div className="txt">看更多                    
                    <a href="#">                  
                      <Image src="/images/icon_arraw04.svg" alt="arraw" width={42} height={42}/>
                    </a>
                  </div>
              </div>
            </div>
              :<div className="ourMission" >
                <div className="img"><Image src="/images/our-mission01.jpg" alt="img"  width={300} height={300}/></div>
                <div className="txtBox">
                  <div className="title">Our Mission</div>
                  <div className="txt">TVBS ESG永續倡議大使 
                    <a href="#">                  
                      <Image src="/images/icon_arraw04.svg" alt="arraw" width={42} height={42}/>
                    </a>
                  </div>
                </div>
              </div>}
            </div>
            
            <SecretList/>
            <PartnerList/>
            
          </section>
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
  return {
    props: {
      menu,
    },
  };
}