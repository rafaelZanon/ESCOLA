import React from 'react';
import './style.css';

function Registrar(){
    return(
        <form className='formulario'>
            <div className="card-post" >

<h1>Criar postagem</h1>
<div className="line-post" ></div>

<div className="card-body-post" >

    <form>

        <div className="fields" >
            <label>Título</label>
            <input type="text" name="title"/>
        </div>

        <div className="fields" >
            <label>Descrição</label>
            <input type="text" name="description" />
            <p className="error-message"></p>
        </div>

        <div className="fields" >
            <label>Conteúdo</label>
            <textarea type="text" name="content"></textarea>
            <p className="error-message"></p>
        </div>

        <div className="btn-post" >
            <button type="submit" >Enviar</button>
        </div>

    </form>

</div>

</div>
        </form>
    )
}

export default Registrar;