import styles from './SharedBanner.module.css'
function SharedBanner({title, description}) {
    return (        
        <div className={styles.sharedBanner}>
            <div className={styles.mask}></div>
            <div className={styles.box}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.txt}>
                    <p>{description}</p>
                    <div className={styles.line}></div>
                </div>
            </div>
        </div>
    )
}
export default SharedBanner;