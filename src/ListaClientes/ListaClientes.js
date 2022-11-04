import React, { Component } from 'react';
import './style.css';
import Main from '../components/templates/Main';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import PerfilImagem from '../api/perfilImagens';
//ALTERAR TUDO QUE TEM CURSO  e ALUNO

const urlAPI = "http://localhost:5092/api/Cliente";
const initialState = {
    Cliente: { id: 0, userName: "", realName: "", email: "" },
    lista: [],
    // Novo estado para definir quando eu estou atualizando e vise versa
}

export default class ListaClientes extends Component {
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
                    (cliente) =>
                        <Card key={cliente.id} style={{
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
                                <Card.Title>{cliente.userName}</Card.Title>
                                <Card.Text>
                                    {cliente.realName}
                                </Card.Text>
                                <Card.Text>Email do Cliente: {cliente.email} </Card.Text>
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