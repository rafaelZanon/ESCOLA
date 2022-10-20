import React, { Component } from 'react';
import './CrudCurso.css';
import Main from '../components/templates/Main';
import axios from 'axios';
const title = "Consulta e Cadastro de Cursos";

const urlAPI = "http://localhost:5092/api/curso";
const initialState = {
    curso: { id: 0, codCurso: 0, nomeCurso: '', periodo: ''},
    lista: []
}

export default class CrudAluno extends Component {
    state = { ...initialState }
    componentDidMount() {
        axios(urlAPI).then(resp => {
            console.log(resp.data)

            this.setState({ lista: resp.data })
        })
    }

    limpar() {
        this.setState({ curso: initialState.curso });
    }
    salvar() {
        const curso = this.state.curso;
        curso.codCurso = Number(curso.codCurso);
        const metodo = 'post';
        axios[metodo](urlAPI, curso)
            .then(resp => {
                const lista = this.getListaAtualizada(resp.data)
                this.setState({ curso: initialState.curso, lista })
            })
    }
    getListaAtualizada(curso) {
        const lista = this.state.lista.filter(a => a.id !== curso.id);
        lista.unshift(curso);
        axios(urlAPI).then(resp => {
            this.setState({ lista: resp.data })
        })
        return lista;
    }
    atualizaCampo(event) {
        //clonar usuário a partir do state, para não alterar o state diretamente
        const curso = { ...this.state.curso };
        //usar o atributo NAME do input para identificar o campo a ser atualizado
        curso[event.target.name] = event.target.value;
        //atualizar o state
        this.setState({ curso });
    }
    renderForm() {
        return (
            <div className="inclui-container">
            <label> Codigo do Curso: </label>
            <input
                type="number"
                id="codCurso"
                placeholder="Código do Curso"
                className="form-input"
                name="codCurso"

                value={this.state.curso.codCurso}
                onChange={e => this.atualizaCampo(e)}
            />
            <label> Nome do Curso: </label>
            <input
                type="text"
                id="nomeCurso"
                placeholder="Nome do Curso"
                className="form-input"
                name="nomeCurso"

                value={this.state.curso.nomeCurso}
                onChange={e => this.atualizaCampo(e)}
            />
            
             <label> Periodo do Curso: </label>
            <input
                type="text"
                id="periodo"
                placeholder="N, V, M"
                className="form-input"
                name="periodo"

                value={this.state.curso.periodo}
                onChange={e => this.atualizaCampo(e)}
            />
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

    carregar(curso) {
        this.setState({ curso })
    }
    remover(curso) {
        const url = urlAPI + "/" + curso.id;
        if (window.confirm("Confirma remoção de curso: " + curso.id)) {
            console.log("entrou no confirm");
            axios['delete'](url, curso)
                .then(resp => {
                    const lista = this.getListaAtualizada(curso)
                    console.log('entrou no THEN')
                    this.setState({ curso: initialState.curso, lista })
                })
        }


    }

    renderTable() {
        return (
            <div className="listagem">
                <table className="listaAlunos" id="tblListaAlunos">
                    <thead>
                        <tr className="cabecTabela">
                            <th className="tabTituloRa">Código do Curso</th>
                            <th className="tabTituloNome">Nome</th>
                            <th className="tabTituloCurso">Periodo</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.lista.map(
                            (curso) =>
                                <tr key={curso.id}>
                                    <td>{curso.codCurso}</td>
                                    <td>{curso.nomeCurso}</td>
                                    <td>{curso.periodo}</td>
                                    <td>
                                        <button onClick={() => this.carregar(curso)} >
                                            Altera
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => this.remover(curso)} >
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