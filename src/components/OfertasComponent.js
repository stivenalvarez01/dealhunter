import React from 'react';
import styles from'../styles/OfertasComponent.module.css';


const Ofertas = () => {
  return (
    <div className={styles.ofertasContainer}>
      <h2 className={styles.ofertasTitle}>Ofertas</h2>
      <h3 className={styles.ofertasSubtitle}>Grandes Ofertas Del Mes</h3>
      <div className={styles.ofertasItems}>
        <div className={styles.ofertaitem}>
          <img src="images/airpods.png" alt="Kit de Huawei" className={styles.ofertaImage} />
          <h4>Kit de Huawei</h4>
          <p className={styles.ofertaDiscount}>20% OFF</p>
          <button className={styles.ofertaButton}>Ver Oferta</button>
        </div>
        <div className={styles.ofertaItem}>
          <img src="images/tablet.png" alt="Kit de Huawei" className={styles.ofertaImage} />
          <h4>Kit de Huawei</h4>
          <p className={styles.ofertaDiscount}>20% OFF</p>
          <button className={styles.ofertaButton}>Ver Oferta</button>
        </div>
      </div>
      <div className={styles.pagination}>
        <button className={styles.pageBtn}>{"<"}</button>
        <button className={styles.pagebtn.active}>1</button>
        <button className={styles.pageBtn}>2</button>
        <span className={styles.pageDots}>...</span>
        <button className={styles.pageBtn}>12</button>
        <button className={styles.pageBtn}>{">"}</button>
      </div>
    </div>
  );
};

export default Ofertas;