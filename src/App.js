import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import SideNav from './components/SideNav';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import styles from './App.module.scss';
import animations from './Animations.module.scss';

const currentURL = window.location.href;
const history = window.history;

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const goToPage = (page) => {
    if (page !== 'home') {
      history.pushState(null, '', currentURL);
    }
    setCurrentPage(page);
    $(`#${page}Wrapper`).hide().show();
  };

  window.addEventListener('popstate', (e) => {
    e.preventDefault();
    console.log(currentPage);
    setCurrentPage('home');
    history.replaceState(null, '');
  });

  useEffect(() => {
    $('#workWrapper').hide();
    $('#aboutWrapper').hide();
    $('#contactWrapper').hide();
  }, []);

  return (
    <div className={styles.appWrapper} id="home">
      <div className={[`${styles.home} home`]}>
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
        {[
          { title: 'work', page: <Work /> },
          { title: 'about', page: <About /> },
          { title: 'contact', page: <Contact /> },
        ].map((opt, i) => {
          const option = opt.title;

          return (
            <div
              key={`${option}${i}`}
              className={[
                `${styles.pageWrapper} ${
                  currentPage === option
                    ? animations.pageUp
                    : animations.pageDown
                }`,
              ]}
              id={`${option}Wrapper`}
            >
              {opt.page}
            </div>
          );
        })}

        <div className={[`${styles.aboutSection} home`]}>
          <div className={styles.name}>Barry Rollan</div>
          <div className={styles.title}>Full-Stack Developer</div>
          <div className={styles.tagline}>
            Creating unique digital experiences in Marietta, Georgia
          </div>
        </div>
      </div>
      <SideNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
