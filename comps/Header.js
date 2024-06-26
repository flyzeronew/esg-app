import { useState ,useEffect} from 'react'
import React, { Component } from "react"

function Navber(props) {  
    // 變數宣告
    const appUrl = process.env.APP_URL;
    const menu = props.menuData;
    const thisPage = props.thisPage;   
    const [hamBurger, setHamBurger] = useState(false);
    const [showChildMenu, setShowChildMenu] = useState(false);
    const [navScroll, setNavScroll] = useState(false);
    const [childMo, setChildMo] = React.useState(Array(menu.length).fill(false));
    const [mainMenuHeight, setMainMenuHeight] = useState(132);
    // 變數宣告 ed

    // resize 監聽事件
    useEffect(() => {
        const handleResize = () => {
            updateMainMenuHeight();
            setHamBurger(false);
            setShowChildMenu(false);
        };
        const updateMainMenuHeight = () => {
            const newMainMenuHeight = document.querySelector('.mainMenu').clientHeight;
            setMainMenuHeight(newMainMenuHeight);
        };
        updateMainMenuHeight();
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', navScrollStart);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', navScrollStart);
        };
    }, []); 
    // resize 監聽事件 ed

    // 事件動作
    const navScrollStart = () => {
        setNavScroll(window.scrollY > 0 ? true : false);
    };
    function childMenuClick(e) {
        setShowChildMenu(e);
    }
    function hamBurgerClick(e) {
        setHamBurger(!hamBurger);
    }
    function childMenuMouseLeave() {
        setShowChildMenu(false);
    };
    // 事件動作 ed
    function childMoClick(e) {
        setChildMo((prevActive) => {
            const newActive = [...prevActive];
            newActive[e] = !newActive[e];
            return newActive;
        });
    }
    return (
            <header>                
                { hamBurger ?  
                    <style>
                        {`
                            html {
                                overflow: hidden;
                            }
                        `}
                    </style>
                :''}
                <div className="mainMenuBox" style={{height:mainMenuHeight}}></div>
                <nav className={hamBurger ? 'act': (navScroll ? 'act' : '')}>                    
                    <div className="mainMenu">
                        <div className="logo">
                            <a href="/">
                                { thisPage === 'home' ? 
                                    <h1>
                                        <img src={`${appUrl}/images/esg-logo.svg`} alt="TVBS GOOD" width={106.3} height={48} />
                                    </h1>
                                :
                                    <img src={`${appUrl}/images/esg-logo.svg`} alt="TVBS GOOD" width={106.3} height={48} />                                
                                }
                            </a>
                        </div>

                        {/* 手機板漢堡 */}
                        <div className="burgerIcon" onClick={hamBurgerClick}>
                            <img src={`${appUrl}/images/icon-burger.svg`} alt="img" width={187} height={48} loading='lazy'/>
                        </div>                        

                        {/* 手機板漢堡 ed*/}
                        <div className="object">
                            {/* 主選單 */}
                            <div className="menu">
                                <ul>
                                    {menu.map((item, index) => (
                                        <li key={index} >
                                            <a className={thisPage==item.page_name ? 'act':''} href={item.url} onMouseOver={() => childMenuClick(index)} onClick={() => childMenuClick(index)}>
                                                { thisPage === 'home' ? 
                                                    <h2>
                                                        {item.title}
                                                        {item.child.length > 0 ? <img className={index === showChildMenu ? 'act':''} src={`${appUrl}/images/icon_arraw01.svg`} alt="arraw" width={8} height={5}/> : ''}
                                                    </h2>
                                                    :
                                                    <>
                                                        {item.title}
                                                        {item.child.length > 0 ? <img className={index === showChildMenu ? 'act':''} src={`${appUrl}/images/icon_arraw01.svg`} alt="arraw" width={8} height={5}/> : ''}
                                                    </>                                                    
                                                }                                                
                                            </a>
                                        </li>
                                    ))}                                
                                </ul>
                            </div>
                            {/* 搜尋 */}
                            {/* <div className="iconSearch">
                                <img src={`${appUrl}/images/icon_search.svg`} alt="icon" width={30} height={30}/>
                            </div> */}
                        </div>
                    </div>
                    {/* pc子選單 */}

                            {menu.map((item, index) => (
                                <React.Fragment key={index}> 
                                    {
                                        item.child.length > 0 ?  
                                        <div className={`childMenu ${index === showChildMenu ? 'act':''}`} onMouseLeave={childMenuMouseLeave}> 
                                            <ul>
                                                {
                                                    item.child.map((item2, index2) => (
                                                        <li key={index2}>
                                                            <a href={item2.url} onClick={childMenuMouseLeave}>
                                                                { thisPage === 'home' ? 
                                                                    <h3>
                                                                        {item2.title}
                                                                    </h3>
                                                                    :
                                                                    <>
                                                                        {item2.title}
                                                                    </>
                                                                }
                                                            </a>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                            </div>
                                        :''
                                    }
                                </React.Fragment>                          
                            ))}

                    
                    {/* pc子選單 ed*/}

                    {/* 手機板導覽列 */}
                    {
                        hamBurger ? 
                            <div className="menuMo">                                
                                {/* <div className="search">
                                    <img src={`${appUrl}/images/icon_search.svg`} alt="icon" width={30} height={30}/>
                                    <input id="searchInput" type="text" placeholder="搜尋"  />
                                </div> */}
                                <div className="list">
                                    <ul>
                                        {menu.map((item, index) => (
                                            <li key={index} >
                                                <a className={thisPage==item.page_name ? 'act':''} href={item.child.length>0 ? '#':item.url} onClick={() => childMoClick(index)} >
                                                    {item.title}
                                                    {item.child.length>0 ? <img className={childMo[index] ? 'act':''} src={`${appUrl}/images/icon_arraw01.svg`} alt="arraw" width={8} height={5}/> : ''}
                                                </a>
                                                {
                                                    item.child.length>0 ?
                                                        <div className={`child ${childMo[index] ? 'act':''}`}>
                                                            {
                                                                childMo[index] ? 
                                                                    item.child.map((item2, index2) => (
                                                                        <a key={index2} href={item2.url}>
                                                                            {item2.title}
                                                                            <div className="line"></div>
                                                                        </a>
                                                                    )) 
                                                                :''
                                                            }
                                                        </div>
                                                    :''
                                                }                                                
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        :''
                    }
                    {/* 手機板導覽列 ed*/}
                </nav>
            </header>
        )
}
export default Navber;