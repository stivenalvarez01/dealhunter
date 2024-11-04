import React from 'react';
import BannerPrincipal from '../components/BannerPrincipal';
import BannerSegundo from '../components/BannerSegundo';
import CategoriasComponent from '../components/CategoriasComponent';
import CategoriasDespegables from '../components/CategoriasDesplegables';
import ComponenteCincoHome from '../components/ComponenteCincoHome';




const Home = () => {
  return (
    <div>
      <BannerPrincipal />
      <BannerSegundo />
      <CategoriasComponent />
      <CategoriasDespegables />
      <ComponenteCincoHome />

      
    </div>
  );
}

export default Home;
