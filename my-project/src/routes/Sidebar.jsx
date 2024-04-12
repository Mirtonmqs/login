import React, { useState } from 'react';
import './Sidebar.css';

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
    e.preventDefault(); // Evita o comportamento padrão do formulário

    // Aqui você pode implementar a lógica de autenticação
    if (username === 'aspec' && password === '1234') {
      // Redirecionamento usando window.location.href
      window.location.href = '/register'; // Substitua '/dashboard' pelo URL desejado

      // Resetar os campos após o login (opcional)
      setUsername('');
      setPassword('');
    } else {
      // Exiba uma mensagem de erro ou feedback ao usuário
      alert('Credenciais inválidas. Tente novamente.');

      // Limpe os campos (opcional)
      setUsername('');
      setPassword('');
    }
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-content">
        <div className="sidebar-header">
          {/* Conteúdo opcional do cabeçalho */}
        </div>
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
