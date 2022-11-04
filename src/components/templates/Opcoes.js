import React, { Component } from 'react';
import axios from 'axios';
const getProduto = "http://localhost:5092/api/Produto";

const produtoState = {
    produto: { id: 0, codProd: 0, nomeProd: '', dataProd: '' },
    lista: []
}


export default class Opcoes extends Component {
    state = { ...produtoState }
    componentDidMount() {

        axios(getProduto).then(resp => {

            this.setState({ lista: resp.data })
            
        })
    }
   
    render() {
        return (
            <select id='EmailOption'>{this.state.lista.map(
                (produtos) =>
                    <option key={produtos.id} value={produtos.codProd}>{produtos.nomeProd}</option>
            )}</select>
        )
    }
}