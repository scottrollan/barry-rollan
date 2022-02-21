import React from 'react';
import SideNav from './components/SideNav';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <SideNav />
      <div className={styles.homeGrid}>
        <div className={styles.aboutSection}>
          <div className={styles.name}>Barry Rollan</div>
          <div className={styles.title}>Full-Stack Developer</div>
          <div className={styles.tagline}>
            Creating unique digital experiences in Marietta, Georgia
          </div>
        </div>
        <div className={styles.menuOptions}>
          <div className={styles.option}>WORK</div>
          <div className={styles.option}>ABOUT</div>
          <div className={styles.option}>CONTACT</div>
        </div>
      </div>
    </div>
  );
}

export default App;
