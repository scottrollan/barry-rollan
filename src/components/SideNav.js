import React from 'react';
import $ from 'jquery';
import styles from './SideNav.module.scss';
import variables from '../styles/custom-properties.module.scss';

export default function SideNav({ currentPage, setCurrentPage }) {
  const pageTiming = parseInt(variables.pageTiming);

  const goHome = () => {
    setCurrentPage('home');
    setTimeout(() => $(`#${currentPage}Wrapper`).hide(), pageTiming);
  };

  const today = new Date();
  const year = today.getFullYear();
  return (
    <div
      className={styles.sideNav}
      id="sideNav"
      style={{
        color: currentPage === 'home' ? 'var(--black)' : 'var(--beige)',
      }}
    >
      <div>
        <i className="fas fa-copyright"></i> {year}
      </div>
      <div
        style={{
          borderTop:
            currentPage === 'home'
              ? '1px solid var(--black)'
              : '1px solid var(--beige)',
          width: '12vh',
        }}
      ></div>
      <div
        style={{ display: currentPage === 'home' ? 'none' : 'inherit' }}
        className={styles.homeButton}
        id="homeButton"
        onClick={() => goHome()}
      >
        HOME
      </div>
      <a
        style={{ display: currentPage === 'home' ? 'inherit' : 'none' }}
        href="https://github.com/scottrollan/"
      >
        <i className="fab fa-github-square fa-2x"></i>
      </a>
    </div>
  );
}
