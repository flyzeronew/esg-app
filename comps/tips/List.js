import React, { Component } from "react"

function tipsList(props) {  
    const listData = props.listData;
    const appUrl = process.env.APP_URL;
    const colorMapping =props.colorMapping;
    const imgDefaultSquare = process.env.IMG_DEFAULT_SQUARE;
    return (
            <div className="list">
                <ul>
                    { listData.length > 0?
                        listData.map((item, index) => (
                            <React.Fragment key={index}>
                                { item.genre == props.genreId || props.genreId == null ?
                                    <li>
                                        <a href={`/tips/${colorMapping[item.genre-1].en_name}/${item.id}`}>
                                            <div className={`genres ${colorMapping[item.genre-1].color}`}>
                                                {colorMapping[item.genre-1].genre}
                                            </div>
                                            <div className="img">
                                                {item.tip_galleries.length > 0 ? 
                                                    <img src={item.tip_galleries[0].image_url} alt="img" width={360} height={360} loading='lazy'/>
                                                    :
                                                    <img src={imgDefaultSquare} alt="img" width={360} height={360} loading='lazy'/>
                                                }
                                            </div>
                                            <div className="detail">
                                            <div className='upImg'>
                                                <img src={`${appUrl}/images/Rectangle-grey.svg`} alt="img" width={20} height={20} loading='lazy'/>
                                            </div>
                                                <h2 className="txt">{item.title}</h2>
                                            <div className='rightImg'>
                                                <img src={`${appUrl}/images/Rectangle-grey.svg`} alt="img" width={20} height={20} loading='lazy'/>
                                            </div>
                                            </div>
                                        </a>
                                    </li>
                                :''}
                            </React.Fragment>
                        ))  
                    :''}
                </ul>
            </div>   
        )
}
export default tipsList;