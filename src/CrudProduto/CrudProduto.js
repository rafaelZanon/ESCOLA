import React, { Component } from "react";

import Main from "../components/templates/Main";
import axios from "axios";
const title = "Consulta e Cadastro de Produto";
//ALTERAR TUDO QUE TEM CSS

const urlAPI = "http://localhost:5092/api/Produto";
const initialState = {
  Produto: { id: 0, codProd: 0, nomeProd: "", dataProd: "" },
  lista: [],
  atualizar: false,
};

export default class CrudProduto extends Component {
  state = { ...initialState };
  componentDidMount() {
    axios(urlAPI).then((resp) => {
      console.log(resp.data);

      this.setState({ lista: resp.data });
    });
  }

  limpar() {
    this.setState({ Produto: initialState.Produto });
  }
  salvar() {
    const Produto = this.state.Produto;
    Produto.codProd = Number(Produto.codProd);
    const metodo = "post";
    axios[metodo](urlAPI, Produto).then((resp) => {
      const lista = this.getListaAtualizada(resp.data);
      this.setState({ Produto: initialState.Produto, lista });
    });
  }
  atualizar() {
    const Produto = this.state.Produto;
    const metodo = "put";
    axios[metodo](urlAPI + "/" + Produto.id, Produto).then((resp) => {
      const lista = this.getListaAtualizada(resp.data);
      this.setState({ Produto: initialState.Produto, lista });
    });
    this.state.atualizar = false
  }
  getListaAtualizada(Produto) {
    const lista = this.state.lista.filter((a) => a.id !== Produto.id);
    lista.unshift(Produto);
    axios(urlAPI).then((resp) => {
      this.setState({ lista: resp.data });
    });
    return lista;
  }
  atualizaCampo(event) {
    //clonar usuário a partir do state, para não alterar o state diretamente
    const Produto = { ...this.state.Produto };
    //usar o atributo NAME do input para identificar o campo a ser atualizado
    Produto[event.target.name] = event.target.value;
    //atualizar o state
    this.setState({ Produto });
  }
  renderForm() {
    return (
      <div className="inclui-container">
        <label> Código do Produto: </label>
        <input
          type="number"
          id="codProd"
          placeholder="Código do Produto"
          className="form-input"
          name="codProd"
          //alterar depois que tem CSS
          value={this.state.Produto.codProd}
          onChange={(e) => this.atualizaCampo(e)}
        />
        <label> Nome do Produto: </label>
        <input
          type="text"
          id="nomeProd"
          placeholder="Nome do Produto"
          className="form-input"
          name="nomeProd"
          //alterar depois que tem CSS
          value={this.state.Produto.nomeProd}
          onChange={(e) => this.atualizaCampo(e)}
        />

        <label> Data do Pedido: </label>
        <input
          type="text"
          id="dataProd"
          className="form-input"
          name="dataProd"
          //alterar depois que tem CSS
          value={this.state.Produto.dataProd}
          onChange={(e) => this.atualizaCampo(e)}
        />
        <button className="btnSalvar" onClick={(e) => this.salvar(e)}>
          Salvar
        </button>
        { this.state.atualizar && <button className="btnSalvar" onClick={(e) => this.atualizar(e)}>
          Atualizar
        </button>}
        <button className="btnCancelar" onClick={(e) => this.limpar(e)}>
          Cancelar
        </button>
      </div>
    );
  }

  carregar(Produto) {
    this.state.atualizar = true;
    this.setState({ Produto });
  }
  remover(Produto) {
    const url = urlAPI + "/" + Produto.id;
    if (window.confirm("Confirma remoção de Produto: " + Produto.id)) {
      console.log("entrou no confirm");
      axios["delete"](url, Produto).then((resp) => {
        const lista = this.getListaAtualizada(Produto);
        console.log("entrou no THEN");
        this.setState({ Produto: initialState.Produto, lista });
      });
    }
  }
  //mudar coisas que tem CSS
  renderTable() {
    return (
      <div className="listagem">
        <table className="listaAlunos" id="tblListaProdutos">
          <thead>
            <tr className="cabecTabela">
              <th className="tabTituloRa">Código do Produto</th>
              <th className="tabTituloNome">Nome do Produto</th>
              <th className="tabTituloCurso">Data de Compra</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.lista.map((Produto) => (
              <tr key={Produto.id}>
                <td>{Produto.codProd}</td>
                <td>{Produto.nomeProd}</td>
                <td>{Produto.dataProd}</td>
                <td>
                  <button onClick={() => this.carregar(Produto)}>Altera</button>
                </td>
                <td>
                  <button onClick={() => this.remover(Produto)}>Remove</button>
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
        {this.renderForm()}
        {this.renderTable()}
      </Main>
    );
  }
}
