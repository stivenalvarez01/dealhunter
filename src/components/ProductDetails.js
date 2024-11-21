import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styles from '../styles/ProductDetails.module.css';

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      // Recuperar resultados de búsqueda, primero de localStorage, luego de state de ubicación
      const storedProducts = JSON.parse(localStorage.getItem('searchResults') || '[]');
      const stateProducts = location.state?.searchResults || [];
      const allProducts = [...storedProducts, ...stateProducts];

      console.log("Todos los productos:", allProducts);
      console.log("Buscando producto con ID:", id);

      const productWithLink = allProducts.find(p => p.id === id);

      console.log("Producto encontrado:", productWithLink);

      if (!productWithLink || !productWithLink.link) {
        console.error("No se encontró el link del producto");
        setError("No se encontró el link del producto");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        console.log("URL completa para fetch:", `http://localhost:5000/api/product?url=${encodeURIComponent(productWithLink.link)}`);
      
        const response = await fetch(`http://localhost:5000/api/product?url=${encodeURIComponent(productWithLink.link)}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        console.log("Respuesta del servidor:", response);

        
        if (!response.ok) {
          const errorText = await response.text();
          console.error("Error en la respuesta:", errorText);
          throw new Error(errorText || 'Error al obtener detalles del producto');
        }

        const data = await response.json();
        console.log("Datos del producto:", data);

        setProduct({
          ...data,
          originalLink: productWithLink.link
        });
      } catch (error) {
        console.error('Detalles completos del error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id, location.state]);

  // Resto del componente permanece igual
  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Cargando producto...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (!product) {
    return <div className={styles.errorContainer}>Producto no encontrado</div>;
  }

  return (
    <div className={styles.productDetailsContainer}>
      <div className={styles.productHeader}>
        <h1>{product.title}</h1>
        <a 
          href={product.originalLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.originalLink}
        >
          Ver producto original
        </a>
      </div>

      <div className={styles.productContent}>
        <div className={styles.productImage}>
          <img 
            src={product.img} 
            alt={product.title} 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'placeholder-image-url'
            }}
          />
        </div>

        <div className={styles.productInfo}>
          <h2>Información del Producto</h2>
          <p><strong>Precio:</strong> {product.price}</p>

          {product.description && (
            <div className={styles.productDescription}>
              <h3>Descripción</h3>
              <p>{product.description}</p>
            </div>
          )}

          {product.features && product.features.length > 0 && (
            <div className={styles.productFeatures}>
              <h3>Características</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;