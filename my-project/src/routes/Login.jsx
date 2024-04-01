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
        <h3>LOGIN</h3>
        <form onChange={handleChange}>
          <input type="text" id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
             />
          <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          <input type="submit" onClick={handleSubmit} />
        </form>
      </div>
    </>
  );
}

export default Login;
