import { useState ,useEffect } from 'react'
import Image from 'next/image'
import React, { Component } from "react"
import { useRouter } from 'next/router'

function ArticleList(props) {
    const router = useRouter();
    const { page = 1 } = router.query;
    const appUrl = process.env.APP_URL;
    const uri =props.genreEnName? `/view/${props.genreEnName}` :`/view`;
   
    // 計算列表數量 跳頁防呆
    const [listLength, setListLength] = useState(0);
    useEffect(() => {
        const listItems = document.querySelectorAll('.viewPage .list ul li');
        setListLength(listItems.length);
    }, []);

    return (        
        <>
            <div className='list'>
                <ul>
                    {props.articleList.length > 0 ? props.articleList.map((item, index) => (
                        <React.Fragment key={index}>
                            { item.article_genre[0].id == props.genreId || props.genreId == null ?                         
                                <li >                            
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
                                        <div className='name'>
                                            {item.partner.name !='' ? 
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
                        </React.Fragment>                     
                    )):''
                    }
                </ul>
            </div>        
            {/* 跳頁選單 */}
                {listLength >= 12 ? 
                    <div className='pageJump'>
                        <div className={`btn ${Number(page)==1 ? 'hide':''}`} >
                            <a href={`${appUrl}${uri}?page=${Number(page)-1}`} >上一頁</a>
                        </div>
                        <div className={`first ${Number(page)==1 ? 'hide':''}`}>
                            <a href={`${appUrl}${uri}?page=1`}>1</a>
                            <span>....</span>
                        </div>
                        <div className='box'>
                            <a className='act' href={`${appUrl}${uri}?page=${page}`}>{page}</a>
                            <a href={`${appUrl}${uri}?page=${Number(page)+1}`}>{Number(page)+1}</a>
                            <a href={`${appUrl}${uri}?page=${Number(page)+2}`}>{Number(page)+2}</a>
                        </div>
                        <div className='btn'>
                            <a href={`${appUrl}${uri}?page=${Number(page)+1}`} >下一頁</a>
                        </div>
                    </div>
                :''}
            {/* 跳頁選單 ed*/}
        </>
    )
}
export default ArticleList;