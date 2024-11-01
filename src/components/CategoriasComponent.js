import React from 'react';
import styles from'../styles/CategoriasComponent.module.css';

function CategoriasComponent() {
  return (
    <div className={styles.categoryContainer}>
      <div className={styles.categoryTitle}>
        <h2 className={styles.title}>Categorías</h2>
      </div>
      <div className={styles.categoryGrid}>
        <div className={styles.categoryCard}>
          <div className={`${styles.categoryIcon} ${styles.smartphonesIcon}`} />
          <p className={styles.categoryName}>Smartphones</p>
        </div>
        <div className={styles.categoryCard}>
          <div className={`${styles.categoryIcon} ${styles.smartwatchesIcon}`} />
          <p className={styles.categoryName}>Smartwatches</p>
        </div>
        <div className={styles.categoryCard}>
          <div className={`${styles.categoryIcon} ${styles.camarasIcon}`} />
          <p className={styles.categoryName}>Cámaras</p>
        </div>
        <div className={styles.categoryCard}>
          <div className={`${styles.categoryIcon} ${styles.headphoneIcon}`} />
          <p className={styles.categoryName}>Auriculares</p>
        </div>
        <div className={styles.categoryCard}>
          <div className={`${styles.categoryIcon} ${styles.laptopIcon}`} />
          <p className={styles.categoryName}>Laptops</p>
        </div>
        <div className={styles.categoryCard}>
          <div className={`${styles.categoryIcon} ${styles.gamingIcon}`} />
          <p className={styles.categoryName}>Gaming</p>
        </div>
      </div>
    </div>
  );
}

export default CategoriasComponent;
