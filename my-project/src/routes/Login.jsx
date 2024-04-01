import { useState } from 'react';
import './App.css';

function Login() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se o login e a senha são os desejados
    if (formData.name === 'usuario' && formData.password === '1234') {
    window.location.href="/Site"
    } else {
      console.log(window.location.href="/ErrorPage");
    }

    setFormData({
      name: '',
      password: '',
    });
  };

  return (
    <>
      <div className="form-container">
        <h1>SEU LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Login</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
