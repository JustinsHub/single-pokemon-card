import HTTP from '../helper-commons/http-pokemon-base'

const getPokemonByName = async(pokemon: string) => {
    let newPokemon = await HTTP.get(`/${pokemon}`)
    console.log(newPokemon)
}

const  getRandomPokemon = async(id: number) => {
    let randomPokemon = await HTTP.get(`/${id}`) //<-- randomize this id 
    console.log(randomPokemon)
}

const Pokemon = {
    getPokemonByName,
    getRandomPokemon
}

export default Pokemon