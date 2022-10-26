import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CrudAluno from './CrudAluno/CrudAluno';
import CrudCurso from './CrudCurso/CrudCurso';
import Carometro from './carometro/Carometro';
import Registrar from './RegisterPage';
import Login from './loginPage';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<CrudAluno/>} component={CrudAluno} />
                <Route path="/registrar"  element={<Registrar/>} component={Registrar} />
                <Route path="/login"  element={<Login/>} component={Login} />
                <Route path='/aluno' element={<CrudAluno/>} component={CrudAluno}/>            
                <Route path='/curso' element={<CrudCurso/>} component={CrudCurso}/>
                <Route path='/carometro' element={<Carometro/>} component={Carometro}/>            
            </Routes>
        </BrowserRouter>
        
    )
}