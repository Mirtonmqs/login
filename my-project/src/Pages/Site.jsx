import React, { useState, useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import { LuMessageCircle } from 'react-icons/lu';

import { IoNotificationsOffOutline, IoSunnyOutline } from 'react-icons/io5';
import { CiLogout, CiUser, CiHome } from 'react-icons/ci';
import { FiMoon } from 'react-icons/fi';
import logo from '@/img/logoaspec.png';
import perfil from '@/img/perfil.png';
import '@/styles/Site.css';
import Usuarios from '@/Pages/Usuarios';
import { UserContext, UserProvider } from '@/Pages/Context';
import buttonImage from '@/img/eua.jpg';

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
          <div className="table-users">
            <h1 className="title-table">Tables</h1>
            <div className="text1">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                inventore maxime voluptatem assumenda, officiis ex corporis sint
                cupiditate praesentium quis distinctio dicta possimus cum
                laboriosam nulla, nisi deleniti. Corrupti, nisi?
              </p>
            </div>
          </div>
        );
      case 'usuarios':
        return <Usuarios />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`${sidebarOpen ? 'open' : 'closed'} ${
        darkMode ? 'dark-mode' : 'light-mode'
      }`}
    >
      <div className="container">
        <div className="sidebar">
          <div className="topo-sidebar">
            <a href="#">
              <img className="logo" src={logo} alt="Logo" />
            </a>
          </div>
          <div className="menu">
            <button onClick={() => setActiveComponent('home')}>
              <CiHome className="icon-home" aria-label="Início" />
              Início
            </button>
            <button onClick={() => setActiveComponent('usuarios')}>
              <CiUser className="icon-user" aria-label="Usuários" />
              Usuários
            </button>
            <button onClick={() => setActiveComponent('logout')}>
              <CiLogout className="icon-logout" aria-label="Sair" />
              Sair
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
              <button className="btn-lupa" type="submit">
                <FiSearch />
              </button>

              <div className="perfil">
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
                <button className="img-bandeira" type="button">
                  <img src={buttonImage} alt="Button Image" />
                </button>

                <img
                  className="img-perfil"
                  src={user?.image || perfil}
                  alt="perfil"
                />
                <span className="user-name">
                  {user ? user.name : 'Carregando...'}
                </span>
              </div>
            </form>
          </div>
          <div className="corpo">{renderActiveComponent()}</div>
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
