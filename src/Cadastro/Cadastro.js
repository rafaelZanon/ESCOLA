import "./style.css";
import rectangle3 from "../assets/rectangle3.svg";
import brandsGoogle from "../assets/brandsGoogle.svg";
import rectangle4 from "../assets/rectangle4.svg";
import group13 from "../assets/group13.svg";
import React from "react";
const Cadastro = () => {
 
  return (
    <div className="container">
      <div className="cadastro">
        <img className="group-13" src={group13} />
        <div className="frame-6">
          <div className="flex-container">
            <img className="brands-google" src={brandsGoogle} />
            <span className="google-store">Google Store</span>
          </div>
          
          <img className="rectangle-3" src={rectangle3} />
          <span className="criar-conta">Criar conta</span>
          
          <form>
        <div className="campoEmail">
            <label>Usuário</label>
            <input className="inputEmail" name="usuario" placeholder='Digite seu Usuario'/>
           
        </div>

        <div className="campoEmail">
            <label>Email</label>
            <input className="inputEmail" type="email" name="email" placeholder='Digite seu Email'/>
           
        </div>

        <div className="campoEmail">
            <label>Confirme seu email</label>
            <input className="inputEmail" type="email" name="email" placeholder='Confirme seu Email'/>
            
        </div>

        <div className="campoSenha">
            <label>Senha</label>
            <input className="inputSenha" type="password" name="password" placeholder='Digite sua Senha'/>
           
        </div>

        <div className="campoSenha">
            <label>Confirme sua senha</label>
            <input className="inputSenha" type="password" name="password" placeholder='Confirme sua Senha'></input>
        </div>

        <div className="buttons">
            <button className="buttonCadastro" type="submit"><p className="textButton">Cadastrar!</p></button>
              
            <a href='/login'><button className="buttonLogin" type='button'><p className="textButton">Já tenho Conta</p></button></a>
        </div>

    </form>
          <img className="rectangle-4" src={rectangle4} />
        </div>
      </div>
    </div>
  
  );
};
export default Cadastro;
