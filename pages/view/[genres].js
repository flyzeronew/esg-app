
import { useState ,useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Submenu from '../../comps/view/Submenu'
import ArticleList from '../../comps/view/ArticleList'
import Header from '../../comps/Header'
import Footer from '../../comps/Footer'
import JumpPage from '../../comps/JumpPage'

const inter = Inter({ subsets: ['latin'] })
export default function Genres(props) {
    
    const router = useRouter();
    const page = Number(props.page);
    const viewSubmenu = props.viewSubmenuData;    
    const articleList = props.articlesData.articles.slice(1);
    const genreEnName=String(props.genreEnName);
    const uri =`/view/${genreEnName}`;
    const genreData = viewSubmenu.find(item => item.en_name === genreEnName);    
    const genreId = genreData ? genreData.id :'';
    const genreName = genreData ? genreData.name :'';
    const genreDescription =genreData ? genreData.description :'';
    const [listLength, setListLength] = useState(0);

    useEffect(() => {
        if (!genreData) {
            router.push('/404');
        }
        const listItems = document.querySelectorAll('.viewPage .list ul li');
        setListLength(listItems.length);
    }, []);
    
    // 頁面識別
    const thisPage='view';
    return (
    <div id='wrapper' className={inter.className}> 
        <Head>
            <title>{`${genreName} - TVBS ESG專區`}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="Keywords" content="" />
            <meta name="description" content={genreDescription}/>        
        </Head>
        <Header thisPage={thisPage} menuData={props.menu}/>
        <main>
            <div className="viewPage">
                {/* 大標 */}
                <div className="sharedBanner">
                    <div className="mask"></div>
                    <div className="box">
                        <div className="title">{genreName}</div>
                        <div className="txt">
                            <p>{genreDescription}</p>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
                {/* 大標 ed*/}
                {/* 分類標籤 */}
                    <Submenu  submenu={viewSubmenu} genreEnName={genreEnName} genreId={genreId}/>
                {/* 分類標籤 ed*/}
                {/* 文章列表 */}                
                    <ArticleList  articleList={articleList} genreId={genreId}/>
                {/* 文章列表 ed */}
                {/* 跳頁選單 */}
                    {listLength >= 12 ? <JumpPage uri={uri}/> :''}
                {/* 跳頁選單 ed */}
            </div>
            
        </main>
        <div className="footerLine">
            <div className="box"></div>
        </div>
        <Footer />
    </div>
    );
}

export async function getServerSideProps(context) {
    const { query } = context;
    const page = query.page ? query.page : 1;
    const genreEnName = context.query.genres;
    const menuUrl = new URL('/api/menu', process.env.APP_URL);
    const menuRes = await fetch(menuUrl);
    const menu = await menuRes.json();
    // 線上資料
    // submenu
    const viewSubmenuUrl = new URL('/api/article-genres', process.env.APP_URL);
    const viewSubmenuRes = await fetch(viewSubmenuUrl);    
    const viewSubmenuData = await viewSubmenuRes.json();
    // list
    const articlesUrl = new URL(`/api/articles?page=${page}`, process.env.APP_URL);
    const articlesRes = await fetch(articlesUrl);    
    const articlesData = await articlesRes.json();
    
    return {
        props: {
            menu,viewSubmenuData,articlesData,genreEnName,page
        },
    };
}