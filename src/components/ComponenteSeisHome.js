import React from 'react';
import styles from '../styles/ComponenteSeisHome.module.css';
import ProductCard from './ProductCard'; // Asegúrate de la ruta correcta

// Datos de ejemplo para mostrar
const productData = [
  { id: 1, name: "Producto A - Descuento", price: "$20", image: "https://via.placeholder.com/160x160" },
  { id: 2, name: "Producto B - Descuento", price: "$30", image: "https://via.placeholder.com/160x160" },
  { id: 3, name: "Producto C - Descuento", price: "$40", image: "https://via.placeholder.com/160x160" },
  { id: 4, name: "Producto D - Descuento", price: "$50", image: "https://via.placeholder.com/160x160" }
];

function ProductSegment() {
  return (
    <div className={styles.productSegmentContainer}>
      {/* Título fijo */}
      <h2 className={styles.segmentTitle}>Descuento de hasta el 50%</h2>

      {/* Lista de productos */}
      <div className={styles.productList}>
        {productData.map((product) => (
          <ProductCard 
            key={product.id}
            imageSrc={product.image} 
            title={product.name} 
            price={product.price} 
          />
        ))}
      </div>
    </div>
  );
}

export default ProductSegment;
