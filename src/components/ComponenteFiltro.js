import React, { useState } from 'react';
import styles from '../styles/ComponenteFiltro.module.css';

const Filtro = () => {
    const [precioOpen, setPrecioOpen] = useState(true);
    const [marcaOpen, setMarcaOpen] = useState(true);
    const [almacenamientoOpen, setAlmacenamientoOpen] = useState(true);
    const [procesadorOpen, setProcesadorOpen] = useState(true);
    const [resolucionOpen, setResolucionOpen] = useState(true);
    const [ramOpen, setRamOpen] = useState(true);
    const [bateriaOpen, setBateriaOpen] = useState(true);

    return (
      <div className={styles.filtroContainer}>
        {/* Sección Precio */}
        <div className={styles.filtroSection}>
          <h3 onClick={() => setPrecioOpen(!precioOpen)}>
            Precio {precioOpen ? "▲" : "▼"}
          </h3>
          {precioOpen && (
            <div className={styles.filtroRange}>
              <input type="range" min="100000" max="10000000" />
              <div className={styles.rangeValues}>
                <span>Min: $100,000</span>
                <span>Max: $10,000,000</span>
              </div>
            </div>
          )}
        </div>
        
        {/* Sección Tipos De Marca */}
        <div className={styles.filtroSection}>
          <h3 onClick={() => setMarcaOpen(!marcaOpen)}>
            Tipos De Marca {marcaOpen ? "▲" : "▼"}
          </h3>
          {marcaOpen && (
            <>
              <input type="text" placeholder="🔍 Buscar" className={styles.searchInput} />
              <ul className={styles.checkList}>
                <li><input type="checkbox" /> Apple</li>
                <li><input type="checkbox" /> Samsung</li>
                <li><input type="checkbox" /> Xiaomi</li>
                <li><input type="checkbox" /> OPPO</li>
                <li><input type="checkbox" /> Honor</li>
                <li><input type="checkbox" /> Motorola</li>
                <li><input type="checkbox" /> Nokia</li>
                <li><input type="checkbox" /> Realme</li>
              </ul>
            </>
          )}
        </div>
  
        {/* Sección Almacenamiento */}
        <div className={styles.filtroSection}>
          <h3 onClick={() => setAlmacenamientoOpen(!almacenamientoOpen)}>
            Almacenamiento {almacenamientoOpen ? "▲" : "▼"}
          </h3>
          {almacenamientoOpen && (
            <>
              <input type="text" placeholder="🔍 Buscar" className={styles.searchInput} />
              <ul className={styles.checkList}>
                <li><input type="checkbox" /> 16GB</li>
                <li><input type="checkbox" /> 32GB</li>
                <li><input type="checkbox" /> 64GB</li>
                <li><input type="checkbox" /> 128GB</li>
                <li><input type="checkbox" /> 256GB</li>
                <li><input type="checkbox" /> 512GB</li>
              </ul>
            </>
          )}
        </div>

        {/* Sección Procesador */}
        <div className={styles.filtroSection}>
          <h3 onClick={() => setProcesadorOpen(!procesadorOpen)}>
            Procesador {procesadorOpen ? "▲" : "▼"}
          </h3>
          {procesadorOpen && (
            <ul className={styles.checkList}>
              <li><input type="checkbox" /> Intel</li>
              <li><input type="checkbox" /> AMD</li>
              <li><input type="checkbox" /> Apple M1</li>
              <li><input type="checkbox" /> Qualcomm</li>
              {/* Más opciones si es necesario */}
            </ul>
          )}
        </div>

        {/* Sección Resolución De Pantalla */}
        <div className={styles.filtroSection}>
          <h3 onClick={() => setResolucionOpen(!resolucionOpen)}>
            Resolución De Pantalla {resolucionOpen ? "▲" : "▼"}
          </h3>
          {resolucionOpen && (
            <ul className={styles.checkList}>
              <li><input type="checkbox" /> 720p</li>
              <li><input type="checkbox" /> 1080p</li>
              <li><input type="checkbox" /> 1440p</li>
              <li><input type="checkbox" /> 4K</li>
              {/* Más opciones si es necesario */}
            </ul>
          )}
        </div>

        {/* Sección Memoria RAM */}
        <div className={styles.filtroSection}>
          <h3 onClick={() => setRamOpen(!ramOpen)}>
            Memoria RAM {ramOpen ? "▲" : "▼"}
          </h3>
          {ramOpen && (
            <ul className={styles.checkList}>
              <li><input type="checkbox" /> 4GB</li>
              <li><input type="checkbox" /> 8GB</li>
              <li><input type="checkbox" /> 16GB</li>
              <li><input type="checkbox" /> 32GB</li>
              {/* Más opciones si es necesario */}
            </ul>
          )}
        </div>

        {/* Sección Capacidad De Batería */}
        <div className={styles.filtroSection}>
          <h3 onClick={() => setBateriaOpen(!bateriaOpen)}>
            Capacidad De Batería {bateriaOpen ? "▲" : "▼"}
          </h3>
          {bateriaOpen && (
            <ul className={styles.checkList}>
              <li><input type="checkbox" /> 3000mAh</li>
              <li><input type="checkbox" /> 4000mAh</li>
              <li><input type="checkbox" /> 5000mAh</li>
              <li><input type="checkbox" /> 6000mAh</li>
              {/* Más opciones si es necesario */}
            </ul>
          )}
        </div>
      </div>
    );
};

export default Filtro;
