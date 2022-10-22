import React, { Component } from 'react';
import './style.css';
import Main from '../components/templates/Main';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import PerfilImagem from '../api/perfilImagens';
//ALTERAR TUDO QUE TEM CURSO  e ALUNO

const urlAPI = "http://localhost:5092/api/aluno";
const initialState = {
    aluno: { id: 0, ra: '', nome: '', codCurso: 0, },
    lista: [],
    // Novo estado para definir quando eu estou atualizando e vise versa
}

export default class Carometro extends Component {
    state = { ...initialState }

    componentDidMount() {
        axios(urlAPI).then(resp => {
            this.setState({ lista: resp.data })

        })
    }



    renderTable() {
        return (
            <div style={{ width: 120 }}>
                {this.state.lista.map(
                    (aluno) =>
                        <Card key={aluno.id} style={{
                            border: "1px solid #03506f",
                            borderRadius: "30px",
                            padding: "10px",
                            margin: "20px",
                            width: "325px",
                            height: "200px",
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: "#1E90FF",

                        }}>
                            <PerfilImagem></PerfilImagem>

                            <Card.Body>
                                <Card.Title>{aluno.ra}</Card.Title>
                                <Card.Text>
                                    {aluno.nome}
                                </Card.Text>
                                <Card.Text>Código do curso: {aluno.codCurso} </Card.Text>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                )}
            </div>
        )
    }
    render() {
        return (
            <Main>
                {this.renderTable()}
            </Main>
        )
    }
}