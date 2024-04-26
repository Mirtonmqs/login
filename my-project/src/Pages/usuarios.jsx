import React from 'react';
import '../styles/Site.css';

const Pessoa = ({ id, nome, cpf, email }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{nome}</td>
      <td>{cpf}</td>
      <td>{email}</td>
    </tr>
  );
};

const ListagemPessoas = () => {
  const pessoas = [
    {
      nome: '',
      cpf: '',
      email: '',
    },
    {
      nome: '',
      cpf: '',
      email: '',
    },
    {
      nome: '',
      cpf: '',
      email: '',
    },
    {
      nome: '',
      cpf: '',
      email: '',
    },
  ];

  return (
    <div className="bg-usuarios">
      <div className="form-usuarios">
        <div className="titulo-usuarios">LISTAGEM DE USUÁRIOS</div>
        <table border="1" cellPadding="8" cellSpacing="0">
          <thead className="table">
            <tr>
              <th className="id">ID</th>
              <th className="nome">Nome</th>
              <th className="cpf">CPF</th>
              <th className="email">Email</th>
            </tr>
          </thead>
          <tbody>
            {pessoas.map((pessoa) => (
              <Pessoa
                key={pessoa.id}
                id={pessoa.id}
                nome={pessoa.nome}
                cpf={pessoa.cpf}
                email={pessoa.email}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListagemPessoas;
