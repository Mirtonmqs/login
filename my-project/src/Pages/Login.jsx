import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password,
      });
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      console.log('Login successful!', user);
      window.location.href = '/site';
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (error) => {
    if (error.response) {
      console.error('Erro durante o login:', error.response.data);
      setError('E-mail ou senha inválidos. Por favor, tente novamente.');
    } else if (error.request) {
      console.error('Sem resposta do servidor:', error.request);
      setError('Sem resposta do servidor. Por favor, tente novamente mais tarde.');
    } else {
      console.error('Erro na configuração da requisição:', error.message);
      setError('Ocorreu um erro. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <div className='bg-light'>
      <div className='login'>
        <form className='login-form' onSubmit={handleLogin}>
          <div className='titulo'>Aspec</div>
          <div className='form'>
            <label htmlFor='email'>Email:</label>
            <input
              className='campo-email'
              type='text'
              id='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor='password'>Password:</label>
            <input
              className='campo-senha'
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
}

export default Login;
