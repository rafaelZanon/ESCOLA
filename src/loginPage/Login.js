import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login flex-col-hstart-vstart clip-contents">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/77769ok2z1u-520%3A156?alt=media&token=68b3c814-0492-4893-bf6d-f947baa369ee"
        alt="Not Found"
        className="image-42"
      />
      <div className="frame-6 flex-col-hstart-vstart">
        <div className="group-221 flex-row">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/77769ok2z1u-522%3A161?alt=media&token=dac412df-872e-4fee-9d3a-e7e2cba53a86"
            alt="Not Found"
            className="brands-google"
          />
          <p className="txt-028">Google Store</p>
        </div>
        <div className="group-172 flex-col-hcenter">
          <div className="rectangle-3" />
          <div className="group-27">
            <p className="txt-8103 flex-hcenter">Fazer login</p>
          </div>
          <div className="rectangle-4" />
        </div>
      </div>
    </div>

    /*<form className='formulario'>
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
        </form>*/
  );
}

export default Login;
