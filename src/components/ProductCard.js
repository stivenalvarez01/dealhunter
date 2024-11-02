// ProductCard.js
import React from 'react';
import styles from '../styles/Card.module.css'; // Asegúrate de que este archivo exista

const ProductCard = ({ imageSrc, title, price }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                    <div className={styles.iconBorder}></div>
                </div>
            </div>
            <img className={styles.cardImage} src={imageSrc} alt={title} />
            <div className={styles.cardBody}>
                <div className={styles.cardTitle}>{title}</div>
                <div className={styles.cardPrice}>{price}</div>
            </div>
            <div className={styles.compareButton}>
                <div className={styles.compareButtonText}>Comparar Precios</div>
            </div>
        </div>
    );
};

export default ProductCard;
