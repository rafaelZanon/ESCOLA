import React, { Component } from "react";
import "./CrudCliente.css";
import Main from "../components/templates/Main";
import axios from "axios";
import Opcoes from "../components/templates/Opcoes";
import Menu from "../components/templates/Menu";
const title = "Cadastro de Cliente";

const urlAPI = "http://localhost:5092/api/Cliente";
const initialState = {
  Cliente: { id: 0, userName: "", role: "", email: "" },
  lista: [],

  atualizar: false,
};

export default class CrudCliente extends Component {
  state = { ...initialState };

  componentDidMount() {
    axios(urlAPI).then((resp) => {
      this.setState({ lista: resp.data });
    });
  }

  atualizar(id) {
    const Cliente = this.state.Cliente;
    Cliente.id = id;
    Cliente.email = document.getElementById("email").value;
    const metodo = "put";
    console.log(Cliente);
    axios[metodo](`${urlAPI}/${id}`, Cliente).then((resp) => {
      const lista = this.getListaAtualizada(resp.data);

      this.setState({ Cliente: initialState.Cliente, lista, atualizar: false });
    });
  }

  limpar() {
    this.setState({ Cliente: initialState.Cliente });
  }
  salvar() {
    const Cliente = this.state.Cliente;
    const UserName = document.getElementById("usuario").value;
    const role = document.getElementById("role").value;
    const Email = document.getElementById("email").value;
    if (!this.state.atualizar) {
      const metodo = "post";
      const Json = {
        id: 0,
        userName: UserName,
        role: role,
        email: Email,
      };

      axios[metodo](urlAPI, Json).then((resp) => {
        const lista = this.getListaAtualizada(resp.data);
        console.log(lista);
        this.setState({ Cliente: initialState.Cliente, lista });
      });
    } else this.atualizar(Cliente.id);
  }

  getListaAtualizada(Cliente) {
    const lista = this.state.lista.filter((a) => a.id !== Cliente.id);
    axios(urlAPI).then((resp) => {
      this.setState({ lista: resp.data });
    });
    lista.unshift(Cliente);
    return lista;
  }
  atualizaCampo(event) {
    const Cliente = { ...this.state.Cliente };

    Cliente[event.target.name] = event.target.value;

    this.setState({ Cliente });
  }
  renderForm() {
    return (
      
      <div className="inserir-container">
        <label> Usuário </label>
        <input
          type="text"
          id="usuario"
          placeholder="Usuário do Cliente"
          className="form-input"
          name="usuario"
          defaultValue={this.state.Cliente.userName}
          onChange={(e) => this.atualizaCampo(e)}
        />
        <label> Prioridade: </label>
        <input
          type="text"
          id="role"
          placeholder="Cliente ou Adm?"
          className="form-input"
          name="role"
          defaultValue={this.state.Cliente.role}
          onChange={(e) => this.atualizaCampo(e)}
        />
        <label> Email: </label>
        <input
          type="email"
          id="email"
          placeholder="Email do Cliente"
          className="form-input"
          name="email"
          defaultValue={this.state.Cliente.email}
          onChange={(e) => this.atualizaCampo(e)}
        />
        <Opcoes />

        <button className="btnSalvar" onClick={(e) => this.salvar(e)}>
          Salvar
        </button>
        <button className="btnCancelar" onClick={(e) => this.limpar(e)}>
          Cancelar
        </button>
      </div>
    );
  }

  carregar(Cliente) {
    this.setState({ Cliente: Cliente, atualizar: true });
  }
  remover(Cliente) {
    const url = urlAPI + "/" + Cliente.id;
    if (window.confirm("Confirma remoção do Cliente: " + Cliente.userName)) {
      axios["delete"](url, Cliente).then((resp) => {
        const lista = this.getListaAtualizada(Cliente, false);
        this.setState({ Cliente: initialState.Cliente, lista });
      });
    }
  }

  renderTable() {
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
            {this.state.lista.map((Cliente) => (
              <tr key={Cliente.id}>
                <td>{Cliente.userName}</td>
                <td>{Cliente.role}</td>
                <td>{Cliente.email}</td>
                <td>
                  <button onClick={() => this.carregar(Cliente)}>Altera</button>
                </td>
                <td>
                  <button onClick={() => this.remover(Cliente)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  render() {
    return (
      <Main title={title}>
        {<Menu></Menu>}
        {this.renderForm()}
        {this.renderTable()}
      </Main>
    );
  }
}
