import React, { Component } from "react"
import { useRouter } from 'next/router'
import styles from "./Pagination.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles)
function Pagination(props) {
    const router = useRouter();
    const { page = 1 } = router.query;
    const appUrl = process.env.APP_URL;
    const uri = props.uri;
    const pageCount = props.pageCount;
    const btnCount = pageCount < 3 ? pageCount : ( page > 2 && page < pageCount-2 ? 2 : 3 );

   //插入跳頁按鈕顯示按鈕數量
    const jumpBtns = [];
    for (let i = 1; i <= btnCount; i++) {
        jumpBtns.push(i);
    }    
    return (        
        <div className={cx("pageJump")}>
            <div className={cx("btn",Number(page)==1 ? 'hide':'' )} >
                <a href={`${appUrl}${uri}?page=${Number(page)-1}`} >‹</a>
            </div>
            <div className={cx("first",Number(page)==1 ? 'hide':'' )}>
                <a href={`${appUrl}${uri}`}>1</a>
                {pageCount > 3 ? <span>..</span>:''}
            </div>
            <div className={cx("box")}>
                {/* 倒數第1-2頁補頁數 */}
                { pageCount > 2 && page == pageCount ?
                    <>
                        {
                            pageCount-2 === 1 ? '':
                            <a href={`${appUrl}${uri}?page=${pageCount-2}`}>{pageCount-2}</a>
                        }                        
                    </>
                :''}
                {/* 倒數第1-2頁補頁數 ed*/}
                
                { page > 2  ?
                    <>
                        <a href={`${appUrl}${uri}?page=${Number(page)-1}`}>{Number(page)-1}</a>
                    </>
                :''}
                {jumpBtns.map((item, index) => (
                    <React.Fragment key={index}>                        
                        { Number(page)+index <= pageCount?                        
                            <a 
                                className={cx(item==1 ? 'act':'')}
                                href={item > 1 ? `${appUrl}${uri}?page=${Number(page)+index}`:''}
                            >
                                {Number(page)+index}
                            </a>                        
                            :''                        
                        }
                    </React.Fragment>
                ))}
            </div>

            {
                page < pageCount-2 ? 
                    <div className={cx("last")}>
                        <span>..</span>
                        <a href={`${appUrl}${uri}?page=${pageCount}`}>{pageCount}</a>                
                    </div>
                : ''
            }
            <div className={cx("btn")}>
                {   
                    Number(page)+1 <= pageCount ? 
                    <a href={`${appUrl}${uri}?page=${Number(page)+1}`} >›</a>                    
                    :''                    
                }                
            </div>
        </div>
    )
}
export default Pagination;