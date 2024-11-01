import React from 'react';
import './Ofertas.css';
import earbudsImage from './path/to/earbuds-image.jpg';
import tabletImage from './path/to/tablet-image.jpg';

const Ofertas = () => {
  return (
    <div className="ofertas-container">
      <h2 className="ofertas-title">Ofertas</h2>
      <h3 className="ofertas-subtitle">Grandes Ofertas Del Mes</h3>
      <div className="ofertas-items">
        <div className="oferta-item">
          <img src="image/" alt="Kit de Huawei" className="oferta-image" />
          <h4>Kit de Huawei</h4>
          <p className="oferta-discount">20% OFF</p>
          <button className="oferta-button">Ver Oferta</button>
        </div>
        <div className="oferta-item">
          <img src={tabletImage} alt="Kit de Huawei" className="oferta-image" />
          <h4>Kit de Huawei</h4>
          <p className="oferta-discount">20% OFF</p>
          <button className="oferta-button">Ver Oferta</button>
        </div>
      </div>
      <div className="pagination">
        <button className="page-btn">{"<"}</button>
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <span className="page-dots">...</span>
        <button className="page-btn">12</button>
        <button className="page-btn">{">"}</button>
      </div>
    </div>
  );
};

export default Ofertas;