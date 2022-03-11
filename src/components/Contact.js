import React from 'react';
import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <div className={styles.contactGrid}>
      <div className={styles.hello}>Hello.</div>
      <div className={styles.simple}>Keeping it simple</div>
      <div className={styles.email}>
        Email:{' '}
        <a
          className={styles.hoverable}
          href="mailto:barry@barryrollan.com?subject=Hello from the internet!"
          target="_blank"
        >
          barry@barryrollan.com
        </a>
      </div>
      <div className={styles.online}>
        Online:{' '}
        <div
          className={styles.hoverable}
          onClick={() =>
            window.open('https://www.linkedin.com/in/barry-rollan-2aa5a8/')
          }
        >
          LinkedIn
        </div>{' '}
        /{' '}
        <div
          className={styles.hoverable}
          onClick={() => window.open('https://github.com/scottrollan/')}
        >
          Github
        </div>
      </div>
    </div>
  );
}
