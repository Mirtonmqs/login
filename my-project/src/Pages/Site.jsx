import React, { useState, useContext } from 'react';
import { FiSearch, FiMoon } from 'react-icons/fi';
import { LuMessageCircle } from 'react-icons/lu';
import { IoNotificationsOffOutline, IoSunnyOutline } from 'react-icons/io5';
import { CiLogout, CiUser, CiHome } from 'react-icons/ci';
import logo from '@/img/logoaspec.png';
import perfil from '@/img/perfil.png';
import '@/styles/Site.css';
import Usuarios from '@/Pages/Usuarios';
import { UserContext, UserProvider } from '@/Pages/Context';

const Site2 = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [activeComponent, setActiveComponent] = useState('home');
  const user = useContext(UserContext);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Pesquisar:', searchQuery);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'home':
        return (
          <div className="home-content">
            <p>Tables</p>
          </div>
        );
      case 'usuarios':
        return <Usuarios />;
      default:
        return null;
    }
  };

  return (
    <div className={`${sidebarOpen ? 'open' : 'closed'} ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="site-container">
        {/* Sidebar */}
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

        {/* Main content */}
        <div className="main">
          {/* Navbar */}
          <div className={`navbar-bg ${sidebarOpen ? 'open' : ''}`}>
            <div className="toggle-sidebar" onClick={toggleSidebar}>
              <span className="icon-toggle-sidebar">&#9776;</span>
            </div>
            <form className="form-button" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className="btn-lupa" type="submit">
                <FiSearch />
              </button>
            </form>
            <div className="navbar-collapse">
              <div className="icons-sidebar">
                <div className="perfil">
                  <div className="icons-container">
                    <button className="icon-msg" type="button">
                      <LuMessageCircle />
                    </button>
                    <button className="icon-sino" type="button">
                      <IoNotificationsOffOutline />
                    </button>
                    <button
                      className="toggle-dark-mode-btn"
                      type="button"
                      onClick={toggleDarkMode}
                    >
                      {darkMode ? <IoSunnyOutline /> : <FiMoon />}
                    </button>
                  </div>
                  <img
                    className="img-perfil"
                    src={user && user.img ? `http://localhost:3000/${user.img}` : perfil}
                    alt="Profile"
                  />
                  <span className="user-name">{user ? user.name : 'Carregando...'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
        </div>
        <div className={`content ${sidebarOpen ? 'open' : ''}`}>
            {renderActiveComponent()}

            {/* Nova div abaixo do navbar */}
            <div className="content-below-navbar">
              <h2>Bem-vindo ao painel de controle</h2>
              <p>Aqui você pode gerenciar seus projetos, visualizar notificações e muito mais.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

const App = () => (
  <UserProvider>
    <Site2 />
  </UserProvider>
);

export default App;
