import { useState, useEffect, useCallback } from 'react'
import LazyLoad from 'react-lazyload'
import styles from './IgPosts.module.css';
import classnames from "classnames/bind";

const cx = classnames.bind(styles)
function IgPosts(props) {
    const initialData = props.data.data || []
    const initialPaging = props.data.paging || null
    const [data, setData] = useState(initialData)
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(!!initialPaging?.next)
    const [nextUrl, setNextUrl] = useState(initialPaging?.next || null)
    const appUrl = process.env.APP_URL

    // 加載更多貼文的函數
    const loadMore = useCallback(async () => {
        if (loading || !hasMore || !nextUrl) return
        
        setLoading(true)
        
        try {
            // 呼叫後端 API 來獲取下一頁資料
            const response = await fetch('/api/instagram-next', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nextUrl })
            })
            
            if (!response.ok) {
                throw new Error('Failed to fetch next page')
            }
            
            const nextPageData = await response.json()
            
            // 更新資料
            setData(prevData => [...prevData, ...nextPageData.data])
            setNextUrl(nextPageData.paging?.next || null)
            setHasMore(!!nextPageData.paging?.next)
            
        } catch (error) {
            console.error('載入下一頁失敗:', error)
            setHasMore(false)
        }
        
        setLoading(false)
    }, [loading, hasMore, nextUrl])

    // 滾動監聽
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop 
                >= document.documentElement.offsetHeight - 1000) {
                loadMore()
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [loadMore])

    return (
        <div className={cx("igPosts")}>
            <div className={cx("frameBox")}>
                <div className={cx("object")}>
                    <div className={cx("logoBox")}>
                        <img src={`${appUrl}/images/small-logo.webp`} alt="logo" />
                        <span>TVBS GOOD</span>
                    </div>
                    <div className={cx("followBtn")}>
                        <a href="https://www.instagram.com/tvbs_good" target="_blank" rel="noopener noreferrer">
                            <img src={`${appUrl}/images/small-ig.svg`} alt="logo" />
                            <span>Follow</span>
                        </a>
                    </div>
                </div>
                <div className={cx("list")}>
                    <ul>
                        {data.map((item, index) => (
                            <li key={index}>
                                <a href={item.permalink} target="_blank" rel="noopener noreferrer">
                                    <div className={cx("img")}>
                                        <LazyLoad
                                            width={360}
                                            height={360}
                                            offset={100}
                                            placeholder={<img src={process.env.IMG_DEFAULT} alt="loading..." />}
                                            once
                                        >
                                            <img src={item.thumbnail_url || item.media_url} alt={item.caption} />
                                        </LazyLoad>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* 加載更多按鈕或加載指示器 */}
                {hasMore && (
                    <div className={cx("loadMore")}>
                        {loading ? (
                            <div className={cx("loading")}>
                                <span>載入中...</span>
                            </div>
                        ) : (
                            <button 
                                className={cx("loadMoreBtn")} 
                                onClick={loadMore}
                            >
                                載入更多
                            </button>
                        )}
                    </div>
                )}
                
                {!hasMore && data.length > 0 && (
                    <div className={cx("noMore")}>
                        <span>已顯示所有貼文</span>
                    </div>
                )}
            </div>
        </div>
    )
}
export default IgPosts
