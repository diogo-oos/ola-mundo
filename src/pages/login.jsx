import { Input } from "../components/ul/input"
import { Botao } from "../components/ul/botao"
import { useState } from "react"


const Login = () => {
    const [PARAM_1, PARAM_2] = useState('VALOR_INICIAL')

    const [email, setEmail] = useState()

    const [senha, setSenha] = useState()

    console.log('E-mail:', email, '\n', 'Senha:', senha);
    return (
        <>

            <header>

            </header>

            <main>
                <section className="area">
                    <div className="form">
                        <h1>Login</h1>

                        <Input 
                        setValue = {setEmail}
                        title="E-mail:" 
                        type="text"
                        id="email"
                        name="email"
                        Digite seu e-mail pessoal
                        />

                        <Input 
                        setValue = {setSenha}
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