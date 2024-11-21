import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Importamos Link de react-router-dom
import LoadingAnimation from './LoadingAnimation';
import styles from '../styles/SearchResult.module.css';

const SearchResults = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const searchTerm = new URLSearchParams(location.search).get("query");

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);

            try {
                const response = await fetch(`http://127.0.0.1:5000/api/search?query=${searchTerm}`);
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data);
                } else {
                    console.error("Error al obtener los productos:", response.statusText);
                    setProducts([]);
                }
            } catch (error) {
                console.error("Error en la solicitud de productos:", error);
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

    if (products.length === 0) {
        return <div className={styles.noResults}>No se encontraron productos.</div>;
    }

    return (
        <div className={styles.searchResults}>
            <h2>Resultados para: "{searchTerm}"</h2>
            <div className={styles.productList}>
                {products.map((product) => (
                    <div key={product.id} className={styles.productItem}>
                        <Link to={`/product/${product.id}`} className={styles.productLink}>
                            <img src={product.img} alt={product.title} />
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