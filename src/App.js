import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AliadosPage from './pages/AliadosPage';
import OfertasPage from './pages/OfertasPage';
import ProductosPage from './pages/ProductosPage';
import Contacto from './pages/Contacto';
import Login from './components/login';
import Registro from './components/Register';
import SearchPage from './pages/SearchPage';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aliados" element={<AliadosPage />} />
        <Route path="/ofertas" element={<OfertasPage />} />
        <Route path="/Productos" element={<ProductosPage />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Search" element={<SearchPage />} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
