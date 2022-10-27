import React from 'react';
import './styles.css';

function Registrar(){
    return(
        <form className='formulario'>
            <div className="headerBody" >

<h1>Cadastre-se</h1>
<div className="linha" ></div>

<div className="bodyForm" >

    <form>
        <div className="campos" >
            <label>Usuário</label>
            <input name="usuario" placeholder='Digite seu Usuario'/>
            <p className="error-message"></p>
        </div>

        <div className="campos" >
            <label>Email</label>
            <input type="email" name="email" placeholder='Digite seu Email'/>
            <p className="error-message"></p>
        </div>

        <div className="campos" >
            <label>Confirme seu email</label>
            <input type="email" name="email" placeholder='Confirme seu Email'/>
            <p className="error-message"></p>
        </div>

        <div className="campos" >
            <label>Senha</label>
            <input type="password" name="password" placeholder='Digite sua Senha'/>
            <p className="error-message"></p>
        </div>

        <div className="campos" >
            <label>Confirme sua senha</label>
            <input type="password" name="password" placeholder='Confirme sua Senha'></input>
            <p className="error-message"></p>
        </div>

        <div className='camposBotao'>
            <button type="submit" className="btn-registerBackground" >Cadastrar!</button>
            <a href='/login'><button type='button' className="btn-loginBackground" >Ja tenho Login</button></a>
        </div>

    </form>

</div>

</div>
        </form>
    )
}

export default Registrar;