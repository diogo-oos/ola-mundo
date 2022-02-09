import { Input } from "../components/ul/input"
import {Botao} from "../components/ul/botao"

const Login = () => {
    return (
        <>

            <header>

            </header>

            <main>
                <section className="area">
                    <div className="form">
                        <h1>Login</h1>

                        <Input 
                        title="E-mail:" 
                        type="text"
                        id="email"
                        name="email"
                        Digite seu e-mail pessoal
                        />

                        <Input 
                        title="Senha:" 
                        type="password"
                        id="senha"
                        name="senha"
                        />

                        <Botao>ENTRAR</Botao>

                    </div>
                </section>
            </main>
            <footer>

            </footer>
        </>

    )

}

export default Login