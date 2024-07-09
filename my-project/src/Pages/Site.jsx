import React, { useState, useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { LuMessageCircle } from "react-icons/lu";
import { IoNotificationsOffOutline, IoSunnyOutline } from "react-icons/io5";
import { CiLogout, CiUser, CiHome } from "react-icons/ci";
import { FiMoon } from "react-icons/fi";
import logo from "@/img/logoaspec.png";
import perfil from "@/img/perfil.png";
import "@/styles/Site.css";
import Usuarios from "@/Pages/Usuarios";
import { UserContext, UserProvider } from "@/Pages/Context";

const Site2 = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [activeComponent, setActiveComponent] = useState("home");
  const user = useContext(UserContext);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Pesquisar:", searchQuery);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "home":
        return (
          <div className="home-content">
            <p>
              Bem-vindo à página inicial! Aqui você pode encontrar informações
              e acessar outras seções do site.
            </p>
          </div>
        );
      case "usuarios":
        return <Usuarios />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`${sidebarOpen ? "open" : "closed"} ${
        darkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <div className="container">
        <div className="sidebar">
          <div className="topo-sidebar">
            <a href="#">
              <img className="logo-sidebar" src={logo} alt="Logo" />
              <span className="logo-text">Aspec</span>
            </a>
          </div>
          <div className="menu-sidebar">
            <button onClick={() => setActiveComponent("home")}>
              <CiHome className="icon-home" aria-label="Início" />
              Início
            </button>
            <button onClick={() => setActiveComponent("usuarios")}>
              <CiUser className="icon-user" aria-label="Usuários" />
              Usuários
            </button>
            <button onClick={() => setActiveComponent("logout")}>
              <CiLogout className="icon-logout" aria-label="Sair" />
              Sair
            </button>
          </div>
        </div>

        <div className="bg-site">
          <div className="header">
            <div className="btn-menu">
              <button className="toggle-sidebar" onClick={toggleSidebar}>
                <span className="icon-toggle-sidebar">&#9776;</span>
              </button>
            </div>
            <form className="form-site" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className="btn-lupa" type="submit">
                <FiSearch />
              </button>

              <div className="perfil">
                <button className="icon-msg" type="button">
                  <LuMessageCircle />
                </button>
                <button className="icon-sino" type="button">
                  <IoNotificationsOffOutline />
                </button>
                <button
                  className="toggle-dark-mode-btn"
                  type="button"
                  onClick={toggleDarkMode}
                >
                  {darkMode ? <IoSunnyOutline /> : <FiMoon />}
                </button>
                <img
                  className="img-perfil"
                  src={
                    user && user.img
                      ? `http://localhost:3000/${user.img}`
                      : perfil
                  }
                  alt="Profile"
                />
                <span className="user-name">
                  {user ? user.name : "Carregando..."}
                </span>
              </div>
            </form>
          </div>
          <div className="corpo">{renderActiveComponent()}</div>
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <UserProvider>
    <Site2 />
  </UserProvider>
);

export default App;
