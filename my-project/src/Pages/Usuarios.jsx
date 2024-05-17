import React from 'react';
import '@/styles/Site.css';
import { AiTwotoneEdit, AiOutlineDelete } from "react-icons/ai";


const Pessoa = ({ id, nome, cpf, email }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{nome}</td>
      <td>{cpf}</td>
      <td>{email}</td>
      <td className='actions'>
        <button><AiTwotoneEdit />
        </button>
        <button><AiOutlineDelete />
        </button>
      </td>
    </tr>
  );
};

const ListagemPessoas = () => {
  const pessoas = [
    {
      id: 1,
      nome: '',
      cpf: '',
      email: '',
    },
    {
      id: 2,
      nome: '',
      cpf: '',
      email: '',
    },
    {
      id: 3,
      nome: '',
      cpf: '',
      email: '',
    },
    {
      id: 4,
      nome: '',
      cpf: '',
      email: '',
    },
  ];

  return (
    <div className="bg-usuarios">
      <div className="form-usuarios">
        <div className="titulo-usuarios">LISTAGEM DE USUÁRIOS</div>
        <div className="tabelas">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>CPF</th>
                <th>Email</th>
                <th>Actions</th>
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
    </div>
  );
};

export default ListagemPessoas;
