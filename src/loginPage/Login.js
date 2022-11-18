import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import AuthService from "../services/AuthService";
import "./Login.css";
import LOGIN from "../assets/LOGIN.png"

function Login() {
  const navigate = useNavigate();

  const loginPage = () => {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    AuthService.login(email, senha).then(
      () => {
        navigate("/Home");
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  };

  return (
    <div className="login container clip-contents">
      <img
        src={LOGIN}
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
                    id="email"
                    placeholder="Insira seu Email:"
                  />
                  <p className="error-message"></p>
                </div>
                <div className="campoSenha">
                  <input
                    className="inputSenha"
                    id="senha"
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
                </div>
              </form>
              <button className="buttonProximo" onClick={event => loginPage()}>
                    <text className="textButtonProximo">Próximo</text>
              </button>
            </div>
          </div>

          <div className="linhaFooterForm" />
        </div>
      </div>
    </div>
  );
}

export default Login;
