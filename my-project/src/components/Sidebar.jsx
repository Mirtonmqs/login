import React, { useState } from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ isOpen, toggle }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault(); 

    if (username === 'aspec' && password === '1234') {
      window.location.href = '/home'; 

      // Resetar os campos após o login (opcional)
      setUsername('');
      setPassword('');
    } else {
      alert('Credenciais inválidas. Tente novamente.');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-content">
        {/* Formulário de login */}
        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="username">E-mail:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </aside>
  );
};

export default Sidebar;
