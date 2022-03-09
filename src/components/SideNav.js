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
          borderTop: '1px solid var(--black)',
          width: '12vh',
        }}
      ></div>
      <div
        style={{ visibility: currentPage === 'home' ? 'hidden' : 'visible' }}
        className={styles.homeButton}
        id="homeButton"
        onClick={() => goHome()}
      >
        HOME
      </div>
    </div>
  );
}
