import React, { useState, useContext } from 'react'; // Importe o hook useContext
import '@/styles/Site.css';
import { FiSearch } from 'react-icons/fi';
import { UserContext } from '@/contexts/UserContexts';

const Site = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const { user } = useContext(UserContext); // hook useContext para acessar o contexto de usuário

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
      <div className="bg-site">
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
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
                <div className="icon-lupa">
                  <FiSearch />
                </div>
              </form>
            </div>
          </nav>
          <ul>
            <li>Início</li>
            <li>Usuários</li>
            <li>Sair</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Site;
