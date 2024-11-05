import React from 'react';
import styles from '../styles/Register.module.css';

const Register = () => {
    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <div className={styles.title}>Regístrate</div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Nombre completo</label>
                    <input 
                        type="text" 
                        placeholder="tu nombre" 
                        className={styles.input} 
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Correo electrónico</label>
                    <input 
                        type="email" 
                        placeholder="ejemplo@dealhunter.com" 
                        className={styles.input} 
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Contraseña</label>
                    <input 
                        type="password" 
                        placeholder="Crea una contraseña" 
                        className={styles.input} 
                    />
                </div>
                <div className={styles.rememberMe}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span className={styles.rememberText}>Remember Me</span>
                </div>
                <button className={styles.submitButton}>Crear Cuenta</button>
            </div>
        </div>
    );
};

export default Register;
