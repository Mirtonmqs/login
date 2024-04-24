import React, { useState } from 'react';
import '../styles/Site.css';
import logo from '../img/logoaspec.png';
import { UserContext } from '../contexts/UserContexts';

const Header = ({ toggleSidebar }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
    toggleSidebar(); // Chama a função passada como prop para abrir o sidebar
  };

  const context = React.useContext(UserContext);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="titulo-header">TEC</div>
      {context.usuario}
      {/* Elemento de login que chama a função handleToggleSidebar para abrir o Sidebar */}
      <button className="menu-btn" onClick={handleToggleSidebar}>
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
              <a href="http://localhost:5173/usuarios">
              <button>Usuários</button>
              </a>
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
