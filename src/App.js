import React from 'react';
import SideNav from './components/SideNav';
import About from './components/About';
import $ from 'jquery';
import styles from './App.module.scss';
import './Main.css';

function App() {
  const goToPage = (page) => {
    $(`#${page}Wrapper`).addClass('pageUp');
    $('#sideNav').css({
      color: 'var(--beige)',
      backgroundColor: 'var(--black)',
    });
  };

  return (
    <div className={styles.App}>
      <div className={styles.homeGrid} id="homeGrid">
        <div className={styles.aboutSection}>
          <div className={styles.name}>Barry Rollan</div>
          <div className={styles.title}>Full-Stack Developer</div>
          <div className={styles.tagline}>
            Creating unique digital experiences in Marietta, Georgia
          </div>
        </div>
        <div className={styles.menuOptions}>
          <div className={styles.option}>WORK</div>
          <div className={styles.option} onClick={() => goToPage('about')}>
            ABOUT
          </div>
          <div className={styles.option}>CONTACT</div>
        </div>
        <div className={styles.navWrapper}>
          <SideNav />
        </div>
        <div className={[`${styles.aboutWrapper} notHome`]} id="aboutWrapper">
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
