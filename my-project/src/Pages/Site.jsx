import React, { useState } from 'react';
import '@/styles/Site.css';

const Site = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Função para alternar o estado do sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`bg-site ${sidebarOpen ? 'sidebar-open' : ''}`}>
      {/* Botão de menu hamburguer */}
    <button className="toggle-btn" onClick={toggleSidebar}>
        <span className="menu-icon">&#9776;</span>
      </button>

      {/* Navbar */}
      <div className='navbar'>
        {/* Conteúdo da navbar aqui */}
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        {/* Menu */}
        <ul>
          <li>Item de Menu 1</li>
          <li>Item de Menu 2</li>
          <li>Item de Menu 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Site;
