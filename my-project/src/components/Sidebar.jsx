import React from 'react';
import { CiLogout, CiUser, CiHome } from 'react-icons/ci';
import logo from '@/img/logoaspec.png';
import '@/styles/Site.css';

const Sidebar = ({ setActiveComponent }) => (
  <div className="sidebar">
    <div className="sidebar-top">
      <a href="#" className="container-logo">
        <img className="logo-sidebar" src={logo} alt="Logo" />
        <span className="logo-text">Aspec</span>
      </a>
      <ul className="sidebar-nav">
        <li className="sidebar-nav-title">Navegação</li>
        <li className="sidebar-item" onClick={() => setActiveComponent('home')}>
          <CiHome className="icon-home" aria-label="Início" />
          <a href="#">Início</a>
        </li>
        <li className="sidebar-item" onClick={() => setActiveComponent('usuarios')}>
          <CiUser className="icon-user" aria-label="Usuários" />
          <a href="#">Usuários</a>
        </li>
        <li className="sidebar-item">
          <CiLogout className="icon-logout" aria-label="Sair" />
          <a href="#">Sair</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Sidebar;
