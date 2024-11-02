import React, { useState } from 'react';
import styles from '../styles/OfertasComponent.module.css';

const Ofertas = () => {
  // Estados para controlar el slide actual en cada sección
  const [currentSlideMonth, setCurrentSlideMonth] = useState(0);
  const [currentSlideDay, setCurrentSlideDay] = useState(0);
  const [currentSlideHalloween, setCurrentSlideHalloween] = useState(0);

  // Datos de las ofertas para cada slider
  const monthOffers = [
    { id: 1, image: 'images/airpods.png', title: 'Kit de Huawei', discount: '20% OFF' },
    { id: 2, image: 'images/tablet.png', title: 'Kit de Huawei', discount: '20% OFF' },
    { id: 3, image: 'images/audifonos.png', title: 'Kit de Huawei', discount: '15% OFF' },
    { id: 4, image: 'images/reloj.png', title: 'Kit de Huawei', discount: '10% OFF' },
  ];

  const dayOffers = [
    { id: 1, image: 'images/audifonos.png', title: 'Kit de Huawei', discount: '15% OFF' },
    { id: 2, image: 'images/tablet.png', title: 'Kit de Huawei', discount: '15% OFF' },
    { id: 3, image: 'images/airpods.png', title: 'Kit de Huawei', discount: '20% OFF' },
    { id: 4, image: 'images/reloj.png', title: 'Kit de Huawei', discount: '10% OFF' },
  ];

  const halloweenOffers = [
    { id: 1, image: 'images/airpods.png', title: 'Kit de Huawei', discount: '25% OFF' },
    { id: 2, image: 'images/audifonos.png', title: 'Kit de Huawei', discount: '25% OFF' },
    { id: 3, image: 'images/tablet.png', title: 'Kit de Huawei', discount: '15% OFF' },
    { id: 4, image: 'images/reloj.png', title: 'Kit de Huawei', discount: '20% OFF' },
  ];

  // Funciones para navegar entre slides en cada sección
  const handlePrevSlide = (setSlide, currentSlide, offers) => {
    setSlide((prevSlide) => (prevSlide === 0 ? offers.length - 2 : prevSlide - 2));
  };

  const handleNextSlide = (setSlide, currentSlide, offers) => {
    setSlide((prevSlide) => (prevSlide >= offers.length - 2 ? 0 : prevSlide + 2));
  };

  // Componente para renderizar un slider de ofertas
  const Slider = ({ title, offers, currentSlide, setCurrentSlide }) => (
    <div className={styles.sliderContainer}>
      <h3 className={styles.ofertasSubtitle}>{title}</h3>
      <div className={styles.ofertasItems}>
        {/* Mostrar dos ofertas a la vez */}
        {offers.slice(currentSlide, currentSlide + 2).map((oferta) => (
          <div key={oferta.id} className={styles.ofertaItem}>
            <img src={oferta.image} alt={oferta.title} className={styles.ofertaImage} />
            <div className={styles.ofertaText}>
              <h4 className={styles.ofertaTitle}>{oferta.title}</h4>
              <p className={styles.ofertaDiscount}>{oferta.discount}</p>
              <button className={styles.ofertaButton}>Ver Oferta</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.slideControls}>
        <button className={styles.slideButton} onClick={() => handlePrevSlide(setCurrentSlide, currentSlide, offers)}>{"<"}</button>
        <button className={styles.slideButton} onClick={() => handleNextSlide(setCurrentSlide, currentSlide, offers)}>{">"}</button>
      </div>
    </div>
  );

  return (
    <div className={styles.ofertasContainer}>
      <h2 className={styles.ofertasTitle}>Ofertas</h2>

      {/* Slider de Ofertas del Mes */}
      <Slider
        title="Grandes Ofertas Del Mes"
        offers={monthOffers}
        currentSlide={currentSlideMonth}
        setCurrentSlide={setCurrentSlideMonth}
      />

      {/* Slider de Ofertas del Día */}
      <Slider
        title="Grandes Ofertas Del Día"
        offers={dayOffers}
        currentSlide={currentSlideDay}
        setCurrentSlide={setCurrentSlideDay}
      />

      {/* Slider de Ofertas para Halloween */}
      <Slider
        title="Grandes Ofertas Para Navidad"
        offers={halloweenOffers}
        currentSlide={currentSlideHalloween}
        setCurrentSlide={setCurrentSlideHalloween}
      />
    </div>
  );
};

export default Ofertas;
