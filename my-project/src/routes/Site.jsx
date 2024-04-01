import { useState } from 'react';
import './App.css';

function Site() {
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer algo com os dados do formulário, como enviá-los para um servidor
    console.log(formData);
    // Limpar os campos do formulário
    setFormData({
      name: '',
      email: '',
    });
  };

  return (
    <>
      <div className="form-container">
      <h1>Bem-vindo ao seu site</h1>
        <form onSubmit={handleSubmit}>
        </form>
      </div>
    </>
  );
}

export default Site;
