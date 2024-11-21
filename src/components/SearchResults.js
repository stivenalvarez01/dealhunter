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

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`http://127.0.0.1:5000/api/search?query=${searchTerm}`);

                // Log de la respuesta completa
                console.log("Respuesta del servidor:", response);

                if (response.ok) {
                    const data = await response.json();
                    setProducts(data);

                    // Guardar en localStorage
                    localStorage.setItem('searchResults', JSON.stringify(data));
                } else {
                    // Log del error de respuesta
                    const errorText = await response.text();
                    console.error("Error al obtener los productos:", response.status, errorText);
                    setError(`Error: ${response.status}`);
                    setProducts([]);
                }
            } catch (error) {
                console.error("Error en la solicitud de productos:", error);
                setError(error.message);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };

        if (searchTerm) {
            fetchProducts();
        }
    }, [searchTerm]);

    if (loading) {
        return <LoadingAnimation />;
    }

    if (error) {
        return <div className={styles.error}>Error: {error}</div>;
    }

    if (products.length === 0) {
        return <div className={styles.noResults}>No se encontraron productos.</div>;
    }

    return (
        <div className={styles.searchResults}>
            <h2>Resultados para: "{searchTerm}"</h2>
            <div className={styles.productList}>
                {products.map((product, index) => (
                    <div key={product.id || index} className={styles.productItem}>
                        <Link
                            to={`/product/${encodeURIComponent(product.id)}`}
                            onClick={() => console.log("ID del producto en Link:", product.id)}
                        >
                            <img
                                src={product.img || 'placeholder-image-url'}
                                alt={product.title}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'placeholder-image-url';
                                }}
                            />
                            <div className={styles.productInfo}>
                                <h3>{product.title}</h3>
                                <p>{product.price}</p>
                            </div>
                        </Link>
                        {/* Añadir el enlace al producto original */}
                        {product.link && (
                            <a
                                href={product.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.productLink}
                            >
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