import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';

function Footer(props) {
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const wrapper = document.getElementById('wrapper');
      const wrapperHeight = wrapper.offsetHeight;
      const windowHeight = window.innerHeight;
      setIsFixed(wrapperHeight < windowHeight);
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  console.log(isFixed);
  return (
    <footer 
      className={`${styles.footer} ${isFixed ? styles.fixed : ''}`}
    >
      © TVBS Media Inc. All Rights Reserved <br />
      聯利媒體股份有限公司
    </footer>
  );
}
export default Footer;
