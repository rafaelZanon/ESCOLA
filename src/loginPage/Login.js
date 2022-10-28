import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login container clip-contents">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/77769ok2z1u-520%3A156?alt=media&token=68b3c814-0492-4893-bf6d-f947baa369ee"
        alt="Not Found"
        className="backgroundImage"
      />
      <div className="formFrame container">
        <div className="HeaderFormFrame flex-row">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/77769ok2z1u-522%3A161?alt=media&token=dac412df-872e-4fee-9d3a-e7e2cba53a86"
            alt="Not Found"
            className="google"
          />
          <p className="txtGoogleStore">Google Store</p>
        </div>

        <div className="bodyFormFrame flex-col-hcenter">
          <div className="bodyFormFrameTwo" />

          <div className="divTxtLogin">
            <p className="txtLogin flex-hcenter">Fazer login</p>
            <div>
              <form>
                <div className="campoEmail">
                  <input
                    className="inputEmail"
                    type="email"
                    name="email"
                    placeholder="Insira seu Email:"
                  />
                  <p className="error-message"></p>
                </div>
                <div className="campoSenha">
                  <input
                    className="inputSenha"
                    type="password"
                    name="password"
                    placeholder="Insira sua Senha:"
                  />
                  <p className="error-message"></p>
                </div>
                <div>
                  <a href="/registrar">
                    <p className="criarConta">Criar conta</p>
                  </a>
                  <button type="submit" className="buttonProximo">
                    <text className="textButtonProximo">Próximo</text>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="linhaFooterForm" />
        </div>
      </div>
    </div>
  );
}

export default Login;
