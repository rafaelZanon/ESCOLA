import { useEffect } from 'react';
import AuthService from '../../services/AuthService'
import '../templates/Menu.css'
export default function Menu(props) {

    const role = AuthService.getCurrentUser().user.role;


    useEffect(() =>{
        console.log(role);
    },[role])

    return (
        <>
            {role == "Admin" ?  
            <nav className='menu'>
            <a href="/home">
                Home 
            </a>
            <a href="/cliente">
                Clientes 
            </a>
            <a href="/produto">
                Produtos 
            </a>
            <a href="/listaCliente">
                Informações 
            </a>
                </nav> : null}
        </>
       
    )
}