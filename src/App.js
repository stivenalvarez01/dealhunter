import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AliadosPage from './pages/AliadosPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aliados" element={<AliadosPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
