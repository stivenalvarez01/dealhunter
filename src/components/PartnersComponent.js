import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link
import './PartnersComponent.css'; // Asegúrate de crear este archivo CSS si lo necesitas

const Partners = () => {
  return (
    <div>
      <div className="breadcrumb-container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> {/* Cambia a Link */}
          <span className="separator">&gt;</span>
          <span>Aliados</span>
        </div>
      </div>

      <h1 className="title-aliados">Aliados</h1>

      <div className="partners">
        <div className="partner">
          <img src="/images/huawei.png" alt="Huawei" />
          <p>Huawei</p>
        </div>
        <div className="partner">
          <img src="/images/mercado-libre.png" alt="Mercado Libre" />
          <p>Mercado Libre</p>
        </div>
        <div className="partner">
          <img src="/images/alkosto.png" alt="Alkosto" />
          <p>Alkosto</p>
        </div>
        <div className="partner">
          <img src="/images/falabella.png" alt="Falabella" />
          <p>Falabella</p>
        </div>
        <div className="partner">
          <img src="/images/ishop.png" alt="Ishop" />
          <p>Ishop</p>
        </div>
        <div className="partner">
          <img src="/images/olimpica.png" alt="Olimpica" />
          <p>Olimpica</p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
