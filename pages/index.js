import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../comps/Header'
import Footer from '../comps/Footer'
import MainVision from '../comps/index/MainVision'
import SecretList from '../comps/index/SecretList'
import ViewList from '../comps/index/ViewList'
import PartnerList from '../comps/index/PartnerList'
import GtmNoScript from '../comps/GtmNoScript'

const inter = Inter({ subsets: ['latin'] })
export default function Home(props) {
  // 頁面識別
  const thisPage='home';
  return (
    <div id='wrapper' className={inter.className}>  
      <Head>
        <title>{"esg | TVBS 官網"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Keywords" content="esg,esg2,esg3" />
        <meta name="description" content="esg description" />  \      
      </Head>
      <GtmNoScript/>
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
                    <Image src="/images/icon_arraw03.svg" alt="arraw" width={42} height={42}/>
                  </div>
                </div>
              </div>

              <ViewList/>

              <div className="action">
                <div className="title">參加活動GO!</div>
                <div className="txtBox">
                  <div className="txt">一起實踐永續</div>
                  <div className="arraw">
                    <Image src="/images/icon_arraw04.svg" alt="arraw" width={42} height={42}/>
                  </div>
                </div>
              </div>
            </div>

          </section>
          <section>
            <div className="ourMission">
              <div className="img"><Image src="/images/our-mission01.jpg" alt="img"  width={300} height={300}/></div>
              <div className="txtBox">
                <div className="title">Our Mission</div>
                <div className="txt">TVBS ESG永續倡議大使 <Image src="/images/icon_arraw04.svg" alt="arraw" width={42} height={42}/></div>
              </div>
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