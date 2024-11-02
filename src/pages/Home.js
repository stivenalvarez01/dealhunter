import React from 'react';
import BannerPrincipal from '../components/BannerPrincipal';
import BannerSegundo from '../components/BannerSegundo';
import CategoriasComponent from '../components/CategoriasComponent';
import CategoriasDespegables from '../components/CategoriasDesplegables';




const Home = () => {
  return (
    <div>
      <BannerPrincipal />
      <BannerSegundo />
      <CategoriasComponent />
      <CategoriasDespegables />

      
    </div>
  );
}

export default Home;
