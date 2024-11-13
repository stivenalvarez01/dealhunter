import React from 'react';

const ProductFeature = ({ features }) => {
    return (
        <div>
            <h3>Características:</h3>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductFeature;
