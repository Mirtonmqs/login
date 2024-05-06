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
      <div className="bg-site">
        <nav className="sidebar">
          <a className="logo" href=""></a>
        </nav>
        <div className="main">
          <nav className="navbar-bg"></nav>
          <div className="content"></div>
        </div>
      </div>
    </>
  );
};

export default Site2;
