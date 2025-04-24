import styles from "./ArticleList.module.css";

export const Article = ({ articleData, index }) => {
    return (
        <>
            <li key={index}>
                <a href={`/view/${articleData.article_genres[0].en_name}/${articleData.id}`}>
                    <div className={styles.img}>
                        <img src={articleData.cover_img ? articleData.cover_img : process.env.IMG_DEFAULT} alt="img" width={559} height={315} loading="lazy" />
                    </div>
                    <h2 className={styles.txt}>{articleData.title}</h2>
                    <div className={styles.name}>
                        {articleData.partner != null ?
                            <>
                                <div className={styles.nameImg}>
                                    <div className={styles.img1} >
                                        <img src={articleData.partner.avatar} alt="logo" width={50} height={50} loading="lazy" />
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