import '../templates/Menu.css'
export default function Menu(props) {
    return (
        <nav className='menu'>
            <a href="/aluno">
                Alunos
            </a>
            <a href="/curso">
                Cursos
            </a>
            <a href="/carometro">
                Carômetro
            </a>
        </nav>
    )
}