import React, { useState } from 'react';
import '../styles/Login.css';

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
    <div className="bglight">
      <div className="login">
        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="username"></label>
          <h1>Aspec</h1>
          <input
            className="email"
            type="text"
            id="username"
            placeholder="Email"
            value={username}
            onChange={handleUsernameChange}
          />
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit">Login</button>
        </form>
        <div className='SingUp'> 
        <strong>Does'n have an account? <a href="">Sing Up</a></strong>
        <br />
        <strong>Forgot <a href="">Username / Password?</a></strong>
        </div>
      </div>
    </div>
  );
};

export default Login;
