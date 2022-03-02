import React from 'react';
import $ from 'jquery';
import styles from './SideNav.module.scss';

export default function SideNav({ currentPage }) {
  const goHome = () => {
    console.log(currentPage);
    $(`#${currentPage}Wrapper`).removeClass('pageUp').addClass('pageDown');
    setTimeout(() => {
      $(`#${currentPage}Wrapper`).hide();
      $('#sideNav').removeClass('darkMode');

      $('.home').addClass('fadeOn');
    }, 550);
  };

  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className={styles.sideNav} id="sideNav">
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
        className={styles.homeButton}
        id="homeButton"
        onClick={() => goHome()}
      >
        HOME
      </div>
    </div>
  );
}