import React, { useState } from 'react';
import '../styles/Site.css';

const Login = () => {
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
      <div className="login">
        <form className="login-form" onSubmit={handleLogin}>
          <h1>Aspec</h1>
          <div className='form'>
            <label htmlFor="username"></label>
            <input
              className="email"
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
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <button type="submit">Login</button>

        <div className='Inscrever'>
          <p>Não tem uma conta?  <a href="">Cadastre-se</a></p>
          <p>Esqueceu o  <a href="">Email / Senha?</a></p>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
