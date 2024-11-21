import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/ProductDetails.module.css';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            console.log("ID del producto:", id); // Añade este log
            
            if (!id) {
                setError("ID de producto no válido");
                setLoading(false);
                return;
            }

            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`http://localhost:5000/api/product/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                console.log("Respuesta del servidor:", response); // Añade este log

                if (!response.ok) {
                    const errorData = await response.json();
                    console.error("Error data:", errorData);
                    throw new Error(errorData.error || 'Error al obtener detalles del producto');
                }

                const data = await response.json();
                console.log('Datos del producto:', data);
                setProduct(data);
            } catch (error) {
                console.error('Error completo al obtener detalles del producto:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [id]);

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
            </div>
            
            <div className={styles.productContent}>
                <div className={styles.productImage}>
                    <img src={product.img} alt={product.title} />
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