import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import '@/styles/Site.css';

const Site2 = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [activeComponent, setActiveComponent] = useState('home');

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Pesquisar:', searchQuery);
  };
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`${sidebarOpen ? 'open' : 'closed'} ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="site-container">
        <Sidebar setActiveComponent={setActiveComponent} />
        <div className="main">
          <Navbar
            sidebarOpen={sidebarOpen}
            toggleSidebar={toggleSidebar}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearchSubmit={handleSearchSubmit}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
          <Content activeComponent={activeComponent} sidebarOpen={sidebarOpen} />
        </div>
      </div>
    </div>
  );
};

export default Site2;
