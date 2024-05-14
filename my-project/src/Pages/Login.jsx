import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password,
      });
      console.log('Login successful!', response.data);
      window.location.href = '/registro';
    } catch (error) {
      if (error.response) {
        console.error('Error during login:', error.response.data);
        setError('Invalid email or password. Please try again.');
      } else if (error.request) {
        console.error('No response from server:', error.request);
        setError('No response from server. Please try again later.');
      } else {
        console.error('Request setup error:', error.message);
        setError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="bg-light">
      <div className="login">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="titulo">Aspec</div>
          <div className="form">
            <label htmlFor="email">Email:</label>
            <input
              className="campo-email"
              type="text"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
              className="campo-senha"
              type="password"
              id="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="button-login" type="submit">
            Login
          </button>

          {error && <p className="error-message">{error}</p>}

          <div className="inscricao">
            <p>
              Não tem uma conta?{' '}
              <a href="http://localhost:5173/registro">Registre-se</a>
            </p>
            <p>
              Esqueceu o <a href="">Email / Senha?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
