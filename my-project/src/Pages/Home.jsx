import { useState } from 'react';
import '../styles/Home.css'; 
import logo from '../img/logoaspec.png';
import '../styles/SidebarHome.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [showSidebar, setShowSidebar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      name: '',
      email: '',
      password: ''
    });
  };


  const toggleSidebar = () => {
    setShowSidebar(!showSidebar); // Toggle sidebar visibility
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="titulo" onClick={toggleSidebar}>TEC</div>
        {/* Botão para abrir o sidebar */}
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          Menu
        </button>
      </nav>

      <aside className={`sidebar ${showSidebar ? 'open' : ''}`}>
       
        <div className="sidebar-content">
          <button >Registre-se</button>
          <button >Quem Somos</button>
          <button >Contatos</button>
        </div>
      </aside>

      {/* Formulário */}
      <div className="form-container">
        <h3>Registre-se</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
