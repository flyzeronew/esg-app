import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../comps/Header'
import Footer from '../comps/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  // 頁面識別
  const thisPage='home';
  return (
    <div className={`container ${inter.className}`}>
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

            <div className="mainVision">
              <div className="box">
                <img src="images/esg01.jpg" alt="img" width={1029} height={579}/>  
                <div className="txtBox">
                  <div className="title">台灣剩食危機</div>
                  <div className="txt">每人每天浪費一個便當！</div>
                  <div className="object">
                    <div className="point"></div>
                    <div className="arraw">
                      <img src="images/icon_arraw02.svg" alt="arraw" width={50} height={50}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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