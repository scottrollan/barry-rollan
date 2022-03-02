import React from 'react';
import photo from '../assets/photo.jpg';
import styles from './About.module.scss';

export default function About() {
  return (
    <div className={styles.aboutGrid} id="about">
      <div className={styles.aboutTitle}>About</div>
      <div className={styles.imageWrapper}>
        <img src={photo} alt="" />
      </div>
      <div className={styles.aboutMeWords}>
        <p>
          My name is Barry and I live just outside Atlanta (Georgia, United
          States).
        </p>

        <p>
          Learning to master new, and often difficult, skills has been a
          lifelong penchant for me. I love to challenge myself to learn, then to
          apply that learning, even if it's just for fun. Whether it’s studying
          a new language, mastering sudoku or the Rubik’s cube, creating
          micro-climates for native plants, or playing my favorite stealth video
          games (for too long, probably), I like figuring things out.
        </p>
        <p>
          In early 2019, I completed the certification program of Full Stack
          Development accredited by the Georgia Institute of Technology and
          Trilogy Education. Since then, I've completed several projects and
          expanded my expertise in both frontend and backend technologies.
        </p>
        <p>I'm handy at:</p>
        <ul>
          <li>React &#38; React Native</li>
          <li>Javascript &#38; jQuery </li>
          <li>CSS &#38; Sass</li>
          <li>Node, Axios &#38; Express</li>
          <li>Google Firebase</li>
          <li>Sanity CMS</li>
        </ul>
      </div>
      {/* <div className={styles.navWrapper}>
        <SideNav onPage="about" pageOut="pageDown" />
      </div> */}
    </div>
  );
}
