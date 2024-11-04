import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link
import styles from '../styles/PartnersComponent.module.css';
const Partners = () => {
  return (
    <div>
      <div className={styles.breadcrumbContainer}>
        <div className={styles.breadcrumb}>
          <Link to="/">Home</Link> {/* Cambia a Link */}
          <span className={styles.separator}>&gt;</span>
          <span>Aliados</span>
        </div>
      </div>

      <h1 className={styles.titleAliados}>Aliados</h1>

      <div className={styles.partners}>
        <div className={styles.partner}>
          <img src="/images/huawei.png" alt="Huawei" />
          <p>Huawei</p>
        </div>
        <div className={styles.partner}>
          <img src="/images/mercado-libre.png" alt="Mercado Libre" />
          <p>Mercado Libre</p>
        </div>
        <div className={styles.partner}>
          <img src="/images/alkosto.png" alt="Alkosto" />
          <p>Alkosto</p>
        </div>
        <div className={styles.partner}>
          <img src="/images/falabella.png" alt="Falabella" />
          <p>Falabella</p>
        </div>
        <div className={styles.partner}>
          <img src="/images/ishop.png" alt="Ishop" />
          <p>Ishop</p>
        </div>
        <div className={styles.partner}>
          <img src="/images/olimpica.png" alt="Olimpica" />
          <p>Olimpica</p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
