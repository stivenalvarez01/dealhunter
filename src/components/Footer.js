import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link
import styles from '../styles/Footer.module.css'; // Asegúrate de importar tus estilos CSS.

function Footer() {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className={styles.footer}>
      {/* Sección de marca */}
      <div className={styles.footerBrandContainer}>
        {/* Logo y nombre en línea */}
        <div className={styles.brandHeader}>
          <img
            className={styles.footerLogo}
            src="/images/logo-amarillo-footer.png"
            alt="DealHunter Logo"
          />
          <h2 className={styles.footerTitle}>DealHunter</h2>
        </div>
        {/* Iconos sociales debajo */}
        <div className={styles.socialIcons}>
          {/* Facebook */}

          {/* Otros íconos sociales (Twitter, Instagram, TikTok) se deben agregar aquí de manera similar */}
        </div>
      </div>
      {/* Sección de categorías */}
      <div className={styles.footerSection}>
        <h3 className={styles.footerHeading}>Categorías</h3>
        <ul className={styles.footerList}>
          <li><Link className={styles.link} to="/">Smartphones</Link></li>
          <li><Link className={styles.link} to="/">Laptops</Link></li>
          <li><Link className={styles.link} to="/">Tablets</Link></li>
          <li><Link className={styles.link} to="/">Componentes</Link></li>
          <li><Link className={styles.link} to="/">Periféricos</Link></li>
          <li><Link className={styles.link} to="/">Más Categorías</Link></li>

        </ul>
      </div>
      {/* Sección de pestañas */}
      <div className={styles.footerSection}>
        <h3 className={styles.footerHeading}>Pestañas</h3>
        <ul className={styles.footerList}>
          <li><Link className={styles.link} to="/" onClick={scrollToTop}>Home</Link></li>
          <li><Link className={styles.link} to="/ofertas" onClick={scrollToTop}>Ofertas</Link></li>
          <li><Link className={styles.link} to="/contacto" onClick={scrollToTop}>Contáctanos</Link></li>
          <li><Link className={styles.link} to="/aliados" onClick={scrollToTop}>Aliados</Link></li>

        </ul>
      </div>
    </footer>
  );
}

export default Footer;
