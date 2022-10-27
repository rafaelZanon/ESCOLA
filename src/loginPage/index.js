import React from 'react';
import './style.css';

function Login(){
    return(
        <form className='formulario'>
            <div className="headerBody" >

<h1>Faça Seu Login</h1>
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
            <label>Senha</label>
            <input type="password" name="password" placeholder='Digite sua Senha'/>
            <p className="error-message"></p>
        </div>


        <div className='camposBotaologin'>
            <button type='submit'  className="btn-loginBackgroundlogin" >Login</button>
        </div>

    </form>

</div>

</div>
        </form>
    )
}

export default Login;