import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../comps/Header'
import Footer from '../comps/Footer'
import MainVision from '../comps/index/MainVision'

const inter = Inter({ subsets: ['latin'] })
export default function Home(props) {

  // 頁面識別
  const thisPage='home';
  return (
    <div className={`container1 ${inter.className}`}>    
      <Head>
        <title>{"esg | TVBS 官網"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Keywords" content="esg,esg2,esg3" />
        <meta name="description" content="esg description" />        
      </Head>
      <Header thisPage={thisPage} menuData={props.menu}/>
      <main>
        <div className="indexPage">
          <section>
            <MainVision/>
            <div className="other">
              <div className="whatEsg">
                <div className="title">What is ESG?</div>
                <div className="txtBox">
                  <div className="txt">什麼是ESG?</div>
                  <div className="arraw">
                    <img src="images/icon_arraw03.svg" alt="arraw" width={42} height={42}/>
                  </div>
                </div>

              </div>
              <div className="view">
                <div className="box">
                  <div className="img">
                    <img src="images/esg02.jpg" alt="img" width={1920} height={1080}/>  
                  </div>
                  <div className="txt">一菜三吃！淨零綠生活當道 首「惜」廚師教您如何吃在地</div>
                  <div className="point"></div>
                </div>
              </div>
              <div className="action">
                <div className="title">參加活動GO!</div>
                <div className="txt">一起實踐永續</div>
                <div className="arraw">
                    <img src="images/icon_arraw04.svg" alt="arraw" width={42} height={42}/>
                </div>
              </div>
            </div>

          </section>
          <section>
            <div className="ourMission">
              <div className="img"><img src="images/our-mission01.jpg" alt="img"  width={300} height={300}/></div>
              <div className="txtBox">
                <div className="title">Our Mission</div>
                <div className="txt">TVBS ESG永續倡議大使 <img src="images/icon_arraw04.svg" alt="arraw" width={42} height={42}/></div>
              </div>
            </div>
            
            <div className="secret">
              <div className="subtitle">
                <p>永續生活小撇步</p>
                <div className="line"></div>
                <div className="tag">衣</div>
              </div>
              <div className="title">
                <p>吃完的免洗紙餐盒，需洗完再回收嗎？吃完的免洗紙餐盒，需洗完再回收嗎？</p>
                <div className="img">
                  <img src="images/esg03.jpg" alt="img" width={640} height={360}/>
                </div>
              </div>
              <div className="txt">嘗試替「舊愛」尋找新歡嘗試替「舊愛」尋找新歡嘗試替「舊愛」尋找新歡嘗試替「舊愛」尋找新歡嘗試替「舊愛」尋找新歡</div>
              <div className="point"></div>
            </div> 

            <div className="partner">
              <div className="titleBox">
                <div className="title">Who’s doing ESG?</div>
                <div className="txt">落實ESG的夥伴 <img src="images/icon_arraw04.svg" alt="arraw" width={42} height={42}/></div>
              </div>
              <div className="list">
                <div className="box">
                    <a href='##'>
                      <div className="img">
                        <img src="images/partner01.jpg" alt="img" width={640} height={360}/>
                      </div>
                      <div className="txt">台灣雀巢 Nestlé Taiwan</div>
                    </a>

                    <a href='##'>
                      <div className="img">
                        <img src="images/partner01.jpg" alt="img" width={640} height={360}/>
                      </div>
                      <div className="txt">台灣雀巢 Nestlé Taiwan</div>
                    </a>

                    <a href='##'>
                      <div className="img">
                        <img src="images/partner01.jpg" alt="img" width={640} height={360}/>
                      </div>
                      <div className="txt">台灣雀巢 Nestlé Taiwan</div>
                    </a>
                </div>
              </div>
            </div>
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