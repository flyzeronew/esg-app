import { useState ,useEffect } from 'react'
import React, { Component } from "react"
import { useRouter } from 'next/router'

function JumpList(props) {
    const router = useRouter();
    const { page = 1 } = router.query;
    const appUrl = process.env.APP_URL;
    const uri =props.genreEnName? `/view/${props.genreEnName}` :`/view`;
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
                <span>....</span>
            </div>
            <div className='box'>
                {jumpBtns.map((item, index) => (
                    <a 
                        key={index} 
                        className={item==1 ? 'act':''} 
                        href={item > 1 ? `${appUrl}${uri}?page=${Number(page)+index}`:''}
                    >
                        {Number(page)+index}
                    </a>
                ))}
            </div>
            <div className='btn'>
                <a href={`${appUrl}${uri}?page=${Number(page)+1}`} >下一頁</a>
            </div>
        </div>
    )
}
export default JumpList;