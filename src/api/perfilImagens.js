import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import "./style.css";
import Main from '../components/templates/Main';

const URLapiGatinho= "https://api.thecatapi.com/v1/images/search";


export default function PerfilImagem() {

    const [imagem, setImagem] = useState([{
        id: '',
        url: '',
        width: 0,
        height: 0
    }])

    const [lista, setLista] = useState([])

    useEffect(() => {
        axios(URLapiGatinho).then((resp) => {
            setImagem(resp.data);
            setLista(resp.data);
        })
    }, [lista])


    const render = () => {
        return (
           <div>
               {lista.map(
                   (e) =>
                   <img className='posicaoImg' src={e.url}/>
               )}
           </div>
        )
    }
    return (
        <Main>
            {render()}
        </Main>
    )
}