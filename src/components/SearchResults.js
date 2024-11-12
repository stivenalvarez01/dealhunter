import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    
    // Extrae el término de búsqueda de la URL
    const searchTerm = new URLSearchParams(location.search).get("query");

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);  // Muestra el estado de carga

            try {
                const response = await fetch(`http://127.0.0.1:5000/api/search?query=${searchTerm}`);
                
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data); // Guarda los productos en el estado
                } else {
                    console.error("Error al obtener los productos:", response.statusText);
                    setProducts([]); // En caso de error, asegura que no se muestren productos
                }
            } catch (error) {
                console.error("Error en la solicitud de productos:", error);
                setProducts([]);
            } finally {
                setLoading(false); // Termina el estado de carga
            }
        };

        if (searchTerm) {
            fetchProducts(); // Ejecuta la búsqueda solo si hay un término
        }
    }, [searchTerm]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (products.length === 0) {
        return <div>No se encontraron productos.</div>;
    }

    return (
        <div>
            <h2>Resultados para: "{searchTerm}"</h2>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        <img src={product.img} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                        <a href={product.link} target="_blank" rel="noopener noreferrer">Ver producto</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResults;
