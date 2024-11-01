import React from 'react';
import styles from '../styles/BannerPrincipal.module.css';

const BannerPrincipal = () => {
  return (
    <div className={styles.iphoneCard}>
      <div className={styles.content}>
      <div className={styles.title}> {/* Esta línea es correcta */}
      <span>IPhone 14 </span>
          <span className={styles.bold}>Pro</span>
        </div>
        <p className={styles.description}>Created to change everything for the better. For everyone</p>
        <div className={styles.discount}>
          <span>40% OFF</span>
        </div>
        <div className={styles.offer}>
          <span>Ver oferta</span>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src="images/banner-principal-iphone.png" alt="iPhone" />
      </div>
    </div>
  );
};

export default BannerPrincipal;
