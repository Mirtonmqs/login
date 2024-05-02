import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@/styles/Site.css';

const Site = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para lidar com a pesquisa
    console.log('Pesquisar:', searchQuery);
  };

  return (
    <div className={`bg-site ${sidebarOpen ? 'sidebar-open' : ''}`}>
      {/* Botão do menu */}
      <button className='toggle-btn' onClick={toggleSidebar}>
        <span className='menu-icon'>&#9776;</span>
      </button>

      {/* Navbar */}
      <nav className='navbar'>
        <div className="container">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
          {/* Formulário de pesquisa */}
          <form className="search-form" onSubmit={handleSearchSubmit}>
          </form>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul>
          <li>Início</li>
          <li>Usuários</li>
          <li>Sair</li>
        </ul>
      </div>
    </div>
  );
};

export default Site;
