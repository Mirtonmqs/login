import React, { useState } from 'react';
import '../style/Header.css';
import logo from '../img/logoaspec.png';
import Sidebar from './Sidebar';

const Header = () => {
  // Estado para controlar a visibilidade do Sidebar
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Função para alternar a visibilidade do Sidebar
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      {/* Barra de navegação */}
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="titulo">TEC</div>
        <div className="menu-btn" onClick={toggleSidebar}>
          Login
        </div>
      </nav>

      {/* Renderiza o componente Sidebar com base no estado sidebarVisible */}
      {sidebarVisible && <Sidebar isOpen={sidebarVisible} toggle={toggleSidebar} />}
    </>
  );
};

export default Header;
