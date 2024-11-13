import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductImageAndPrices from '../components/ProductImageAndPrices';
import ProductFeature from '../components/ProductFeatures';
import styles from '../styles/ProductDetails.module.css';

const ProductDetails = () => {
    const { id } = useParams(); // Obtén el id del producto desde la URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductDetails = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://127.0.0.1:5000/api/products/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setProduct(data); // Guardamos los datos del producto en el estado
                } else {
                    console.error("Error al obtener los detalles del producto:", response.statusText);
                }
            } catch (error) {
                console.error("Error en la solicitud del producto:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [id]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div className={styles.productDetails}>
            <h2>{product.title}</h2>
            <ProductImageAndPrices image={product.img} prices={product.prices} />
            <ProductFeature features={product.features} />
        </div>
    );
};

export default ProductDetails;
