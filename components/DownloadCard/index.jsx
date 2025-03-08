import React from 'react';
import styles from './styles.module.css';

const DownloadCard = ({ title, subtitle, context, downloadLink }) => {
    const handleDownload = () => {
        if (downloadLink) {
          window.open(downloadLink, '_blank'); // Opens the download link in a new tab
        }
      };

  return (
    <div className={styles.downloadCard}>
      <div className={styles.cardContent}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.context}>{context}</p>
      </div>
      <div className={styles.downloadButtonContainer}>
        <button className={styles.downloadButton} onClick={handleDownload}>
          Download
        </button>
      </div>
    </div>
  );
};

export default DownloadCard;
