import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CrudCliente from './CrudCliente/CrudCliente';
import CrudProduto from './CrudProduto/CrudProduto';
import ListaClientes from './ListaClientes/ListaClientes';
import Registrar from './Cadastro/Cadastro';
import Login from './loginPage/Login';
import Home from './Home/home';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Login/>} component={Login} />
                <Route path="/registrar"  element={<Registrar/>} component={Registrar} />
                <Route path="/login"  element={<Login/>} component={Login} />
                <Route path='/cliente' element={<CrudCliente/>} component={CrudCliente}/>            
                <Route path='/produto' element={<CrudProduto/>} component={CrudProduto}/>
                <Route path='/listaCliente' element={<ListaClientes/>} component={ListaClientes}/>   
                <Route path='/home' element={<Home/>} component={Home}/>            
            </Routes>
        </BrowserRouter>
        
    )
}