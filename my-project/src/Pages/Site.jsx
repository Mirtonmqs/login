import React, { useState } from 'react';
import '../styles/Site.css';
import front from '../img/front.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Site = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    // Implemente a lógica para abrir ou fechar o sidebar aqui
    console.log('Abrir ou fechar sidebar');
  };

  return (
    <div className="site-container">
     
      {/* Renderiza o Header dentro do DefaultLayout */}
      <Header toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Site;
