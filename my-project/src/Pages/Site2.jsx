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
      <div className="bg-site2">
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <aside class="list-sidebar">
            <ul>
              <li>
                <a href="#">Página 1</a>
              </li>
              <li>
                <a href="#">Página 2</a>
              </li>
              <li>
                <a href="#">Página 3</a>
              </li>
            </ul>
          </aside>

    <main>
            <nav className='cabecalho'>
            <form className="form-site" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <div className="icons">
                <button className='btn-lupa'>
                  <FiSearch />
                </button>
                <button className='icon-msg'>
                  <IoChatboxOutline />
                </button>
                <button className='icon-sino'>
                  <IoNotificationsOffOutline />
                </button>
              </div>
            </form>
              <button className="toggle-btn" onClick={toggleSidebar}>
                <span className="menu-icon">&#9776;</span>
              </button>
            </nav>
          </main>

            <div className="main-content">
              <h2>Conteúdo Principal</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nobis iste excepturi a porro velit perferendis, necessitatibus placeat, molestiae eos quis qui autem recusandae voluptate sit voluptatem illum incidunt. Quos?</p>
            </div>

        </div>
      </div>
    </>
  );
};

export default Site2;
