import { useState ,useEffect } from 'react'

function Navber(props) {
    const menu = props.menuData.data;
    const thisPage = props.thisPage;
    console.log(menu);    
    // 變數宣告
    const [hamBurger, setHamBurger] = useState(false);
    const [showChildMenu, setShowChildMenu] = useState(false);
    // 變數宣告 ed

    // 事件動作
    function childMenuClick(e) {
        if (e.currentTarget.querySelector('img')) {
            setShowChildMenu(true);
        }else{
            setShowChildMenu(false);
        }
    }
    function hamBurgerClick(e) {
        setHamBurger(!hamBurger);
    }
    function childMenuMouseLeave() {
        setShowChildMenu(false);
    };
    // 事件動作 ed

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
                <nav className={hamBurger ? 'act':''}>
                    <div className="mainMenu">
                        <div className="logo">
                            <a href="/">
                                <img src="images/esg-logo.png" alt="logo" width={187} height={48}/>
                            </a>
                        </div>

                        {/* 手機板漢堡 */}
                        <div className="burgerIcon" onClick={hamBurgerClick}>
                            <img src="images/icon-burger.svg" alt="img" width={50} height={50}/>
                        </div>                        

                        {/* 手機板漢堡 ed*/}
                        <div className="object">
                            {/* 主選單 */}
                            <div className="menu">
                                <ul>
                                    {menu.map((item, index) => (
                                        <li key={index} >
                                            <a className={thisPage==item.page_name ? 'act':''} href={item.url} onMouseOver={childMenuClick}>
                                                {item.title}
                                                {item.child.length>0 ? <img className={showChildMenu ? 'act':''} src="images/icon_arraw01.svg" alt="arraw" width={8} height={5}/> : ''}
                                            </a>
                                        </li>
                                    ))}                                
                                </ul>
                            </div>
                            {/* 搜尋 */}
                            <div className="iconSearch">
                                <img src="images/icon_search.svg" alt="icon" width={30} height={30}/>
                            </div>
                        </div>
                    </div>
                    {/* pc子選單 */}
                    <div className={`childMenu ${showChildMenu ? 'act':''}`} onMouseLeave={childMenuMouseLeave}>
                        <ul>
                            {menu.map((item, index) => (
                                item.child.map((item2, index2) => (
                                    <li key={index2}>
                                        <a href={item2.url} onClick={childMenuMouseLeave}>
                                            {item2.title}
                                        </a>
                                    </li>
                                ))
                            ))}                           
                        </ul>
                    </div>   
                    {/* pc子選單 ed*/}

                    {
                        hamBurger ? 
                            <div className="menuMo">
                                <div className="list">                                
                                    <ul>
                                        <li>
                                            1
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        :''
                    }
                </nav>
            </header>
        )
}
export default Navber;