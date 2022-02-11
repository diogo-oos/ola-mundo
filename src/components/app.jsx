import '../assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../pages/login';
import Pokedex from '../pages/pokedex'

const App = () => {

    const estaLogado = localStorage.getItem('users')
    JSON.parse(estaLogado)

    if (estaLogado) {
        return (
            <Pokedex />
        )
    }
    return (
        <>
            <Login />
        </>
    );
}

export default App
