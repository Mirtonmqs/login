import React, { useState } from 'react';
import '../style/Header.css';
import logo from '../img/logoaspec.png';
import Sidebar from './Sidebar'; // Importe o componente Sidebar

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
        {/* Título */}
        <div className="titulo">TEC</div>
        {/* Botão para abrir o Sidebar */}
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
