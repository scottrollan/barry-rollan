import React from 'react';
import $ from 'jquery';
import styles from './SideNav.module.scss';

export default function SideNav() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className={styles.sideNavWrapper}>
      <div className={styles.sideNav}>
        <div>
          <i className="fas fa-copyright"></i> {year}
        </div>
        <div>Another Div</div>
      </div>
    </div>
  );
}
