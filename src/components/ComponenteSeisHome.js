import React from 'react';
import styles from '../styles/ComponenteSeisHome.module.css';
import ProductCard from './ProductCard'; // Asegúrate de la ruta correcta

// Datos de ejemplo para mostrar
const productData = [
  { id: 1, name: "TV TCL 55 Pulgadas 139 cm 55 P755", price: "$1.499.900", image: "https://www.alkosto.com/medias/6921732822132-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w1OTg2NnxpbWFnZS93ZWJwfGFHRmpMMmcyTkM4eE5EWTFOek01TXpjNE5qa3hNQzgyT1RJeE56TXlPREl5TVRNeVh6QXdNVjgzTlRCWGVEYzFNRWd8YmMwODA5ZjQyNjIzYzc5NzIyZjc2ZWRmZDYwODk0Y2M3MjNhM2IyYTM5NDg1YjdmZDA4OTk1OTMyYzUzMjg3Yw" },
  { id: 2, name: "Computador Portátil LENOVO 15.6 Pulgadas IdeaPad ", price: "$2.249.000", image: "https://www.alkosto.com/medias/198153015658-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxOTQxOHxpbWFnZS93ZWJwfGFERTFMMmcyWXk4eE5EWTFOekl4TnprNE5qVTVNQzh4T1RneE5UTXdNVFUyTlRoZk1EQXhYemMxTUZkNE56VXdTQXxlNTJlOTdhNzg1ZDkwNjlkYTU1ZDlkMGYzZGI4YTIxNGE1MmIwZjY5MmFkNDU1MTczYTMzYTE2YWU5NmI3NmM0" },
  { id: 3, name: "Celular MOTOROLA Edge 50 Fusion 256GB Verde", price: "$969.900", image: "https://www.alkosto.com/medias/840023261879-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w0MTI1NnxpbWFnZS93ZWJwfGFEZG1MMmd5TlM4eE5EVXdOakUzTmpNME9ERTVNQzg0TkRBd01qTXlOakU0TnpsZk1EQXhYemMxTUZkNE56VXdTQXwyNGI1ZGFhM2ZjMTI4YjA3MDYyYjM2ZTcwYzA3ZGRiZGI2YTliMDUzMDZlZTBkMzI2NTI0NmVmMWY0ODMwZWZi" },
  { id: 4, name: "Computador All In One LENOVO IdeaCentre AIO 3", price: "$1.899.000", image: "https://www.alkosto.com/medias/198153022670-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNTQ0NHxpbWFnZS93ZWJwfGFHVmxMMmd6T0M4eE5EWTBPVFEzTnpZNU16UTNNQzh4T1RneE5UTXdNakkyTnpCZk1EQXhYemMxTUZkNE56VXdTQXwzMTA5MWFmODU5NmFhNmJhZDViYjUzYjVlYzExMGYwNjRhNjUwNWNkOTYxOGFlNmNjNTY2MWQzMjQ3ZWU4Yjg1" }
];

function ProductSegment() {
  return (
    <div className={styles.productSegmentContainer}>
      {/* Título fijo */}
      <h2 className={styles.segmentTitle}>Descuento de hasta el 50%</h2>

      {/* Lista de productos */}
      <div className={styles.productList}>
        {productData.map((product) => (
          <ProductCard 
            key={product.id}
            imageSrc={product.image} 
            title={product.name} 
            price={product.price} 
          />
        ))}
      </div>
    </div>
  );
}

export default ProductSegment;
