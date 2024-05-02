import React, { useState } from 'react';
import '@/styles/Site.css';
import { FiSearch } from 'react-icons/fi';

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
    console.log('Pesquisar:', searchQuery);
  };

  return (
    <div className={`bg-site ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <span className="menu-icon">&#9776;</span>
      </button>

      <nav className="navbar">
        <div className="container">
          <form className="form-site" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </form>
          <div className="icon">
            <FiSearch />
          </div>
        </div>
      </nav>

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
