import React from 'react';

const ProductImageAndPrices = ({ image, prices }) => {
    return (
        <div>
            <img src={image} alt="Producto" />
            <div>
                <h3>Precios en distintas tiendas:</h3>
                <ul>
                    {prices.map((price, index) => (
                        <li key={index}>
                            {price.storeName}: ${price.amount}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductImageAndPrices;
