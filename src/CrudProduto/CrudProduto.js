import React, {useState,useEffect } from "react";
import Menu from "../components/templates/Menu";
import Main from "../components/templates/Main";
import axios from "axios";

const title = "Consulta e Cadastro de Produto";

const urlAPI = "http://localhost:5092/api/Produto";

export default function CrudProduto() {
 
  const [lista, setLista] = useState ([])
  
  const [Produto, setProduto] = useState([{
    id: 0,
    codProd: 0,
    nomeProd: "",
    dataProd: ""
  }])

const [Atualizar, setAtualizar] = useState(false)

  useEffect(() =>{
    axios(urlAPI).then((resp) => {
           setProduto(resp.data);
           setLista(resp.data);
      });
  },[lista]) 

   const limpar = () => {
     setLista([]);
   };
  
    const salvar = () => {
    const codProd = document.getElementById("codProd").value;
    const nomeProd = document.getElementById("nomeProd").value;
    const dataProd = document.getElementById("dataProd").value;
    const json = {
      id: 0,
      codProd: codProd,
      nomeProd: nomeProd,
      dataProd: dataProd,
    }
    const metodo = "post";
    axios[metodo](urlAPI, json).then((resp) => {
    setProduto(Produto)
      
    });
  }

  const atualizar = () => {
    const Produto = Produto;
    const metodo = "put";
    axios[metodo](urlAPI + "/" + Produto.id, Produto).then((resp) => {
      const lista = getListaAtualizada(resp.data);
      setProduto(resp.data);
      setLista(lista);
    });
    setAtualizar(false);
  }


  const getListaAtualizada = (Produto)=> {
      const lista = lista.filter((a) => a.id !== Produto.id);
      lista.unshift(Produto);
      axios(urlAPI).then((resp) => {
        setLista(resp.data);
    });
    return lista;
  }

  const atualizaCampo = (event) => {
    const Produtos = Produto
    Produtos[event.target.nomeProd] = event.target.value;
    setProduto(Produtos)
  }

  const renderForm = () => {
    return (
      <div className="inserir-container">
        <label> Código do Produto: </label>
        <input
          type="text"
          id="codProd"
          placeholder="Código do Produto"
          className="form-input"
          name="codProd"
          value={Produto.codProd}
        />
        <label> Nome do Produto: </label>
        <input
          type="text"
          id="nomeProd"
          placeholder="Nome do Produto"
          className="form-input"
          name="nomeProd"
          value={Produto.nomeProd}         
        />
        <label> Data do Pedido: </label>
        <input
          type="text"
          id="dataProd"
          className="form-input"
          name="dataProd"
          placeholder="Data do Pedido"
          value={Produto.dataProd}
        />
        <button className="btnSalvar" onClick={(e) => salvar(e)}>
          Salvar
        </button>
        {atualizar && (
          <button className="btnSalvar" onClick={(e) => atualizar(e)}>
            Atualizar
          </button>
        )}
        <button className="btnCancelar" onClick={(e) => limpar(e)}>
          Cancelar
        </button>
      </div>
    );
  }

  const carregar = (Produto) => {
    setAtualizar(true)
    setProduto(Produto)
  }

  const remover = (Produto) => {
    const url = urlAPI + "/" + Produto.id;
    if (window.confirm("Confirma remoção de Produto: " + Produto.id)) {
      axios["delete"](url, Produto).then((resp) => {
      });
    }
  }

  const renderTable = () => {
    return (
      <div className="listagem">
        <table className="listaProdutos" id="tblListaProdutos">
          <thead>
            <tr className="cabecTabela">
              <th className="tabTituloCodProd">Código do Produto</th>
              <th className="tabTituloNomeProd">Nome do Produto</th>
              <th className="">Data de Compra</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {lista.map((Produto) => (
              <tr key={Produto.id}>
                <td>{Produto.codProd}</td>
                <td>{Produto.nomeProd}</td>
                <td>{Produto.dataProd}</td>
                <td>
                  <button onClick={() => carregar(Produto)}>Altera</button>
                </td>
                <td>
                  <button onClick={() => remover(Produto)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
    return (
      <Main title={title}>
        <Menu></Menu>
        {renderForm()}
        {renderTable()}
        
      </Main>
    );
  
}
