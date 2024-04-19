// Header.jsx

import React, { useState } from 'react';
import '../styles/Site.css'; // Importe o arquivo de estilos para o header
import logo from '../img/logoaspec.png';

const Header = ({ toggleSidebar }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
    toggleSidebar(); // Chama a função passada como prop para abrir o sidebar
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="titulo">TEC</div>
      {/* Elemento de login que chama a função handleToggleSidebar para abrir o Sidebar */}
      <button className="login-btn" onClick={handleToggleSidebar}>
        Menu
      </button>

      {/* Renderiza o Sidebar condicionalmente */}
      {showSidebar && (
        <div className="sidebar">
          <ul>
            <li>
              <button>Início</button>
            </li>
            <li>
              <button>Usuários</button>
            </li>
            <li>
              <button>Sair</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
