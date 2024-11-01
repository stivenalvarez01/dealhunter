import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link
import logo from '../source/logo.png'; // Asegúrate de que la ruta sea correcta
import searchIcon from '../source/search-icon.png';
import heartIcon from '../source/corazon.png';
import userIcon from '../source/persona.png';
import phoneIcon from '../source/phone-icon.png';
import './Header.css'; // Asegúrate de importar tus estilos CSS.
// import controllerIcon from '../source/controller-icon.png'; // Eliminar si no se usa

const Header = () => {
    return (
        <>
            {/* Encabezado o Header */}
            <header className="header">
                <div className="navbar">
                    <div className="logo">
                        <img src={logo} alt="DealHunter Logo" />
                    </div>
                    <div className="search-bar">
                        <div className="icon">
                            <img src={searchIcon} alt="lupa busqueda" />
                        </div>
                        <div className="placeholder-text">Search</div>
                    </div>
                    <div className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <span className="separator">&gt;</span>
                        <Link to="/ofertas" className="inactive">Ofertas</Link>
                        <span className="separator">&gt;</span>
                        <Link to="/contacto" className="inactive">Contáctanos</Link>
                        <span className="separator">&gt;</span>
                        <Link to="/aliados" className="inactive">Aliados</Link>
                    </div>
                    <div className="icons">
                        <div className="icon heart-icon">
                            <img src={heartIcon} alt="favoritos" />
                        </div>
                        <div className="icon user-icon">
                            <img src={userIcon} alt="persona login" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Barra de opciones */}
            <div className="options-bar">
                {['Smartphone', 'Laptops', 'Tablets', 'Componentes', 'Periféricos', 'Otros'].map((option, index) => (
                    <React.Fragment key={option}>
                        <div className="option-item">
                            <img src={phoneIcon} alt={option} />
                            <div className={`icon ${option.toLowerCase()}-icon`}></div>
                            <div className="option-text">{option}</div>
                        </div>
                        {index < 5 && <div className="divider"></div>} {/* Agrega divisor solo si no es el último elemento */}
                    </React.Fragment>
                ))}
            </div>
        </>
    );
};

export default Header;

