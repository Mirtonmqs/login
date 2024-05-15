import React, { useState, useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoNotificationsOffOutline, IoChatboxOutline } from 'react-icons/io5';
import { CiLogout, CiUser, CiHome } from 'react-icons/ci';
import { UserContext } from '@/contexts/UserContexts';
import logo from '@/img/logoaspec.png';
import perfil from '@/img/perfil.png';
import '@/styles/Site.css';

const Site2 = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const { user } = useContext(UserContext);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    console.log('teste');
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Pesquisar:', searchQuery);
  };

  return (
    <>
      <div className={`${sidebarOpen ? 'open' : 'close'}`}>
        <div className="container">
          <div className="sidebar">
            <div className="topo-sidebar">
              <a href="#">
                <img className="logo" src={logo} alt="Logo" />
              </a>
            </div>
            <div className="buttons">
              <button>
                <a href="">
                  {' '}
                  <span className="icon-home">
                    {' '}
                    <CiHome />
                  </span>
                  Início
                </a>
              </button>
              <button>
                <a href="/usuarios">
                  {' '}
                  <span className="icon-user">
                    {' '}
                    <CiUser />
                  </span>
                  Usuários
                </a>
              </button>
              <button>
                <a href="/">
                  {' '}
                  <span className="icon-logout">
                    <CiLogout />
                  </span>
                  Sair
                </a>
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
                  <h1>Usuario</h1>
                  <img className="img-perfil" src={perfil} alt="perfil" />
                </div>
              </form>
            </div>
            <div className="corpo">
              <h1 className="titulo-site">Tables</h1>
              <div className="text1">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  inventore maxime voluptatem assumenda, officiis ex corporis
                  sint cupiditate praesentium quis distinctio dicta possimus cum
                  laboriosam nulla, nisi deleniti. Corrupti, nisi?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Site2;
