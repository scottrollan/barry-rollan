import React from 'react';
import $ from 'jquery';
import styles from './SideNav.module.scss';
import variables from '../styles/custom-properties.module.scss';

export default function SideNav({ currentPage, goToPage }) {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div
      className={styles.sideNav}
      id="sideNav"
      // style={{
      //   color: currentPage === 'home' ? 'var(--black)' : 'var(--beige)',
      // }}
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
        onClick={() => goToPage('home')}
      >
        HOME
      </div>
      <div
        className={styles.icons}
        style={{
          display: currentPage === 'home' ? 'inherit' : 'none',
        }}
      >
        <a
          href="https://github.com/scottrollan/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fab fa-github-square fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/barry-rollan-2aa5a8/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </div>
  );
}
