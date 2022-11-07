import React, { Component } from "react";
import "./style.css";
import Main from "../components/templates/Main";
import axios from "axios";
import { Card } from "react-bootstrap";
import PerfilImagem from "../api/perfilImagens";
import Menu from "../components/templates/Menu";
//ALTERAR TUDO QUE TEM CURSO  e ALUNO

const urlAPI = "http://localhost:5092/api/Cliente";
const initialState = {
  Cliente: { id: 0, userName: "", role: "", email: "" },
  lista: [],
  // Novo estado para definir quando eu estou atualizando e vise versa
};

export default class ListaClientes extends Component {
  state = { ...initialState };

  componentDidMount() {
    axios(urlAPI).then((resp) => {
      this.setState({ lista: resp.data });
    });
  }

  renderTable() {
    return (
      <div
        style={{
          width: "100%",
          backgroundColor: "#c44d58",
          display: "inline-flex",
          justifyContent: "space-between",
        }}
      >
        {this.state.lista.map((cliente) => (
          <Card
            key={cliente.id}
            style={{
              border: "1px solid #03506f",
              borderRadius: "15px",
              padding: "10px",
              margin: "20px",
              width: "325px",
              height: "200px",
              gridRow: "auto",
              position: "relative",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#ff6b6b",
              color: "#fff",
            }}
          >
            <PerfilImagem></PerfilImagem>

            <Card.Body>
              <Card.Title>Nome: {cliente.userName}</Card.Title>
              <Card.Text>Prioridade: {cliente.role}</Card.Text>
              <Card.Text>Email do Cliente: {cliente.email} </Card.Text>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
  render() {
    return (
      <Main>
        {<Menu></Menu>}
        {this.renderTable()}
      </Main>
    );
  }
}
