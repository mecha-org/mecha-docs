import React from 'react';
import styles from './styles.module.css';


const CometBanner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.topBanner}>
        <div className={styles.logoContainer}>
            <img src="/img/landing/comet.svg" alt='Mecha Logo' />
        </div>
        <div className={styles.bannerContent}>
          <h2 className={styles.bannerTitle}>Mecha Comet</h2>
          <p className={styles.bannerSubtitle}>Revision 5</p>
          <a href='https://mecha.so/pilot' target='_blank' rel='noopener noreferrer' className={styles.bannerPilot}>For Pilot users</a>
        </div>
      </div>
      
      <div className={styles.bottomBanner}>
        <div className={styles.imageContainer}>
          {/* Placeholder for image */}
            <img src='/img/landing/comet-rev6.png'/>
        </div>
        <h3 className={styles.newTitle}>The all new Mecha Comet</h3>
        <p className={styles.newDescription}>
          Better in all ways, the next revision of Mecha Comet, coming soon.
        </p>
      </div>
      
 
    </div>
  );
};

export default CometBanner;
