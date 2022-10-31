import React from 'react';
import '../../CrudCliente/CrudCliente.css';

export default function renderForm(Cliente) {


    return (
        <div className="inclui-container">
        <label> Usuário: </label>
        <input
            type="text"
            id="usuario"
            placeholder="Usuário do Cliente"
            className="form-input"
            name="usuario"

            value={this.state.Cliente.UserName}

            onChange={e => this.atualizaCampo(e)}
        />
        <label> Nome Completo: </label>
        <input
            type="text"
            id="nome"
            placeholder="Nome do Cliente"
            className="form-input"
            name="nome"

            value={this.state.Cliente.RealName}
            onChange={e => this.atualizaCampo(e)}
        />
        <label> Email: </label>
        <input
            type="email"
            id="email"
            placeholder="Email Do Cliente"
            className="form-input"
            name="email"

            value={this.state.Cliente.Email}
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