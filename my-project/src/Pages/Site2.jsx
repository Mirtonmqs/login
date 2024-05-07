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
      <header>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="search-container">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit">
              <FiSearch />
            </button>
          </form>
        </div>
        <div className="icons-container">
          <IoChatboxOutline />
          <IoNotificationsOffOutline />
        </div>
        <div className="header-content">
          <h2>Bem-vindo ao Meu Site</h2>
          <p>Este é um exemplo de conteúdo no cabeçalho.</p>
        </div>
      </header>

      <aside class="sidebar2">
        <ul>
          <li><a href="#">Página 1</a></li>
          <li><a href="#">Página 2</a></li>
          <li><a href="#">Página 3</a></li>
        </ul>
      </aside>

      <main>
        <div className="main-content">
          <h2>Conteúdo Principal</h2>
          <p>Este é um exemplo de conteúdo no corpo do site.</p>
        </div>
      </main>
    </>
  );
};

export default Site2;
