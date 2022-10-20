import React, { Component } from 'react';
import './CrudAluno.css';
import Main from '../components/templates/Main';
import axios from 'axios';
import SincronizarOpcao from '../components/templates/SincronizarOpcao';
const title = "Cadastro de Alunos";

const urlAPI = "http://localhost:5092/api/aluno";
const initialState = {
    aluno: { id: 0, ra: '', nome: '', codCurso: 0 },
    lista: [],
    // Novo estado para definir quando eu estou atualizando e vise versa
    atualizar:false
}

export default class CrudAluno extends Component {
    state = { ...initialState }
  
    componentDidMount() {
        axios(urlAPI).then(resp => {
            this.setState({ lista: resp.data })
          
        })
    }

// Atualização com um clone do estado e as novas informações que o cliente preencher
   atualizar(id){
    const aluno = this.state.aluno
    aluno.id = id
    aluno.codCurso = document.getElementById('cursoOption').value
    const metodo = 'put';
    axios[metodo](`${urlAPI}/${id}`, aluno)
        .then(resp => {
            const lista = this.getListaAtualizada(resp.data)
            // Setando meu estado inicial apos a atualização
            this.setState({ aluno: initialState.aluno, lista,atualizar:false})
        })
   }

    limpar() {
        this.setState({ aluno: initialState.aluno });
    }
    salvar() {
        const aluno = this.state.aluno;
        const codCurso = document.getElementById('cursoOption').value
        if (!this.state.atualizar){
        console.log(codCurso)
        aluno.codCurso = Number(codCurso);
        const metodo = 'post';
        axios[metodo](urlAPI, aluno)
            .then(resp => {
                const lista = this.getListaAtualizada(resp.data)
                console.log(lista)
                this.setState({ aluno: initialState.aluno, lista })
            })
        }
        else this.atualizar(aluno.id)
    }
    getListaAtualizada(aluno) {
        const lista = this.state.lista.filter(a => a.id !== aluno.id);
        axios(urlAPI).then(resp => {
            this.setState({ lista: resp.data })
        })
        lista.unshift(aluno);
        return lista;
    }
    atualizaCampo(event) {
        //clonar usuário a partir do state, para não alterar o state diretamente
        const aluno = { ...this.state.aluno };
        //usar o atributo NAME do input para identificar o campo a ser atualizado
        aluno[event.target.name] = event.target.value;
        //atualizar o state
        this.setState({ aluno });
    }
    renderForm() {
        
        return (
            <div className="inclui-container">
            <label> RA: </label>
            <input
                type="text"
                id="ra"
                placeholder="RA do aluno"
                className="form-input"
                name="ra"

                value={this.state.aluno.ra}

                onChange={e => this.atualizaCampo(e)}
            />
            <label> Nome: </label>
            <input
                type="text"
                id="nome"
                placeholder="Nome do aluno"
                className="form-input"
                name="nome"

                value={this.state.aluno.nome}
                onChange={e => this.atualizaCampo(e)}
            />
            <label> Código do Curso: </label>
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

    carregar(aluno) {
        // estados preparando para a atualizar os dados.
        // seto o estado de atualzação
        this.setState({ aluno: aluno,atualizar:true})
       
    }
    remover(aluno) {
        const url = urlAPI + "/" + aluno.id;
        if (window.confirm("Confirma remoção do aluno: " + aluno.ra)) {
           
            axios['delete'](url, aluno)
                .then(resp => {
                    const lista = this.getListaAtualizada(aluno, false)
                    this.setState({ aluno: initialState.aluno, lista })
                })
        }


    }

    renderTable() {
        return (
            <div className="listagem">
                <table className="listaAlunos" id="tblListaAlunos">
                    <thead>
                        <tr className="cabecTabela">
                            <th className="tabTituloRa">Ra</th>
                            <th className="tabTituloNome">Nome</th>
                            <th className="tabTituloCurso">Curso</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.lista.map(
                            (aluno) =>
                                <tr key={aluno.id}>
                                    <td>{aluno.ra}</td>
                                    <td>{aluno.nome}</td>
                                    <td>{aluno.codCurso}</td>
                                    <td>
                                        <button onClick={() => this.carregar(aluno)} >
                                            Altera
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => this.remover(aluno)} >
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