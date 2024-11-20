// frontend/src/components/SearchComponent.js
import React, { useState } from "react";
import axios from "axios";

// Crear instancia de axios con URL base
const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

const SearchComponent = () => {
    const [query, setQuery] = useState("");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://127.0.0.1:5000/api/search`, {
                params: { query }
            });
            console.log(response.data);  // Verificar si los datos se reciben en el frontend
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

  const handleProductClick = async (productId) => {
    try {
      const response = await api.get(`/product/${productId}`);
      console.log(response.data);
      setProductDetails(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar producto"
            />
            <button onClick={handleSearch}>Buscar</button>

            {loading && <p>Cargando...</p>}

            <div>
                {products.map((product, index) => (
                    <div key={index} style={{ margin: "10px 0" }}>
                        <h2>{product.title}</h2>
                        <p>Precio: {product.price}</p>
                        <a href={product.link} target="_blank" rel="noopener noreferrer">
                            Ver Producto
                        </a>
                        <img src={product.img} alt={product.title} style={{ width: "100px" }} />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default SearchComponent;