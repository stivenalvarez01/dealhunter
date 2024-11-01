import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link
import './Footer.css'; // Asegúrate de importar tus estilos CSS.

function Footer() {
  return (
    <footer className="footer">
      {/* Sección de marca */}
      <div className="footer-brand-container">
        {/* Logo y nombre en línea */}
        <div className="brand-header">
          <img
            className="footer-logo"
            src="/images/logo-amarillo-footer.png"
            alt="DealHunter Logo"
          />
          <h2 className="footer-title">DealHunter</h2>
        </div>
        {/* Iconos sociales debajo */}
        <div className="social-icons">
          {/* Facebook */}

          {/* Otros íconos sociales (Twitter, Instagram, TikTok) se deben agregar aquí de manera similar */}
        </div>
      </div>
      {/* Sección de categorías */}
      <div className="footer-section">
        <h3 className="footer-heading">Categorías</h3>
        <ul className="footer-list">
          <li>Smartphones</li>
          <li>Laptops</li>
          <li>Tablets</li>
          <li>Componentes</li>
          <li>Periféricos</li>
          <li>Más Categorías</li>
        </ul>
      </div>
      {/* Sección de pestañas */}
      <div className="footer-section">
        <h3 className="footer-heading">Pestañas</h3>
        <ul className="footer-list">
          <li><Link to="/">Home</Link></li>
          <li>Contáctanos</li>
          <li>Ofertas</li>
          <li><Link to="/aliados">Aliados</Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
