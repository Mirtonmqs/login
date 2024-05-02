import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const api_url = 'http://localhost:3000';
  const [setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(api_url, { email, password });

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        updateUserData(response.data.user);
        window.location.href = '/registro';
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

  const updateUserData = (userData) => {
    // Atualiza o estado 'user'
    setUser(userData);
  };

  return (
    <div className='bg-light'>
      <div className='login'>
        <form className='login-form' onSubmit={handleLogin}>
          <div className='titulo'>Aspec</div>
          <div className='form'>
            <label htmlFor='email'>Email:</label>
            <input className='campo-email'
              type='text'
              id='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor='password'>Password:</label>
            <input className='campo-senha'
              type='password'
              id='password'
              placeholder='Senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className='button-login' type='submit'>
            Login
          </button>

          {error && <p className='error-message'>{error}</p>}

          <div className='inscricao'>
            <p>
              Não tem uma conta?{' '}
              <a href='http://localhost:5173/registro'>Registre-se</a>
            </p>
            <p>
              Esqueceu o <a href=''>Email / Senha?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
