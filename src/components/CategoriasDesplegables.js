import React, { useState } from 'react';
import styles from '../styles/CategoriasDesplegables.module.css';
import ProductCard from './ProductCard'; // Asegúrate de la ruta correcta

// Datos de ejemplo para cada segmento
const productData = {
    "New Arrival": [
      { id: 1, name: "Producto A - New Arrival", price: "$20", image: "https://via.placeholder.com/160x160" },
      { id: 2, name: "Producto B - New Arrival", price: "$30", image: "https://via.placeholder.com/160x160" },
      { id: 3, name: "Producto C - New Arrival", price: "$40", image: "https://via.placeholder.com/160x160" },
      { id: 4, name: "Producto D - New Arrival", price: "$50", image: "https://via.placeholder.com/160x160" },
      { id: 1, name: "Producto A - New Arrival", price: "$20", image: "https://via.placeholder.com/160x160" },
      { id: 2, name: "Producto B - New Arrival", price: "$30", image: "https://via.placeholder.com/160x160" },
      { id: 3, name: "Producto C - New Arrival", price: "$40", image: "https://via.placeholder.com/160x160" },
      { id: 4, name: "Producto D - New Arrival", price: "$50", image: "https://via.placeholder.com/160x160" }
    ],
    "BestSeller": [
      { id: 5, name: "Producto E - BestSeller", price: "$60", image: "https://via.placeholder.com/160x160" },
      { id: 6, name: "Producto F - BestSeller", price: "$70", image: "https://via.placeholder.com/160x160" },
      { id: 7, name: "Producto G - BestSeller", price: "$80", image: "https://via.placeholder.com/160x160" },
      { id: 8, name: "Producto H - BestSeller", price: "$90", image: "https://via.placeholder.com/160x160" }
    ],
    "Featured Products": [
      { id: 9, name: "Producto I - Featured", price: "$100", image: "https://via.placeholder.com/160x160" },
      { id: 10, name: "Producto J - Featured", price: "$110", image: "https://via.placeholder.com/160x160" },
      { id: 11, name: "Producto K - Featured", price: "$120", image: "https://via.placeholder.com/160x160" },
      { id: 12, name: "Producto L - Featured", price: "$130", image: "https://via.placeholder.com/160x160" }
    ]
  };
  

function ProductSegment() {
  const [activeSegment, setActiveSegment] = useState("New Arrival");

  const handleSegmentClick = (segment) => {
    setActiveSegment(segment);
  };

  return (
    <div className={styles.productSegmentContainer}>
      <h2 className={styles.sectionTitle}>Productos</h2>
      <div className={styles.segmentButtons}>
        {Object.keys(productData).map((segment) => (
          <button 
            key={segment} 
            onClick={() => handleSegmentClick(segment)}
            className={`${styles.segmentButton} ${activeSegment === segment ? styles.active : ''}`} // Asegúrate de usar styles aquí
          >
            {segment}
          </button>
        ))}
      </div>

      <div className={styles.productList}>
        {productData[activeSegment].map((product) => (
          <ProductCard 
            key={product.id}
            imageSrc={product.imageSrc} 
            title={product.name} 
            price={product.price} 
          />
        ))}
      </div>
    </div>
  );
}

export default ProductSegment;

