import React, { useState } from 'react';
import SideNav from './components/SideNav';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import $ from 'jquery';
import styles from './App.module.scss';
import './Main.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const goToPage = (page) => {
    setCurrentPage(page);
    $('.home').addClass('fadeOut');
    $(`#${page}Wrapper`).show().removeClass('pageDown').addClass('pageUp');
    $('#sideNav').addClass('darkMode');
  };

  return (
    <div className={styles.App}>
      <div className={styles.homeGrid} id="homeGrid">
        <div className={[`${styles.aboutSection} home`]}>
          <div className={styles.name}>Barry Rollan</div>
          <div className={styles.title}>Full-Stack Developer</div>
          <div className={styles.tagline}>
            Creating unique digital experiences in Marietta, Georgia
          </div>
        </div>
        <div className={[`${styles.menuOptions} home`]}>
          <div className={styles.option} onClick={() => goToPage('work')}>
            WORK
          </div>
          <div className={styles.option} onClick={() => goToPage('about')}>
            ABOUT
          </div>
          <div className={styles.option} onClick={() => goToPage('contact')}>
            CONTACT
          </div>
        </div>
        <div className={[`${styles.navWrapper}`]}>
          <SideNav currentPage={currentPage} />
        </div>
        <div className={[`${styles.pageWrapper} notHome`]} id="workWrapper">
          <Work />
        </div>
        <div className={[`${styles.pageWrapper} notHome`]} id="aboutWrapper">
          <About />
        </div>
        <div className={[`${styles.pageWrapper} notHome`]} id="contactWrapper">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
