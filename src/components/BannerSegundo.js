import React from 'react';
import styles from '../styles/BannerSecundario.module.css';

const BannerSecundario = () => {
  return (
    <div className={styles.gridLayout}>
      {/* Columna izquierda */}
      <div className={styles.eftColumn}>
        {/* PlayStation Section */}
        <div className={styles.playstationSection}>
          <img src='/images/ps5.png' alt="PlayStation 5" />
          <div className={styles.productInfo}>
            <h2>Playstation 5</h2>
            <p>35% OFF</p>
          </div>
        </div>

        {/* Small Products Section */}
        <div className={styles.smallProducts}>
          {/* AirPods Section */}
          <div className={styles.airpodsSection}>
            <img src='/images/airpods.png' alt="Apple AirPods Max" />
            <div className={styles.productInfo}>
              <h2>Apple <br />AirPods <span>Max</span></h2>
              <p>10% OFF</p>
            </div>
          </div>

          {/* Vision Pro Section */}
          <div className={styles.visionSection}>
            <img src='/images/visionpro.png' alt="Apple Vision Pro" />
            <div className={styles.productInfo}>
              <h2>Apple <br />Vision <span>Pro</span></h2>
              <p>15% OFF</p>
            </div>
          </div>
        </div>
      </div>

      {/* Columna derecha - MacBook */}
      <div className={styles.rightColumn}>
        <div className={styles.macbookContent}>
          <div className={styles.productInfo}>
            <h2>Macbook <span>Air</span></h2>
            <p>15% OFF</p>
            <button className={styles.offerButton}>Ver Oferta</button>
          </div>
          <div className={styles.macbookImageContainer}>
            <div className={styles.macbookImage}>
              <img src='/images/macbook.png' alt="MacBook Air" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSecundario;
