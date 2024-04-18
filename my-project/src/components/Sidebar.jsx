import React, { useState } from 'react';

const Sidebar = ({ isOpen }) => {
  // Declaração de estados locais usando o hook useState
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Função para lidar com a mudança no campo de usuário (username)
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Função para lidar com a mudança no campo de senha (password)
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Função para lidar com o envio do formulário de login
  const handleLogin = (e) => {
    e.preventDefault(); // Impede o comportamento padrão de envio do formulário (recarregar a página)


    if (username === 'aspec' && password === '1234') {
      window.location.href = '/home';


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
          {/* Input para o nome de usuário (username) */}
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
          <label htmlFor="password">Senha:</label>
          {/* Input para a senha (password) */}
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {/* Botão de envio do formulário de login */}
          <button type="submit">Entrar</button>
        </form>
      </div>
    </aside>
  );
};

export default Sidebar;
