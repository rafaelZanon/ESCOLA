import "./style.css";
import rectangle3 from "../assets/rectangle3.svg";
import brandsGoogle from "../assets/brandsGoogle.svg";
import rectangle4 from "../assets/rectangle4.svg";
import cabecalho from "../assets/group13.svg";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import AuthService from "../services/AuthService";



const Cadastro = () => {
  const navigate = useNavigate();

  const [msg, setMsg] = useState("");

  const registrar = () => {
    const userName = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const role = "Cliente";

    const json = {
      id: 0,
      userName: userName,
      email: email,
      senha: senha,
      role: role,
    };

    axios.post("http://localhost:5092/api/Cliente", json).then((event) => {
      setMsg("Conta criada com Sucesso!");
      navigate("/home");
      AuthService.login(email, senha);
    });
  };

  return (
    <div>
      <div className="cadastro">
        <img className="cabecalho" src={cabecalho} />
        <div className="quadrado">
          <div className="flex-container">
            <img className="marca-google" src={brandsGoogle} />
            <span className="google-store">Google Store</span>
          </div>

          <img className="rectangle-3" src={rectangle3} />
          <span className="criar-conta">Criar conta</span>

          <form>
            <div className="campoEmail">
              <input
                className="inputEmail"
                name="usuario"
                placeholder="Digite seu Usuario"
                id="username"
              />
            </div>

            <div className="campoEmail">
              <input
                className="inputEmail"
                type="email"
                name="email"
                placeholder="Digite seu Email"
                id="email"
              />
            </div>

            <div className="campoEmail">
              <input
                className="inputEmail"
                type="email"
                name="email"
                placeholder="Confirme seu Email"
              />
            </div>

            <div className="campoSenha">
              <input
                className="inputSenha"
                type="password"
                name="password"
                placeholder="Digite sua Senha"
                id="senha"
              />
            </div>

            <div className="campoSenha">
              <input
                className="inputSenha"
                type="password"
                name="password"
                placeholder="Confirme sua Senha"
              ></input>
            </div>

            <div>{msg}</div>
          </form>
          <img className="rectangle-4" src={rectangle4} />
          <div className="buttons">
            <button className="buttonCadastro" onClick={(event) => registrar()}>
              <p className="textButton">Cadastrar!</p>
            </button>

            <a href="/login">
              <button className="buttonLogin" type="button">
                <p className="textButton">Já tenho Conta</p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cadastro;
