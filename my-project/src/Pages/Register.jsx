import React, { useState } from 'react';
import '../styles/Site.css';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (fullName && email && password) {
      alert('Registro bem-sucedido!');
      setFullName('');
      setEmail('');
      setPassword('');
    } else {
      alert('Preencha todos os campos.');
    }
  };

  return (
    <div className="bg-light">
      <div className="register">
        <form className="register-form" onSubmit={handleRegister}>
          <h1>Aspec</h1>
          <h3>Registre-se</h3>
          <div className="form">
            <label htmlFor="fullName">Nome completo:</label>
            <input
              className="name"
              type="text"
              id="fullName"
              placeholder="Nome completo"
              value={fullName}
              onChange={handleFullNameChange}
            />
            <label htmlFor="email">Email:</label>
            <input
              className="email"
              type="text"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <label htmlFor="password">Senha:</label>
            <input
              className="password"
              type="password"
              id="password"
              placeholder="Crie sua Senha"
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
