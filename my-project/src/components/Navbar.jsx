import React, { useContext } from 'react';
import { FiSearch, FiMoon } from 'react-icons/fi';
import { LuMessageCircle } from 'react-icons/lu';
import { IoNotificationsOffOutline, IoSunnyOutline } from 'react-icons/io5';
import perfil from '@/img/perfil.png';
import { UserContext } from '@/Pages/Context';
import '../styles/Site.css';

const Navbar = ({ sidebarOpen, toggleSidebar, searchQuery, setSearchQuery, handleSearchSubmit, darkMode, toggleDarkMode }) => {
  const user = useContext(UserContext);

  return (
    <div className={`navbar-bg ${sidebarOpen ? 'open' : ''}`}>
      <div className="toggle-sidebar" onClick={toggleSidebar}>
        <span className="icon-toggle-sidebar">&#9776;</span>
      </div>
      <form className="form-button" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn-lupa" type="submit">
          <FiSearch />
        </button>
      </form>
      <div className="navbar-collapse">
        <div className="icons-sidebar">
          <div className="perfil">
            <div className="icons-container">
              <button className="icon-msg" type="button">
                <LuMessageCircle />
              </button>
              <button className="icon-sino" type="button">
                <IoNotificationsOffOutline />
              </button>
              <button className="toggle-dark-mode-btn" type="button" onClick={toggleDarkMode}>
                {darkMode ? <IoSunnyOutline /> : <FiMoon />}
              </button>
            </div>
            <img
              className="img-perfil"
              src={user && user.img ? `http://localhost:3000/${user.img}` : perfil}
              alt="Profile"
            />
            <span className="user-name">{user ? user.name : 'Carregando...'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
