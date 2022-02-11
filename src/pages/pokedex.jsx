export default function Pokedex() {
    const pokemon = {
        name: 'Ditto',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png'
    }
    return (
        <>
            <header>
                <div className="container">
                    <h1>Pokedex</h1>
                    <div className="row row-cols-2">
                        {
                            pokemon.map((poke, indice) => (
                                <div key={indice} className="col-12 col-sm-6 col-md-4">
                                    <div className="card">
                                        <img className="img-fluid" src={pokemon.image} alt={pokemon.name} title={pokemon.name} />
                                        <h2>{pokemon.name}</h2>
                                    </div>
                                </div>
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