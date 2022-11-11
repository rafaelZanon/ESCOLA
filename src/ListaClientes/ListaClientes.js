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
      <div className="divPrincipal">
        {lista.map((cliente) => (
          <Card className="cardCss" key={cliente.id} >
            
            <PerfilImagem/>
           
            <Card.Body className="">
                <Card.Title className="txtCard">Nome: {cliente.userName}</Card.Title>
                <Card.Text className="txtCard">Prioridade: {cliente.role}</Card.Text>
                <Card.Text className="txtCard">Email do Cliente: {cliente.email} </Card.Text>
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
