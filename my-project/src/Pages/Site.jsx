import React, { useState } from 'react';
import '@/styles/Site.css';
import Header from '@/components/Header';

const Site = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
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
