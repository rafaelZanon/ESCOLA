import React, { Component, useEffect, useState } from "react";
import "./CrudCliente.css";
import Main from "../components/templates/Main";
import axios from "axios";
import Opcoes from "../components/templates/Opcoes";
import Menu from "../components/templates/Menu";
const title = "Cadastro de Cliente";

const urlAPI = "http://localhost:5092/api/Cliente";

export default function CrudCliente(){
  
  const [lista, setLista] = useState ([])

  const [Cliente, setCliente] = useState ([{
    id: 0,
    userName: "",
    role: "",
    email: ""
  }])

  const [Atualizar, setAtualizar] = useState(false)

  useEffect(() => {
    axios(urlAPI).then((resp) => {
      setCliente(resp.data);
      setLista(resp.data);
    });
  }, [lista])


  const limpar = () => {
    setLista([]);
  }

  const salvar = () => {
    const UserName = document.getElementById("usuario").value;
    const role = document.getElementById("role").value;
    const Email = document.getElementById("email").value;
    const json = {
        id: 0,
        userName: UserName,
        role: role,
        email: Email,
      }
    const metodo = "post";
    axios[metodo](urlAPI, json).then((resp) => {
      setCliente(Cliente)
    });
  }

  const atualizar = () => {
    const Cliente = Cliente;
    const metodo = "put";
    axios[metodo](urlAPI + "/" + Cliente.id, Cliente).then((resp) => {
      const lista = this.getListaAtualizada(resp.data);
      setCliente(resp.data)
      setLista(lista)
    });
    setAtualizar(false);
  }

  const getListaAtualizada = (Cliente) => {
    const lista = lista.filter((a) => a.id !== Cliente.id);
    lista.unshift(Cliente);
    axios(urlAPI).then((resp) => {
      setLista(resp.data)
    });
    return lista;
  }

  const atualizaCampo = (event) => {
    const Clientes = Cliente
    Clientes[event.target.userName] = event.target.value;
    setCliente(Clientes)
  }

  const renderForm = () => {
    return (
      <div className="inserir-container">
        <label> Usuário </label>
        <input
          type="text"
          id="usuario"
          placeholder="Usuário do Cliente"
          className="form-input"
          name="usuario"
          defaultValue={Cliente.userName}
        />
        <label> Prioridade: </label>
        <input
          type="text"
          id="role"
          placeholder="Cliente ou Adm?"
          className="form-input"
          name="role"
          defaultValue={Cliente.role}
        />
        <label> Email: </label>
        <input
          type="email"
          id="email"
          placeholder="Email do Cliente"
          className="form-input"
          name="email"
          defaultValue={Cliente.email}
        />
        <Opcoes />

        <button className="btnSalvar" onClick={(e) => salvar(e)}>
          Salvar
        </button>
        <button className="btnCancelar" onClick={(e) => limpar(e)}>
          Cancelar
        </button>
      </div>
    );
  }

  const carregar = (Cliente) => {
    setAtualizar(true)
    setCliente(Cliente)
  }

  const remover = (Cliente) => {
    const url = urlAPI + "/" + Cliente.id;
    if (window.confirm("Confirma remoção do Cliente: " + Cliente.userName)) {
      axios["delete"](url, Cliente).then((resp) => {
        const lista = getListaAtualizada(Cliente, false);
        setLista(lista)
      });
    }
  }

  const renderTable = () => {
    return (
      <div className="listagem">
        <table className="listaClientes" id="tblListaClientes">
          <thead>
            <tr className="cabecTabela">
              <th className="tabTituloUsuario">Usuário: </th>
              <th className="tabTituloPrioridade">Prioridade: </th>
              <th className="tabTituloEmail">Email: </th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {lista.map((Cliente) => (
              <tr key={Cliente.id}>
                <td>{Cliente.userName}</td>
                <td>{Cliente.role}</td>
                <td>{Cliente.email}</td>
                <td>
                  <button onClick={() => carregar(Cliente)}>Altera</button>
                </td>
                <td>
                  <button onClick={() => remover(Cliente)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
    
  return (
      <Main title={title}>
        <Menu></Menu>
        {renderForm()}
        {renderTable()}
      </Main>
    );
  
}
