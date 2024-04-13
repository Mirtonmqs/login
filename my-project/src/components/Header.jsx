import React from 'react';
import '../styles/Header.css';
import logo from '../img/logoaspec.png';

const Header = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="titulo">TEC</div>
      {/* Elemento de login que chama a função toggleSidebar para abrir o Sidebar */}
      <button className="login-btn" onClick={toggleSidebar}>
        Login
      </button>
    </nav>
  );
};

export default Header;
