import React, { Component } from "react"
function Submenu(props) {
    const appUrl = process.env.APP_URL;
    return (        
        <div className='submenuArea'>
            <div className='submenu'> 
                <div className='submenuMask'></div>
                    <a href={`${appUrl}/tips`} className={!props.genreId ? 'act':''} >全部</a>
                        {props.submenu.length > 0 ? props.submenu.map((item, index) => (
                                <a 
                                    key={index} 
                                    className={ index+1 == props.genreId ? 'act':''} 
                                    href={`${appUrl}/tips/${item.en_name}`}
                                >
                                    {item.name}
                                </a>
                            )):''
                    }
            </div>
        </div>
    )
}
export default Submenu;