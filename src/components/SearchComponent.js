import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');  // Para guardar lo que el usuario escribe
  const [products, setProducts] = useState([]);  // Para guardar los productos obtenidos
  const [loading, setLoading] = useState(false);  // Para mostrar un indicador de carga

  // Función para manejar el submit del formulario
  const handleSearch = async () => {
    if (!searchTerm) return;  // Si no hay término de búsqueda, no hacemos nada

    setLoading(true);  // Activamos el indicador de carga

    try {
      // Hacemos una solicitud GET a nuestro backend para obtener los resultados
      const response = await axios.get(`http://localhost:5000/api/search?query=${searchTerm}`);
      setProducts(response.data);  // Guardamos los productos en el estado
    } catch (error) {
      console.error('Error al hacer scraping:', error);
    } finally {
      setLoading(false);  // Desactivamos el indicador de carga
    }
  };

  return (
    <div>
      <h1>Busca tus productos</h1>
      <input
        type="text"
        placeholder="Busca un producto..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}  // Actualizamos el estado cuando el usuario escribe
      />
      <button onClick={handleSearch}>Buscar</button>

      {loading && <p>Cargando...</p>}

      <div>
        {products.length > 0 ? (
          <ul>
            {products.map((product, index) => (
              <li key={index}>
                <a href={product.link} target="_blank" rel="noopener noreferrer">
                  <h3>{product.title}</h3>
                  <p>{product.price}</p>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
