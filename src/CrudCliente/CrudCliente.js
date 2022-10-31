import React, { Component } from 'react';
import './CrudCliente.css';
import Main from '../components/templates/Main';
import axios from 'axios';
import SincronizarOpcao from '../components/templates/SincronizarOpcao';
const title = "Cadastro de Cliente";

const urlAPI = "http://localhost:5092/api/Cliente";
const initialState = {
    Cliente: { id: 0, UserName: '', RealName: '', Email: 0 },
    lista: [],
    // Novo estado para definir quando eu estou atualizando e vise versa
    atualizar:false
}

export default class CrudCliente extends Component {
    state = { ...initialState }
  
    componentDidMount() {
        axios(urlAPI).then(resp => {
            this.setState({ lista: resp.data })
          
        })
    }

// Atualização com um clone do estado e as novas informações que o cliente preencher
   atualizar(id){
    const Cliente = this.state.Cliente
    Cliente.id = id
    Cliente.Email = document.getElementById('EmailOption').value
    const metodo = 'put';
    axios[metodo](`${urlAPI}/${id}`, Cliente)
        .then(resp => {
            const lista = this.getListaAtualizada(resp.data)
            // Setando meu estado inicial apos a atualização
            this.setState({ Cliente: initialState.Cliente, lista,atualizar:false})
        })
   }

    limpar() {
        this.setState({ Cliente: initialState.Cliente });
    }
    salvar() {
        const Cliente = this.state.Cliente;
        const Email = document.getElementById('EmailOption').value
        if (!this.state.atualizar){
        console.log(Email)
        Cliente.Email = Email(Email);
        const metodo = 'post';
        axios[metodo](urlAPI, Cliente)
            .then(resp => {
                const lista = this.getListaAtualizada(resp.data)
                console.log(lista)
                this.setState({ Cliente: initialState.Cliente, lista })
            })
        }
        else this.atualizar(Cliente.id)
    }
    getListaAtualizada(Cliente) {
        const lista = this.state.lista.filter(a => a.id !== Cliente.id);
        axios(urlAPI).then(resp => {
            this.setState({ lista: resp.data })
        })
        lista.unshift(Cliente);
        return lista;
    }
    atualizaCampo(event) {
        //clonar usuário a partir do state, para não alterar o state diretamente
        const Cliente = { ...this.state.Cliente };
        //usar o atributo NAME do input para identificar o campo a ser atualizado
        Cliente[event.target.name] = event.target.value;
        //atualizar o state
        this.setState({ Cliente });
    }
    renderForm() {
        
        return (
            <div className="inclui-container">
            <label> Usuário </label>
            <input
                type="text"
                id="usuario"
                placeholder="Usuário do Cliente"
                className="form-input"
                name="usuario"

                //alterar depois
                value={this.state.Cliente.UserName}

                onChange={e => this.atualizaCampo(e)}
            />
            <label> Nome Completo: </label>
            <input
                type="text"
                id="nome"
                placeholder="Nome do Cliente"
                className="form-input"
                name="nome"
        
                // alterar depois
                value={this.state.Cliente.RealName}
                onChange={e => this.atualizaCampo(e)}
            />
            <label> Código do Produto: </label>
                <SincronizarOpcao/>
              
            <button className="btnSalvar"
                onClick={e => this.salvar(e)} >
                Salvar
            </button>
            <button className="btnCancelar"
                onClick={e => this.limpar(e)} >
                Cancelar
            </button>
        </div>
        )
    }

    //alterar depois
    carregar(Cliente) {
        // estados preparando para a atualizar os dados.
        // seto o estado de atualzação
        this.setState({ Cliente: Cliente,atualizar:true})
       
    } //alterar depois
    remover(Cliente) {
        const url = urlAPI + "/" + Cliente.id;
        if (window.confirm("Confirma remoção do Cliente: " + Cliente.UserName)) {
           
            axios['delete'](url, Cliente)
                .then(resp => {
                    const lista = this.getListaAtualizada(Cliente, false)
                    this.setState({ Cliente: initialState.Cliente, lista })
                })
        }


    }

    //alterar coisas que tem "aluno" no nome
    renderTable() {
        return (
            <div className="listagem"> 
                <table className="listaAlunos" id="tblListaClientes">
                    <thead>
                        <tr className="cabecTabela">
                            <th className="tabTituloRa">Usuário: </th>
                            <th className="tabTituloNome">Nome: </th>
                            <th className="tabTituloCurso">Email: </th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.lista.map(
                            (Cliente) =>
                                <tr key={Cliente.id}>
                                    <td>{Cliente.UserName}</td>
                                    <td>{Cliente.RealName}</td>
                                    <td>{Cliente.Email}</td>
                                    <td>
                                        <button onClick={() => this.carregar(Cliente)} >
                                            Altera
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => this.remover(Cliente)} >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
    render() {
        return (
            <Main title={title}>
               {this.renderForm()}
            {this.renderTable()}
            </Main>
        )
    }
}