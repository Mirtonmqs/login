import React, { useState, useContext } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const api_url = '#######'; 
  
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(api_url, { email, password });

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        updateUserData(response.data.user); 
        window.location.href = '/';
      } else {
        setError('Erro nas credenciais');
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
      setError('Erro ao fazer a solicitação.');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="bg-light">
      <div className="login">
        <form className="login-form" onSubmit={handleLogin}>
          <h1>Aspec</h1>
          <div className='form'>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
