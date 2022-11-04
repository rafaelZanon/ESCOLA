import AuthService from '../../services/AuthService'
import '../templates/Menu.css'
export default function Menu(props) {
    return (
        <nav className='menu'>
            <a href="/registrar">
                Cadastre-se
            </a>
            <a href="/login">
                Login
            </a>
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
            <a href='/logout' onClick={event => AuthService.logout()}>
                logout
            </a>
        </nav>
    )
}