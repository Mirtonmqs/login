import { useState } from 'react';
import '../styles/Home.css'; 
import logo from '../img/logoaspec.png';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
      password: '' // Limpe também o campo 'password'
    });
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
         <div className="titulo">TEC</div>
        <ul className="nav-links">
          <li>
            <a href="#">Página Principal</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    
      <div className="form-container">
      <h3>Registre-se</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.usuario}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Sobrenome</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="senha">E-mail</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha</label>
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
