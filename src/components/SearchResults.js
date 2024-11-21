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
                    
                    // Log de los datos recibidos
                    console.log("Datos de productos:", data);
                    
                    // Validación adicional de los datos
                    if (Array.isArray(data)) {
                        setProducts(data);
                    } else {
                        console.error("Los datos recibidos no son un array:", data);
                        setProducts([]);
                    }
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
                            className={styles.productLink}
                            onClick={() => console.log("Producto seleccionado:", product)}
                        >
                            {/* Añadir manejo de imagen por si acaso */}
                            <img 
                                src={product.img || 'placeholder-image-url'} 
                                alt={product.title} 
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.src = 'placeholder-image-url'
                                }}
                            />
                            <div className={styles.productInfo}>
                                <h3>{product.title}</h3>
                                <p>{product.price}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;