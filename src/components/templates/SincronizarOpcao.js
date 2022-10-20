import React, { Component } from 'react';
import axios from 'axios';
const getCurso = "http://localhost:5092/api/curso";

const cursoState = {
    curso: { id: 0, codCurso: 0, nomeCurso: '', periodo: '' },
    lista: []
}


export default class SincronizarOpcao extends Component {
    state = { ...cursoState }
    componentDidMount() {

        axios(getCurso).then(resp => {

            this.setState({ lista: resp.data })
            
        })
    }
   
    render() {
        return (
            <select id='cursoOption'>{this.state.lista.map(
                (cursos) =>
                    <option key={cursos.id} value={cursos.codCurso}>{cursos.nomeCurso}</option>
            )}</select>
        )
    }
}