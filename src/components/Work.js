import React from 'react';
import MetricClock from '../components/MetricClock';
import portfolio from '../data/Portfolio';
import styles from './Work.module.scss';

export default function Work() {
  const goToApp = (url) => {
    window.open(url);
  };
  return (
    <div className={styles.workGrid}>
      <div className={styles.workTitle}>WORK</div>
      <div className={styles.workWords}>
        <p>
          This is a showcase of some of my React projects, with a variety of
          compatible frontend and backend technologies
        </p>
        <p>
          I've had the pleasure of doing several projects in collaboration with
          some great talent, but everything here was created and implemented
          solely by me.
        </p>
      </div>
      <div className={styles.metricClock}>
        <MetricClock />
      </div>
      <div className={styles.portfolioList}>
        {portfolio.map((p, i) => {
          const allCapLabel = p.label.toUpperCase();
          return (
            <div key={p.href} className={styles.portfolioItem}>
              <div
                className={styles.imageWrapper}
                style={{ backgroundImage: `url('${p.src}')` }}
              >
                <div className={styles.techList}>
                  {p.techsUsed.map((t) => (
                    <div key={t} className={styles.techItem}>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.pWords} onClick={() => goToApp(p.href)}>
                <div className={styles.pLabel}>{allCapLabel}</div>
                <div className={styles.description}>{p.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
