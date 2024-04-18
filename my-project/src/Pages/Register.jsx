import React, { useState } from 'react';
import '../styles/Site.css';

const Register = () => {
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
      window.location.href = '/';

      setUsername('');
      setPassword('');
    } else {
      alert('Credenciais inválidas. Tente novamente.');

      setUsername('');
      setPassword('');
    }
  };
  return (
    <div className="bg-light">
      <div className="register">
        <form className="login-form" onSubmit={handleLogin}>
          <h1>Aspec</h1>
          <h3>Registre-se</h3>
          <div className="form">
            <label htmlFor="username"></label>
            <input
              className="email"
              type="text"
              id="username"
              placeholder="Nome completo"
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              className="email"
              type="text"
              id="username"
              placeholder="Email"
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              className="email"
              type="text"
              id="username"
              placeholder="Senha"
              value={username}
              onChange={handleUsernameChange}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Confirme sua Senha"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
