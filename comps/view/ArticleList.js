import styles from "./ArticleList.module.css"
import LazyLoad from 'react-lazyload'
const appUrl = process.env.APP_URL

export const Article = ({ articleData, index }) => {
    return (
        <>
            <li key={index}>
                <a href={`/view/${articleData.article_genres[0].en_name}/${articleData.id}`}>
                    <div className={styles.img}>
                        <LazyLoad
                            width={1072}
                            height={603}
                            offset={100}
                            placeholder={<img src={process.env.IMG_DEFAULT} alt="loading..." />}
                            once
                        >
                            <img src={articleData.cover_img ? articleData.cover_img : process.env.IMG_DEFAULT} alt="img" width={559} height={315} loading="lazy" />
                        </LazyLoad>
                    </div>
                    <h2 className={styles.txt}>{articleData.title}</h2>
                    <div className={styles.name}>
                        {articleData.partner != null ?
                            <>
                                <div className={styles.nameImg}>
                                    <div className={styles.img1} >
                                        <img src={articleData.partner.avatar} alt={articleData.title} width={50} height={50} loading="lazy" />
                                    </div>
                                </div>
                                <p>{articleData.partner.name}</p>
                            </>
                            : <p>{articleData.author_name}</p>}
                    </div>
                </a>
            </li>
    
        </>
    )
}
const ArticleList = ({ articleList }) => {
    return (
        <div className={styles.list}>
            <ul>
                {articleList?.map((articleData, index) => (
                    <Article key={index} articleData={articleData} index={index}></Article>
                ))
                }
            </ul>
        </div>
    )
}


export default ArticleList;