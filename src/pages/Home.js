import React from 'react';
import BannerPrincipal from '../components/BannerPrincipal';
import BannerSegundo from '../components/BannerSegundo';
import CategoriasComponent from '../components/CategoriasComponent';



const Home = () => {
  return (
    <div>
      <BannerPrincipal />
      <BannerSegundo />
      <CategoriasComponent />
      
    </div>
  );
}

export default Home;
