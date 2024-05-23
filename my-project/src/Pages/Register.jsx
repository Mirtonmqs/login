import React, { useState } from 'react';
import axios from 'axios';
import '@/styles/Site.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/usuarios', {
        name,
        email,
        password,
        login,
      });
      alert('Registro bem-sucedido!');
      setName('');
      setEmail('');
      setPassword('');
      setLogin('');
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
      alert('Erro ao registrar usuário. Por favor, tente novamente.');
    }
  };

  return (
    <div className='bg-light'>
      <div className='register'>
        <form className='register-form' onSubmit={handleRegister}>
          <div className='titulo'>Aspec</div>
          <div className='form'>
            <label htmlFor='name'>Nome completo:</label>
            <input
              className='name'
              type='text'
              id='Name'
              placeholder='Nome completo'
              value={name}
              onChange={handleNameChange}
            />
            <label htmlFor='email'>Email:</label>
            <input
              className='email'
              type='text'
              id='email'
              placeholder='Email'
              value={email}
              onChange={handleEmailChange}
            />
            <label htmlFor='login'>Login:</label>
            <input
              className='nome'
              type='text'
              id='login'
              placeholder='Login'
              value={login}
              onChange={handleLoginChange}
            />
            <label htmlFor='password'>Senha:</label>
            <input
              className='password'
              type='password'
              id='password'
              placeholder='Crie sua Senha'
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button className='button-registrar'>REGISTRAR</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
