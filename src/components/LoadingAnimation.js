// LoadingAnimation.js
import React from 'react';
import styles from '../styles/LoadingAnimation.module.css';

const LoadingAnimation = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.wrapper}>
                <div className={styles['box-wrap']}>
                    <div className={`${styles.box} ${styles.one}`}></div>
                    <div className={`${styles.box} ${styles.two}`}></div>
                    <div className={`${styles.box} ${styles.three}`}></div>
                    <div className={`${styles.box} ${styles.four}`}></div>
                    <div className={`${styles.box} ${styles.five}`}></div>
                    <div className={`${styles.box} ${styles.six}`}></div>
                </div>
                <div className={styles.loadingText}>Cargando...</div>
            </div>
        </div>
    );
};

export default LoadingAnimation;
