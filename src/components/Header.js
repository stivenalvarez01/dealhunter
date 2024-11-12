import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = () => {
    const currentLocation = useLocation();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState(''); // Estado para manejar el término de búsqueda

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleSearch = (event) => {
        if (event.key === 'Enter') { // Verifica si se presionó la tecla Enter
            navigate(`/search?query=${searchTerm}`); // Navega a la página de resultados
        }
    };

    return (
        <>
            <header className={styles.header}>
                <div className={styles.navbar}>
                    <div className={styles.logo}>
                        <img src='images/logo.png' alt="DealHunter Logo" />
                    </div>
                    <div className={styles.searchBar}>
                        <input
                            type="text"
                            placeholder="Search"
                            className={styles.searchInput}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={handleSearch} // Llama a la función de búsqueda al presionar Enter
                        />
                    </div>
                    <ul className={styles.navLinks}>
                        {/* Enlaces de navegación */}
                        <li>
                            <Link to="/" className={`${styles.link} ${currentLocation.pathname === '/' ? styles.active : ''}`}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/ofertas" className={`${styles.link} ${currentLocation.pathname === '/ofertas' ? styles.active : ''}`}>
                                Ofertas
                            </Link>
                        </li>
                        <li>
                            <Link to="/contacto" className={`${styles.link} ${currentLocation.pathname === '/contacto' ? styles.active : ''}`}>
                                Contáctanos
                            </Link>
                        </li>
                        <li>
                            <Link to="/aliados" className={`${styles.link} ${currentLocation.pathname === '/aliados' ? styles.active : ''}`}>
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

            <div className={styles.optionsBar}>
                {['Smartphone', 'Laptops', 'Tablets', 'Componentes', 'Periféricos', 'Otros'].map((option, index) => (
                    <React.Fragment key={option}>
                        <div className={styles.optionItem}>
                            <img src='images/phone-icon.png' alt={option} />
                            <div className={styles.optionText}>{option}</div>
                        </div>
                        {index < 5 && <div className={styles.divider}></div>}
                    </React.Fragment>
                ))}
            </div>
        </>
    );
};

export default Header;
