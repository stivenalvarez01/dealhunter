import React from 'react';
import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Contáctanos</h1>
        <p className={styles.subtitle}>¿Alguna duda o sugerencia? Solo escríbenos un mensaje!</p>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.contactInfo}>
          <h2 className={styles.contactTitle}>Información de contacto</h2>
          <p className={styles.contactText}><i className="fas fa-phone-alt"></i> +57 312 456 7890</p>
          <p className={styles.contactText}><i className="fas fa-envelope"></i> atencion.cliente@dellhunter.com</p>
          <p className={styles.contactText}><i className="fas fa-map-marker-alt"></i> Universidad de Ibagué</p>
        </div>
        <div className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Nombre</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Apellido</label>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Email</label>
              <input type="email" className={styles.input} />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Número de celular</label>
              <input type="text" className={styles.input} placeholder="+57 321 123 4567" />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Mensaje</label>
            <textarea className={styles.textarea} placeholder="Escriba aquí su mensaje"></textarea>
          </div>
          <button className={styles.submitButton}>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
