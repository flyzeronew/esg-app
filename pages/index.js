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
        main
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