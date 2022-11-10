import React, { useEffect, useState } from "react";
import "./style.css";
import Main from "../components/templates/Main";
import axios from "axios";
import { Card } from "react-bootstrap";
import PerfilImagem from "../api/perfilImagens";
import Menu from "../components/templates/Menu";

const urlAPI = "http://localhost:5092/api/Cliente";

export default function ListaClientes(){
  
  const [lista, setLista] = useState ([])

  const [Cliente, setCliente] = useState ([{
    id: 0,
    userName: "",
    role: "",
    email: ""
  }])

  useEffect(() => {
    axios(urlAPI).then((resp) => {
      setCliente(resp.data);
      setLista(resp.data);
    });
  }, [lista])

  const renderTable = () => {
    return (
      <div
        style={{
          width: "100%",
          backgroundColor: "#c44d58",
          display: "inline-flex",
          justifyContent: "space-between",
        }}
      >
        {lista.map((cliente) => (
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
    return (
      <Main>
        {<Menu></Menu>}
        {renderTable()}
      </Main>
    );
  
}
