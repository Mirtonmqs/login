import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '@/styles/Site.css';
import { AiTwotoneEdit, AiOutlineDelete, AiOutlineSave } from "react-icons/ai";

const Pessoa = ({ pessoa, isEditing, onEdit, onSave, onChange, onDelete }) => {
  const { id, email, name, login } = pessoa;
  return (
    <tr>
      <td>{id}</td>
      <td>
        {isEditing ? (
          <input
            className="input-edit"
            type="email"
            value={email}
            onChange={(e) => onChange(id, 'email', e.target.value)}
          />
        ) : (
          email
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            className="input-edit"
            type="text"
            value={name}
            onChange={(e) => onChange(id, 'name', e.target.value)}
          />
        ) : (
          name
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            className="input-edit"
            type="text"
            value={login}
            onChange={(e) => onChange(id, 'login', e.target.value)}
          />
        ) : (
          login
        )}
      </td>
      <td className='actions'>
        {isEditing ? (
          <button className='icon-save' onClick={() => onSave(pessoa)}><AiOutlineSave /></button>
        ) : (
          <button className='icon-edit' onClick={() => onEdit(id)}><AiTwotoneEdit /></button>
        )}
        <button className='icon-delete' onClick={() => onDelete(id)}><AiOutlineDelete /></button>
      </td>
    </tr>
  );
};

const ListagemPessoas = () => {
  const [pessoas, setPessoas] = useState([]);
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({});

  useEffect(() => {
    const fetchPessoas = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/usuarios');
        setPessoas(response.data.users);
        console.log(response.data.users);
      } catch (error) {
        console.error('Erro ao buscar pessoas:', error);
        setError('Erro ao carregar os dados. Por favor, tente novamente mais tarde.');
      }
    };

    fetchPessoas();
  }, []);

  const handleEdit = (id) => {
    setEditingId(id);
    const pessoa = pessoas.find(pessoa => pessoa.id === id);
    setEditValues({ email: pessoa.email, name: pessoa.name, login: pessoa.login });
  };

  const handleChange = (id, field, value) => {
    setEditValues({ ...editValues, [field]: value });
    setPessoas((prevPessoas) =>
      prevPessoas.map(pessoa =>
        pessoa.id === id ? { ...pessoa, [field]: value } : pessoa
      )
    );
  };

  const handleSave = async (pessoa) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/usuarios/${pessoa.id}`, {
        email: editValues.email,
        name: editValues.name,
        login: editValues.login
      });
      const updatedPessoa = response.data.user;
      setPessoas((prevPessoas) =>
        prevPessoas.map(p => p.id === updatedPessoa.id ? updatedPessoa : p)
      );
      setEditingId(null);
      setEditValues({});
    } catch (error) {
      console.error('Erro ao atualizar pessoa:', error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Você tem certeza que deseja excluir este usuário?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/api/usuarios/${id}`);
        setPessoas((prevPessoas) => prevPessoas.filter(p => p.id !== id));
      } catch (error) {
        console.error('Erro ao deletar pessoa:', error);
      }
    }
  };

  return (
    <div className="bg-usuarios">
      <div className="form-usuarios">
        <div className="titulo-usuarios">LISTAGEM DE USUÁRIOS</div>
        <div className="tabelas">
          <table className="table">
            <thead>
              <tr>
                <th className='column-id'>ID</th>
                <th className='column-email'>Email</th>
                <th className='column-nome'>Nome</th>
                <th className='column-login'>Login</th>
                <th className='column-actions'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pessoas.map((pessoa) => (
                <Pessoa
                  key={pessoa.id}
                  pessoa={pessoa}
                  isEditing={editingId === pessoa.id}
                  onEdit={handleEdit}
                  onSave={handleSave}
                  onChange={handleChange}
                  onDelete={handleDelete}
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
