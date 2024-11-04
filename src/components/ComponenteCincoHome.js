import React from 'react';
import styles from '../styles/ComponenteCincoHome.module.css';

const CardRow = () => {
  const products = [
    {
      title: 'Kit de Huawei',
      description: 'El kit de Huawei incluye audífonos inalámbricos de alta calidad y un smartwatch elegante, ofreciendo rendimiento excepcional y funciones inteligentes en un solo paquete.',
      image: '/images/reloj.png'
    },
    {
      title: 'Ipad Pro',
      description: 'El iPad Pro ofrece una impresionante pantalla Liquid Retina, rendimiento excepcional, multitarea avanzada y una experiencia fluida, ideal para profesionales y creativos.',
      image: '/images/tablet.png'
    },
    {
      title: 'Samsung Galaxy A15',
      description: 'El Samsung Galaxy A15 cuenta con una vibrante pantalla, un rendimiento sólido, cámara versátil y una experiencia de uso fluida, todo en un diseño elegante y accesible.',
      image: 'https://via.placeholder.com/371x390'
    },
    {
      title: 'Macbook Pro',
      description: 'La MacBook Pro combina una potente pantalla Retina, alto rendimiento y larga duración de batería en un diseño elegante.',
      image: 'https://via.placeholder.com/371x390'
    }
  ];

  return (
    <div className={styles.cardRow}>
      {products.map((product, index) => (
        <div key={index} className={styles.card}>
          <img className={styles.cardImage} src={product.image} alt={product.title} />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{product.title}</h3>
            <p className={styles.cardDescription}>{product.description}</p>
            <button className={styles.offerButton}>Ver Oferta</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardRow;

