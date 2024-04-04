import { useState } from 'react';
import './Login.css';

function Login() {
  // Define o estado inicial do formulário com os campos email e senha vazios
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  });

  // Função para lidar com a alteração dos campos do formulário
  const handleChange = (e) => {
    // Extrai o nome e o valor do campo do evento
    const { name, value } = e.target;
    // Atualiza o estado do formulário com os novos valores do campo alterado
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se o login e a senha são os desejados
    if (formData.email === 'usuario' && formData.senha === '1234') {
      // Redireciona para a página Site se o login for bem-sucedido
      window.location.href="/Site";
    } else {
      // Redireciona para a página ErrorPage se o login falhar
      console.log(window.location.href="/ErrorPage");
    }

    // Limpa os campos do formulário após a submissão
    setFormData({
      email: '',
      senha: '',
    });
  };

  // Renderiza o componente de login
  return (
    <>
      <div className="form-container">
        <h3>LOGIN</h3>
        
        {/* Formulário de login */}
        <form onChange={handleChange}>
          {/* Campo de entrada para o email */}
          <input 
            type="text" 
            id="email"
            name="email" // Corrige o nome do campo para "email"
            placeholder='E-mail'
            value={formData.email}
            onChange={handleChange}
          />
          {/* Campo de entrada para a senha */}
          <input
            type="password"
            id="password"
            name="senha" // Corrige o nome do campo para "senha"
            placeholder='Senha'
            value={formData.senha}
            onChange={handleChange}
          />
          {/* Botão de submissão do formulário */}
          <input type="submit" onClick={handleSubmit} />
        </form>
      </div>
    </>
  );
}

export default Login;
