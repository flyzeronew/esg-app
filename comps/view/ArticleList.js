import Image from 'next/image'
import React, { Component } from "react"

function ArticleList(props) {
    const appUrl = process.env.APP_URL;
    return (        
        <>
            <div className='list'>
                <ul>
                    {props.articleList.length > 0 ? props.articleList.map((item, index) => (
                        <React.Fragment key={index}>
                            { item.article_genres[0].id == props.genreId || props.genreId == null ?                         
                                <li >                            
                                    <a href={`${appUrl}/view/${item.article_genres[0].en_name}/${item.id}`}>
                                        <div className='img'>
                                            <img src={item.cover_img} alt="img" width={1072} height={603} loading="lazy"/>
                                        </div>
                                        <div className='txt'>{item.title}</div>
                                        <div className='name'>
                                            {item.partner != null ? 
                                            <>
                                                <div className='nameImg'>
                                                    <div className='img1'>
                                                        <img src={item.partner.avatar} alt="logo" width={50} height={50} loading="lazy"/>
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
        </>
    )
}
export default ArticleList;