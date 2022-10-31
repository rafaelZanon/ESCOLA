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
                Pedidos
            </a>
            <a href="/listaClientes">
                Informações
            </a>
            <a href='/logout'>
                logout
            </a>
        </nav>
    )
}