import HTTP from '../helper-commons/http-pokemon-base'

const getPokemonByName = async(pokemon: string) => {
    let namePokemon = await HTTP.get(`/${pokemon}`)
    return namePokemon
}

const  getRandomPokemon = async(id: number) => {
    let randomPokemon = await HTTP.get(`/${id}`) //<-- randomize this id 
    return randomPokemon
}

const Pokemon = {
    getPokemonByName,
    getRandomPokemon
}

export default Pokemon