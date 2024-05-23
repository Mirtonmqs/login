import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoNotificationsOffOutline, IoChatboxOutline, IoSunnyOutline } from 'react-icons/io5';
import { CiLogout, CiUser, CiHome } from 'react-icons/ci';
import { FiMoon } from 'react-icons/fi';
import logo from '@/img/logoaspec.png';
import perfil from '@/img/perfil.jpg';
import '@/styles/Site.css';
import { Link } from 'react-router-dom';

const Site2 = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);

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

  return (
    <div className={`${sidebarOpen ? 'open' : 'closed'} ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="container">
        <div className="sidebar">
          <div className="topo-sidebar">
            <a href="#">
              <img className="logo" src={logo} alt="Logo" />
            </a>
          </div>
          <div className="menu">
            <button>
              <Link to="/">
                <CiHome className="icon-home" aria-label="Início" />
                Início
              </Link>
            </button>
            <button>
              <Link to="/usuarios">
                <CiUser className="icon-user" aria-label="Usuários" />
                Usuários
              </Link>
            </button>
            <button>
              <Link to="/">
                <CiLogout className="icon-logout" aria-label="Sair" />
                Sair
              </Link>
            </button>
          </div>
        </div>

        <div className="bg-site">
          <div className="navbar">
            <div className="btn-menu">
              <button className="toggle-btn" onClick={toggleSidebar}>
                <span className="menu-icon">&#9776;</span>
              </button>
            </div>
            <form className="form-site" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <div className="icons">
                <button className="btn-lupa">
                  <FiSearch />
                </button>
                <button className="icon-msg">
                  <IoChatboxOutline />
                </button>
                <button className="icon-sino">
                  <IoNotificationsOffOutline />
                </button>
              </div>
              <div className="perfil">
                <button className="toggle-dark-mode-btn" onClick={toggleDarkMode}>
                  {darkMode ?  <IoSunnyOutline /> : <FiMoon />} 
                </button>
                <img className="img-perfil" src={perfil} alt="perfil" />
                <div className="nome-usuario">Usuario</div>
              </div>
            </form>
          </div>
          <div className="corpo">
            <h1 className="title-table">Tables</h1>
            <div className="table-users">
              <div className="text1">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  inventore maxime voluptatem assumenda, officiis ex corporis
                  sint cupiditate praesentium quis distinctio dicta possimus
                  cum laboriosam nulla, nisi deleniti. Corrupti, nisi?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Site2;
