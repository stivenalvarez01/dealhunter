import React, { useState } from 'react';
import styles from '../styles/Login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');       // Estado para el correo electrónico
  const [password, setPassword] = useState('');  // Estado para la contraseña
  const [error, setError] = useState('');        // Estado para manejar errores

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    setError(''); // Limpiar errores previos

    try {
      const response = await fetch('/api/login', { // Cambia '/api/login' por tu endpoint real
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Enviamos email y contraseña
      });

      if (!response.ok) {
        const errorData = await response.json(); // Obtiene el mensaje de error del servidor
        setError(errorData.message || 'Error en la autenticación'); // Mostrar error
        return;
      }

      const data = await response.json(); // Obtener datos de la respuesta
      console.log('Login exitoso:', data); // Aquí podrías almacenar el token de sesión

      // Redirigir o hacer algo después de un inicio de sesión exitoso
      // por ejemplo, redirigir a la página principal
      // navigate('/home'); // Asegúrate de usar useNavigate de react-router-dom si decides redirigir

    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Error al conectar con el servidor'); // Mensaje de error genérico
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.card}>
          <h1 className={styles.title}>Inicia Sesión</h1>

          {error && <p className={styles.error}>{error}</p>} {/* Mostrar mensaje de error */}

          <form onSubmit={handleSubmit}> {/* Añadido onSubmit */}
            <div className={styles.inputGroup}>
              <label className={styles.label}>Correo electrónico</label>
              <input
                type="email"
                placeholder="ejemplo@dealhunter.com"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Manejo de entrada
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Contraseña</label>
              <input
                type="password"
                placeholder="Ingresa tu contraseña"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Manejo de entrada
                required
              />
            </div>

            <div className={styles.rememberMe}>
              <input type="checkbox" />
              <span>Remember Me</span>
            </div>

            <button type="submit" className={styles.loginButton}>Iniciar Sesión</button> {/* Cambiado a type="submit" */}

            <div className={styles.orText}>or</div>

            <button className={styles.googleButton}>
              <img
                src="https://via.placeholder.com/20x20"
                alt="Google icon"
                className={styles.googleIcon}
              />
              Continue with Google
            </button>

            <div className={styles.createAccount}>
              <Link to="/Registro" style={{ textDecoration: 'none', color: 'inherit' }}>
                Crea una cuenta
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
