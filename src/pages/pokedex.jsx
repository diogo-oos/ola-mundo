import { useEffect, useState } from "react"
import { Card } from "../components/ul/card"
import { getImagePokemon } from '../utils/helpers'

export default function Pokedex() {
    const [pokemons, setPokemons] = useState([])//array de pokemons

    useEffect(() => {

        return () => {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=12&offset=1')
                .then(res => res.json())
                .then(dados => {
                    setPokemons(dados.results)
                })
                .catch (error => {
                    console.log('Deu esse erro:', error)
                })
                    
            /*async function chamarPokemons() {
                try {
                    const promisse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12&offset=0')
                    const res = await promisse.json()
                    setPokemons(res.results)
                    
                    res.forEach ((item) => {
                        const promisse2 = await fetch(res.url)
                        const res2 = await promisse2.json()
                    })


                }
                catch (error) {
                    console.log('Deu esse erro:', error)
                }
            }
            chamarPokemons()*/
        }
    }, [])

    return (
        <>
            <header>
                <div className="container">
                    <h1>Pokedex</h1>

                    <div className="row row-cols-2">
                        {
                            pokemons.map((poke, indice) => (
                                <Card key={indice} image={getImagePokemon(poke.url)} name={poke.name} />
                            ))
                        }
                    </div>

                </div>
            </header>

            <main>

            </main>

            <footer>

            </footer>
        </>
    )
}