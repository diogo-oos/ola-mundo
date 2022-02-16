const baseImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/:idImage:.svg'

export function getImagePokemon (url) {
    const urlArray = url.split('/')
    return baseImage.replace(':idImage:', urlArray[6])
}