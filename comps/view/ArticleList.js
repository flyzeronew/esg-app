import { useState ,useEffect } from 'react'
import Image from 'next/image'
import React, { Component } from "react"

function ArticleList(props) {
    const appUrl = process.env.APP_URL;
    // 計算列表數量 跳頁防呆
    const [listLength, setListLength] = useState(0);
    useEffect(() => {
        const listItems = document.querySelectorAll('.viewPage .list ul li');
        setListLength(listItems.length);
    }, []);

    console.log(props);
    return (        
        <>
            <div className='list'>
                <ul>
                    {props.articleList.length > 0 ? props.articleList.map((item, index) => (
                        <>
                            { item.view_genre.id == props.genreId || props.genreId == null ?                         
                                <li key={index}>                            
                                    <a href={item.url} target={item.is_blank === 1 ? '_blank' :'' }>
                                        <div className='img'>
                                            {item.youtube !='' ? 
                                                <div className='playIcon'>                                 
                                                    <Image src={`${appUrl}/images/play-icon.svg`} alt="play" width={50} height={50}/>
                                                </div>
                                            :''}
                                            <Image src={item.cover_img} alt="img" width={1072} height={603}/>
                                        </div>
                                        <div className='txt'>{item.title}</div>
                                        {}
                                        <div className='name'>
                                            {item.partner.logo !='' ? 
                                            <>
                                                <div className='nameImg'>
                                                    <div className='img1'>
                                                        <Image src={item.partner.logo} alt="logo" width={50} height={50}/>
                                                    </div>
                                                </div>
                                                <p>{item.partner.name}</p>
                                            </>
                                            :<p>{item.author_name}</p>}                                            
                                        </div>
                                    </a>
                                </li> :''
                            }
                        </>                        
                    )):''
                    }
                </ul>
            </div>        
            {/* 跳頁選單 */}
                {listLength >= 12 ? 
                    <div className='pageJump'>
                        <div className='box'>
                            <a className='act' href={`javascript:void(0)`}>1</a>
                            <a href={`javascript:void(0)`}>2</a>
                            <a href={`javascript:void(0)`}>3</a>
                        </div>
                        <div className='next'>
                            <a href={`javascript:void(0)`}>下一頁</a>
                        </div>
                    </div>
                :''}
            {/* 跳頁選單 ed*/}
        </>
    )
}
export default ArticleList;