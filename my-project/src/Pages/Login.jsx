import React, { useState } from 'react';
import '../styles/Site.css';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', { username, password });

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        window.location.href = '/';
      } else {
        setError('Credenciais inválidas. Tente novamente.');
        setUsername('');
        setPassword('');
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
      setError('Erro ao fazer a solicitação. Por favor, tente novamente.');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="bg-light">
      <div className="login">
        <form className="login-form" onSubmit={handleLogin}>
          <h1>Aspec</h1>
          <div className='form'>
            <label htmlFor="username">Email:</label>
            <input
              type="text"
              id="username"
              placeholder="Email"
              value={username}
              onChange={handleUsernameChange}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Senha"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <button className='btn' type="submit">Login</button>

          {error && <p className="error-message">{error}</p>}

          <div className='Inscrever'>
            <p>Não tem uma conta? <a href="http://localhost:5173/registro">Registre-se</a></p>
            <p>Esqueceu o <a href="">Email / Senha?</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
