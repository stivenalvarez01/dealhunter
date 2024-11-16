import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductFeature from '../components/ProductFeatures';
import ProductImageAndPrices from '../components/ProductImageAndPrices';

const ProductDetails = () => {
  const { id } = useParams(); // Extrae el ID de la URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://localhost:5000/api/product/${id}`);
        if (!response.ok) {
          throw new Error('Producto no encontrado');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <ProductImageAndPrices image={product.img} prices={product.prices || []} />
      <ProductFeature features={product.features || []} />
    </div>
  );
};

export default ProductDetails;
