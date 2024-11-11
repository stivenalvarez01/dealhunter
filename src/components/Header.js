import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Importación unificada
import styles from '../styles/Header.module.css';


const Header = () => {
    // Obtener la ubicación actual
    const currentLocation = useLocation();

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <>
            {/* Encabezado o Header */}
            <header className={styles.header}>
                <div className={styles.navbar}>
                    <div className={styles.logo}>
                        <img src='images/logo.png' alt="DealHunter Logo" />
                    </div>
                    <div className={styles.searchBar}>
                        <div className={styles.icon}>
                            <img src='images/search-icon.png' alt="lupa búsqueda" />
                        </div>
                        <div className={styles.placeholderText}>Search</div>
                    </div>
                    <ul className={styles.navLinks}> {/* Cambiado a <ul> para una mejor semántica */}
                        <li>
                            <Link
                                to="/"
                                className={`${styles.link} ${currentLocation.pathname === '/' ? styles.active : styles.inactive}`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/ofertas"
                                className={`${styles.link} ${currentLocation.pathname === '/ofertas' ? styles.active : styles.inactive}`}
                            >
                                Ofertas
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contacto"
                                className={`${styles.link} ${currentLocation.pathname === '/contacto' ? styles.active : styles.inactive}`}
                            >
                                Contáctanos
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/aliados"
                                className={`${styles.link} ${currentLocation.pathname === '/aliados' ? styles.active : styles.inactive}`}
                            >
                                Aliados
                            </Link>
                        </li>
                    </ul>

                    <div className={styles.icons}>
                        <div className="icon heart-icon">
                            <img src='images/corazon.png' alt="favoritos" />
                        </div>
                        <div className="icon user-icon" onClick={handleLoginClick} style={{ cursor: 'pointer' }}>
                            <img src="images/persona.png" alt="persona login" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Barra de opciones */}
            <div className={styles.optionsBar}>
                {['Smartphone', 'Laptops', 'Tablets', 'Componentes', 'Periféricos', 'Otros'].map((option, index) => (
                    <React.Fragment key={option}>
                        {/* Usamos Link para hacer que cada opción redirija a una página de producto específica */}
                        <Link 
                            to= '/Productos' 
                            className={styles.optionItem}>
                            <img src='images/phone-icon.png' alt={option} />
                            <div className={styles.optionText}>{option}</div>
                        </Link>
                        {index < 5 && <div className={styles.divider}></div>} {/* Agrega divisor solo si no es el último elemento */}
                    </React.Fragment>
                ))}
            </div>
        </>
    );
};

export default Header;
