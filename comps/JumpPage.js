import React, { Component } from "react"
import { useRouter } from 'next/router'

function JumpList(props) {
    const router = useRouter();
    const { page = 1 } = router.query;
    const appUrl = process.env.APP_URL;
    const uri = props.uri;
    const pageCount = props.pageCount;
    console.log(pageCount);
    
   //插入跳頁按鈕顯示按鈕數量
    const jumpBtns = [];
    for (let i = 1; i <= 3; i++) {
        jumpBtns.push(i);
    }    
    return (        
        <div className='pageJump'>
            <div className={`btn ${Number(page)==1 ? 'hide':''}`} >
                <a href={`${appUrl}${uri}?page=${Number(page)-1}`} >上一頁</a>
            </div>
            <div className={`first ${Number(page)==1 ? 'hide':''}`}>
                <a href={`${appUrl}${uri}?page=1`}>1</a>
                <span>..</span>
            </div>
            <div className='box'>
                {/* 倒數第1-2頁補頁數 */}
                { page == pageCount ?
                    <>
                        <a href={`${appUrl}${uri}?page=${pageCount-2}`}>{pageCount-2}</a>
                        <a href={`${appUrl}${uri}?page=${pageCount-1}`}>{pageCount-1}</a>
                    </>
                :''}
                { page == pageCount-1 ?
                    <>
                        <a href={`${appUrl}${uri}?page=${pageCount-2}`}>{pageCount-2}</a>
                    </>
                :''}
                {/* 倒數第1-2頁補頁數 ed*/}

                {jumpBtns.map((item, index) => (
                    <React.Fragment key={index}>                        
                        { Number(page)+index <= pageCount?                        
                            <a 
                                className={item==1 ? 'act':''}
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
                    <div className='last'>
                        <span>..</span>
                        <a href={`${appUrl}${uri}?page=${pageCount}`}>{pageCount}</a>                
                    </div>
                : ''
            }
            <div className='btn'>
                {   
                    Number(page)+1 <= pageCount ? 
                    <a href={`${appUrl}${uri}?page=${Number(page)+1}`} >下一頁</a>                    
                    :
                    <span className='lastTxt'>最後一頁</span>
                }                
            </div>
        </div>
    )
}
export default JumpList;