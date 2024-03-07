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
        </>
    )
}
export default ArticleList;