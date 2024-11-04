import React from 'react';
import BannerPrincipal from '../components/BannerPrincipal';
import BannerSegundo from '../components/BannerSegundo';
import CategoriasComponent from '../components/CategoriasComponent';
import CategoriasDespegables from '../components/CategoriasDesplegables';
import ComponenteCincoHome from '../components/ComponenteCincoHome';
import ComponenteSeisHome from '../components/ComponenteSeisHome';
import ComponenteSieteHome from '../components/ComponenteSieteHome';




const Home = () => {
  return (
    <div>
      <BannerPrincipal />
      <BannerSegundo />
      <CategoriasComponent />
      <CategoriasDespegables />
      <ComponenteCincoHome />
      <ComponenteSeisHome />
      <ComponenteSieteHome />



      
    </div>
  );
}

export default Home;
