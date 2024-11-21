import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import LoadingAnimation from './LoadingAnimation';
import styles from '../styles/SearchResult.module.css';

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get("query");
  const category = new URLSearchParams(location.search).get("category");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        let response;
        if (category) {
          response = await fetch(`backend-production-4126.up.railway.app?category=${category}`);
        } else if (searchTerm) {
          response = await fetch(`backend-production-4126.up.railway.app?query=${searchTerm}`);
        }

        if (response.ok) {
          const data = await response.json();
          setProducts(data);
          localStorage.setItem('searchResults', JSON.stringify(data));
        } else {
          const errorText = await response.text();
          setError(`Error: ${response.status}`);
          setProducts([]);
        }
      } catch (error) {
        setError(error.message);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm || category) {
      fetchProducts();
    }
  }, [searchTerm, category]);

  if (loading) return <LoadingAnimation />;
  if (error) return <div className={styles.error}>Error: {error}</div>;
  if (products.length === 0) return <div className={styles.noResults}>No se encontraron productos.</div>;

  return (
    <div className={styles.searchResults}>
      <h2>Resultados para: "{category ? category : searchTerm}"</h2>
      <div className={styles.productList}>
        {products.map((product, index) => (
          <div key={product.id || index} className={styles.productItem}>
            <Link to={`/product/${encodeURIComponent(product.id)}`}>
              <img
                src={product.img || 'placeholder-image-url'}
                alt={product.title}
                onError={(e) => { e.target.src = 'placeholder-image-url'; }}
              />
              <div className={styles.productInfo}>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
              </div>
            </Link>
            {product.link && (
              <a href={product.link} target="_blank" rel="noopener noreferrer" className={styles.productLink}>
                Ver producto original
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
