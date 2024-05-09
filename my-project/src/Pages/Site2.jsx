import React, { useState, useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoChatboxOutline } from 'react-icons/io5';
import { IoNotificationsOffOutline } from 'react-icons/io5';
import { UserContext } from '@/contexts/UserContexts';
import logo from '@/img/logoaspec.png';
import '@/styles/Site.css';

const Site2 = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const { user } = useContext(UserContext);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    console.log('teste')
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
        <div class="container">
          <div class="sidebar">
            <div className="">
              <a href="#">
                <img className="logo" src={logo} alt="Logo" />
              </a>
            </div>
            <ul>
              <li>Início</li>
              <li>Usuários</li>
              <li>Sair</li>
            </ul>
          </div>

          <div class="bg-site">
            <div class="navbar">
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
              </form>
            </div>
            <div className="corpo">
              <h1>oi</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Site2;
