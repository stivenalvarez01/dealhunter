import React, { useState } from 'react';
import styles from '../styles/CategoriasDesplegables.module.css';
import ProductCard from './ProductCard'; // Asegúrate de la ruta correcta

// Datos de ejemplo para cada segmento
const productData = {
    "New Arrival": [
      { id: 1, name: "Nevera HACEB No Frost Congelador Superior 294 Litros", price: "$1.699.900", image: "https://www.alkosto.com/medias/7704353449921-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w0NjQwfGltYWdlL3dlYnB8YURZMkwyaGlZeTh4TkRVek9EVTBNVEV3TlRFNE1pODNOekEwTXpVek5EUTVPVEl4WHpBd01WODNOVEJYZURjMU1FZ3wzM2M2ZmQ4Njg0YzFjOTRhNWIyZDM1YWI1NDY2NGIzZjM3NTk3M2U2OWIxNTI1MGRiYmM0ZTdjZjNiYTFiOGZm" },
      { id: 2, name: "iPhone 16 Pro Max 256 GB Titanio Natural", price: "$6.729.010", image: "https://www.alkosto.com/medias/195949806223-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNDc3MHxpbWFnZS93ZWJwfGFHSmpMMmcxT0M4eE5EYzJORGt4T0RJME16TTFPQzh4T1RVNU5EazRNRFl5TWpOZk1EQXhYemMxTUZkNE56VXdTQXwwZmIxODNhNjgzOWI0Y2I1Y2EwNTA4NzIwMDExN2JlOTY0OTY4OWU4MDNlZmJkNDQ2MDg4ODFlODE2MDMwODhi" },
      { id: 3, name: "MacBook Air de 13 Pulgadas MGN63LA/A Chip M1 RAM", price: "$3.399.000", image: "https://www.alkosto.com/medias/194252425824-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w2NTA2fGltYWdlL3dlYnB8YURNNEwyZzVNaTh4TkRJNU9USTVNVEk0TnpVNE1pOHhPVFF5TlRJME1qVTRNalJmTURBeFh6YzFNRmQ0TnpVd1NBfGRjZTIyY2EwZDI1YmQ1NGM0NmUyN2JlMzc5OTExNWNkMTY2YzJiZTE3MWU1NDQzMDdlNDQ3YjA2NTcwYWQ1YTg" },
      { id: 4, name: "Computador Portátil ASUS Vivobook 16", price: "$2.349.000", image: "https://www.alkosto.com/medias/4711387602751-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxODY0NHxpbWFnZS93ZWJwfGFEWTNMMmc1WVM4eE5EUTNOak0wTXpVd09UQXlNaTgwTnpFeE16ZzNOakF5TnpVeFh6QXdNVjgzTlRCWGVEYzFNRWd8NGNhZTFmZDFjYzk0YWNkMGRlODBhZDI1MTUyMWRhMzA4ZDFhMzVjYmQ3MTNlZWE1ZWZkN2YyODM5NzhhMWQ3Ng" },
      { id: 5, name: "TV LG 50 Pulgadas 126 Cm 50UR7410PSA 4K-UHD LED Smart TV", price: "$21.599.900", image: "https://www.alkosto.com/medias/8806096079416-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w2ODQ1NHxpbWFnZS93ZWJwfGFHUmtMMmcwWmk4eE5EWXlOall3TVRVMk5qSXpPQzg0T0RBMk1EazJNRGM1TkRFMlh6QXdNVjgzTlRCWGVEYzFNRWd8NjEzMzBmYzY0ZDEwYzIxNGZjOGE1M2FjMDExYmM5ZDIwNDYyNmEwYzE5MjRlOWIyODQ1YjljZmNkZTMzMWRjMg" },
      { id: 6, name: "TV TCL 55 Pulgadas 139 cm 55 P755 4K-UHD LED Smart TV", price: "$1.499.900", image: "https://www.alkosto.com/medias/6921732822132-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w1OTg2NnxpbWFnZS93ZWJwfGFHRmpMMmcyTkM4eE5EWTFOek01TXpjNE5qa3hNQzgyT1RJeE56TXlPREl5TVRNeVh6QXdNVjgzTlRCWGVEYzFNRWd8YmMwODA5ZjQyNjIzYzc5NzIyZjc2ZWRmZDYwODk0Y2M3MjNhM2IyYTM5NDg1YjdmZDA4OTk1OTMyYzUzMjg3Yw" },
      { id: 7, name: "Bombillo Inteligente VTA WiFi 9W Multicolor x 2 Unidades", price: "$49.900", image: "https://www.alkosto.com/medias/7702271846952-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNzExNHxpbWFnZS93ZWJwfGFETmhMMmhoTWk4eE5EWTFOelV3TXpRNU5ERTNOQzgzTnpBeU1qY3hPRFEyT1RVeVh6QXdNVjgzTlRCWGVEYzFNRWd8M2Q1ZWI1YWM5ZjhlMWY1YmU2ODM0MjcwNWM5OGFjMGRmMGFhNzQyODY1NzE4YWE2MjRhNmE4Yjk0MTNiMTRhOQ" },
      { id: 8, name: "Cámara de Seguridad Rotativa KALLEY WiFi", price: "$139.900", image: "https://www.alkosto.com/medias/7705946476737-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w4MDcyfGltYWdlL3dlYnB8YUdKbUwyaG1aUzh4TkRNME1EZzNOakEzTlRBek9DODNOekExT1RRMk5EYzJOek0zWHpBd01WODNOVEJYZURjMU1FZ3xmZWU1MmY5OWM5NjgyYTBmYzkwNmYxNTgzMDRkZTgwNDkwZTU4ZTI5MzM3ZjNiOWMzMjI3MzkyMDUyYWI4MjBk" }
    ],
    "BestSeller": [
      { id: 9, name: "PConsola XBOX Series S 512 GB", price: "$1.629.900", image: "https://www.alkosto.com/medias/889842651348-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMzA4NHxpbWFnZS93ZWJwfGFESmlMMmcwTWk4eE5EVTVNRGs0T1RnNU16WTJNaTg0T0RrNE5ESTJOVEV6TkRoZk1EQXhYemMxTUZkNE56VXdTQXwxY2Q4OGRlNzVjOTdhYWNmYzFmNDIwMGQ4MWViNTdkZWMyYWFlZjg4NmIzZjM0ZmJhOWQ2Nzc2OTFiZWJjYjU1" },
      { id: 10, name: "Consola PS5 Digital 1TB Slim Blanco|Negro + 1 Control inalámbrico", price: "$2.499.900", image: "https://www.alkosto.com/medias/711719570820-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNzU1MHxpbWFnZS93ZWJwfGFHWmtMMmhoWkM4eE5EWTNOVEF5TnpFNU56azRNaTgzTVRFM01UazFOekE0TWpCZk1EQXhYemMxTUZkNE56VXdTQXxmNGRhYjQwZTkzZTViMTZkNDA0YzVkMjJmNDg1MDE5YThlM2VlZDkwMWZkOGI3MjM0YzdlN2IyOTJhZjYzMGUx" },
      { id: 11, name: "Consola NINTENDO SWITCH Modelo OLED", price: "$1.619.000", image: "https://www.alkosto.com/medias/045496884529-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMDU3OHxpbWFnZS93ZWJwfGFHTXhMMmd4WVM4eE5EVTVNRFUwT0RNeE1qQTVOQzh3TkRVME9UWTRPRFExTWpsZk1EQXhYemMxTUZkNE56VXdTQXwwZGY2YTM0YTllMzA4YzViYWZjNWNhYWI0NGU4ODc3N2JhMjcwZTM2YzgxM2IyZjg3YTUzZTFiZTBmNjUyYWJl" },
      { id: 12, name: "Consola Xbox Series X 1TB", price: "$2.999.900", image: "https://www.alkosto.com/medias/889842640755-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w3OTI4fGltYWdlL3dlYnB8YURVekwyZzVZeTh4TkRVNU1EazROelV6TkRNMk5pODRPRGs0TkRJMk5EQTNOVFZmTURBeFh6YzFNRmQ0TnpVd1NBfGViMjNjYTQ0YTM4YWZjNmIxOGYxNGVmMmU5NWM5ZmIwMzg3MmE0Y2M5NGI1NTAxY2MxZDYxOWYxODEzNDZmMWE" }
    ],
    "Featured Products": [
      { id: 13, name: "Horno Microondas KALLEY 0.7", price: "$259.900", image: "https://www.alkosto.com/medias/7705946173858-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMDg2NnxpbWFnZS93ZWJwfGFESm1MMmhrWlM4eE5EYzVOemt5T1RnM016UXpPQzgzTnpBMU9UUTJNVGN6T0RVNFh6QXdNVjgzTlRCWGVEYzFNRWd8MDlkZDRiNTE5YWE2MjJhOTUxMDhkZTBlMzVmNGRmNTFhZDI4Njk2Yzc2ZGZlNDI3NjBiNjQ2ZDY5Y2QzMzU4NA" },
      { id: 14, name: "Freidora de Aire BLACK+DECKER 4.5 Litros", price: "$259.900", image: "https://www.alkosto.com/medias/050875001824-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMzIyMnxpbWFnZS93ZWJwfGFERXdMMmhqTXk4eE5EYzVOemMxTURZek1qUTNPQzh3TlRBNE56VXdNREU0TWpSZk1EQXhYemMxTUZkNE56VXdTQXwzOGFlYzE1MGYzNzNhOGMxNmJmM2EyNzkyYzM2MGM4NzdhNWIyZTJjNGUzZGQ2NWZlZGU0Nzg2MTFmMWMwMjM5" },
      { id: 15, name: "Asador KALLEY K-SG150 ", price: "$149.900", image: "https://www.alkosto.com/medias/7701023598200-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxODU0OHxpbWFnZS9qcGVnfGFXMWhaMlZ6TDJnMll5OW9PV0l2T0Rrd09UUTBPVEEyT0RVM05DNXFjR2N8YmJiNmY4ZTQzNzhhMzE4OTI1Nzg3YTE3M2UwYjkwYmM5MDlhZTE2ZjZjYjk4ZjEyMzEzYWFkYTM1M2UyOTg5NQ" },
      { id: 16, name: "Olla Multifuncional BLACK+DECKER 5,7", price: "$299.900", image: "https://www.alkosto.com/medias/050875829022-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNDk3MHxpbWFnZS93ZWJwfGFHSTRMMmcxTnk4eE5EYzNNekUzT1RVME56WTNPQzh3TlRBNE56VTRNamt3TWpKZk1EQXhYemMxTUZkNE56VXdTQXxmZmJiNWM2MWEwNDgxMjZmN2MzOGRkOTRiNjhmNjI3Y2E1ZmY3MGMxZDkwNWU0NDk0NjMzMzljNzZkMjQ4ODNj" }
    ]
  };
  

function ProductSegment() {
  const [activeSegment, setActiveSegment] = useState("New Arrival");

  const handleSegmentClick = (segment) => {
    setActiveSegment(segment);
  };

  return (
    <div className={styles.productSegmentContainer}>
      <div className={styles.segmentButtons}>
        {Object.keys(productData).map((segment) => (
          <button 
            key={segment} 
            onClick={() => handleSegmentClick(segment)}
            className={`${styles.segmentButton} ${activeSegment === segment ? styles.active : ''}`} // Asegúrate de usar styles aquí
          >
            {segment}
          </button>
        ))}
      </div>

      <div className={styles.productList}>
        {productData[activeSegment].map((product) => (
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

