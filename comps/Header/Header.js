import React, { useState, useEffect } from 'react';
import SearchBar from './../SearchBar/SearchBar';
import styles from './Header.module.css';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

function Navbar(props) {
  // 變數宣告
  const searchKeyword = props.searchKeyword || '';
  const searchType = 'headerSearch';
  const menu = props.menuData ? props.menuData : '';
  const [hamBurger, setHamBurger] = useState(false);
  const [showChildMenu, setShowChildMenu] = useState(false);
  const [navScroll, setNavScroll] = useState(false);
  const [childMo, setChildMo] = useState(Array(menu.length).fill(false));
  const [currentPage, setCurrentPage] = useState('');
  const [showSearchBar, setShowSearchBar] = useState(false);
  // 變數宣告 ed
  const handleResize = () => {
    setHamBurger(false);
    setShowChildMenu(false);
  };

  // 事件動作
  const navScrollStart = () => {
    setNavScroll(window.scrollY > 0 ? true : false);
  };
  function childMenuClick(e) {
    childMenuMouseLeave();
    setShowChildMenu(e);
  }
  function hamBurgerClick() {
    setHamBurger(prev =>!prev);
  }
  function childMenuMouseLeave() {
    setShowChildMenu(false);
  }
  function searchBarClick(e) {
    setShowSearchBar(e);
  }
  // 事件動作 ed
  function childMoClick(e) {
    setChildMo((prevActive) => {
      const newActive = [...prevActive];
      newActive[e] = !newActive[e];
      return newActive;
    });
  }
 
  // resize 監聽事件
  useEffect(() => {
    setCurrentPage(location.pathname);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', navScrollStart);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', navScrollStart);
    };
  }, []);
  // resize 監聽事件 ed
  return (
    <header className={cx('header')}>
      {hamBurger ? (
        <style>
          {`
            html {
                overflow: hidden;
            }
          `}
        </style>
      ) : (
        ''
      )}
      <div className={cx('mainMenuBox')}>
        <nav className={cx('nav', hamBurger ? 'act' : navScroll ? 'act' : '')}>          
          <div className={cx('mainMenu')}>
            <div className={cx('logo')}>
              <a href="/">
                {currentPage === 'home' ? (
                  <h1>
                    <img
                      src={`/images/esg-logo.svg`}
                      alt="TVBS GOOD"
                      width={106.3}
                      height={48}
                    />
                  </h1>
                ) : (
                  <img
                    src={`/images/esg-logo.svg`}
                    alt="TVBS GOOD"
                    width={106.3}
                    height={48}
                  />
                )}
              </a>
            </div>

            {/* 手機板漢堡 */}
            <div className={cx('moMediaSharing')}>
              <div className={cx('socialMedia')}>
                <a target="_blank" href="https://www.instagram.com/tvbs_good/" >
                  <img
                    src={`/images/instagramIcon.svg`}
                    alt="IG Desk Icon"
                    width={28}
                    height={28}
                  ></img>
                </a>
                <a target="_blank" href="https://www.youtube.com/@tvbsgood">
                  <img
                    src={`/images/youtubeIcon.svg`}
                    alt="IG Desk Icon"
                    width={28}
                    height={28}
                  ></img>
                </a>
                <a href="#" onClick = {() => searchBarClick(true)}>
                  <img
                    src={`/images/search-img.svg`}
                    alt="searchImg"
                    width={28}
                    height={28}
                  ></img>
                </a>
              </div>
              <div className={cx('burgerIcon')} onClick={hamBurgerClick}>
                <img
                  src={ false===hamBurger ? '/images/icon-burger.svg' : '/images/closeMenu.svg'}
                  alt="burgerIcon"
                  width={28}
                  height={28}
                  loading="lazy"
                />
              </div>

            </div>
            {/* 手機板漢堡 ed*/}

            <div className={cx('object')}>
              {/* 主選單 */}
              <div className={cx('menu')}>
                <ul>
                  {menu.map((item, index) => (
                    <li key={index}>
                      <a
                        className={cx(currentPage === item.pathname ? 'act' : '')}
                        href={item.pathname}
                        onMouseOver = {() => {
                          childMenuClick(index),
                          searchBarClick(false)
                        }}
                        onClick = {() => childMenuClick(index)}
                      >
                        {currentPage === 'home' ? (
                          <h2>
                            {item.page}
                            {item.subMenu.length > 0 ? (
                              <img
                                className={
                                  index === showChildMenu ? cx('act') : ''
                                }
                                src={`/images/icon_arraw01.svg`}
                                alt="arraw"
                                width={8}
                                height={5}
                              />
                            ) : (
                              ''
                            )}
                          </h2>
                        ) : (
                          <>
                            {item.page}
                            {item.subMenu.length > 0 ? (
                              <img
                                className={
                                  index === showChildMenu ? cx('act') : ''
                                }
                                src={`/images/icon_arraw01.svg`}
                                alt="arraw"
                                width={8}
                                height={5}
                              />
                            ) : (
                              ''
                            )}
                          </>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* 主選單 ed */}
              
              <div 
                className={cx('socialMedia')} 
                onMouseOver = {childMenuMouseLeave}
              >
                <div>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/tvbs_good/"
                  >
                    <img
                      src={`/images/instagramIcon.svg`}
                      alt="IG Icon"
                      width={28}
                      height={28}
                    ></img>
                  </a>
                </div>
                <div>
                  <a target="_blank" href="https://www.youtube.com/@tvbsgood">
                    <img
                      src={`/images/youtubeIcon.svg`}
                      alt="Youtube Icon"
                      width={28}
                      height={28}
                    ></img>
                  </a>
                </div>
                <div>
                  <a href="#" onClick = {() => searchBarClick(true)}>
                    <img
                      src={`/images/search-img.svg`}
                      alt="searchImg"
                      width={28}
                      height={28}
                    ></img>
                  </a>
                </div>
              </div>
              {/* 搜尋 */}
            </div>
          </div>
          {/* pc子選單 */}
          {menu.map((item, index) => (
            <React.Fragment key={index}>
              {item.subMenu.length > 0 ? (
                <div
                  className={cx('childMenu',index === showChildMenu ? 'act' : '')}
                  onMouseLeave={childMenuMouseLeave}
                >
                  <div className={cx('list')}>
                    <ul>
                      {item.subMenu.map((item2, index2) => (
                        <li key={index2}>
                          <a href={item2.pathname} onClick={childMenuMouseLeave}>
                            {currentPage === 'home' ? (
                              <h3>{item2.page}</h3>
                            ) : (
                              <>{item2.page}</>
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                ''
              )}
            </React.Fragment>
          ))}
          {/* pc子選單 ed*/}
          {/* 手機板導覽列 */}
          {hamBurger ? (
            <div className={cx('menuMo')}>
              <div className={cx('list')}>
                <ul>
                  {menu.map((item, index) => (
                    <li key={index}>
                      <a
                        className={
                          currentPage?.split('/')[1] ===  item.pathname.split("/")[1] ? cx('selected') : ''
                        }
                        href={item.subMenu.length > 0 ? '#' :  item.pathname}
                        onClick={() => childMoClick(index)}
                      >
                        {item.page}
                        {item.subMenu.length > 0 ? (
                          <img
                            className={childMo[index] ? cx('act') : ''}
                            src={`/images/icon_arraw01.svg`}
                            alt="arraw"
                            width={8}
                            height={5}
                          />
                        ) : (
                          ''
                        )}
                      </a>
                      {item.subMenu.length > 0 ? (
                        <div
                          className={cx('child', childMo[index] ? 'act' : '')}
                        >
                          {childMo[index]
                            ? item.subMenu.map((item2, index2) => (
                                <a key={index2} href={item2.pathname}>
                                  {item2.page}
                                  {/* <div className={cx("line")}></div> */}
                                </a>
                              ))
                            : ''}
                        </div>
                      ) : (
                        ''
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            ''
          )}
          {/* 手機板導覽列 ed*/}
          
          <SearchBar 
              showSearchBar = {showSearchBar}
              searchType = {searchType}
              searchKeyword = {searchKeyword}
          />

        </nav>
      </div>
      <div className={cx('maskBox', showSearchBar ? 'show' : '')} onClick = {() => searchBarClick(false)}></div>
    </header>
  );
}
export default Navbar;
