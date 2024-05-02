import React, { useState } from 'react';
import '@/styles/Site.css';
import { Link } from 'react-router-dom';

const Site = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // estado do sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    
    <div className={`bg-site ${sidebarOpen ? 'sidebar-open' : ''}`}>
      {/*  btn menu */}
      <button className='toggle-btn' onClick={toggleSidebar}>
        <span className='menu-icon'>&#9776;</span>
      </button>
      <div className='navbar'>

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
