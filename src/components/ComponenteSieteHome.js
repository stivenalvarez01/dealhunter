// BannerImagen.js
import React from 'react';
import styles from '../styles/ComponenteSieteHome.module.css';

const BannerImagen = () => {
  return (
    <div className={styles.bannerContainer}>
      <img className={styles.bannerImage} src="images/banner-siete-home.png" alt="Banner" />
    </div>
  );
};

export default BannerImagen;
