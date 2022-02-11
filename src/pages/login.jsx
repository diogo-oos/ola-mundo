import { Input } from "../components/ul/input"
import { Botao } from "../components/ul/botao"
import { useState } from "react"


const Login = () => {
    const [values, setValues] = useState({})

    function handleSave(){
        if(values.email && values.senha){
            localStorage.setItem('users', JSON.stringify(values))
            window.location.reload()
        }
        else{
            alert('Por favor, preencha os campos')
        }
        
     
        
    }
    
    return (
        <>

            <header>

            </header>

            <main>
                <section className="area">
                    <div className="form">
                        <h1>Login</h1>

                        <Input 
                        setValues = {setValues}
                        title="E-mail:" 
                        type="text"
                        id="email"
                        name="email"
                        value= {values.email}
                        />

                        <Input 
                        setValues = {setValues}
                        title="Senha:" 
                        type="password"
                        id="senha"
                        name="senha"
                        value= {values.senha}
                        />

                        <Botao onClick={handleSave} >ENTRAR</Botao>

                    </div>
                </section>
            </main>
            <footer>

            </footer>
        </>

    )

}

export default Login