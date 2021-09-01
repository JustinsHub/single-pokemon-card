import Request from "../helper-commons/http-pokemon-base"

const getPokemonByName = async(pokemon: string) => {
    let namePokemon = await Request.PokemonHTTP.get(`/${pokemon}`) //<-- input pokemon string name
    return namePokemon
}

const getRandomPokemon = async(id: number) => {
    let randomPokemon = await Request.PokemonHTTP.get(`/${id}`) //<-- randomize this id 
    return randomPokemon
}

const getPokemonAbilities = async(pokemon: string) => {
    let pokemonAbility = await Request.AbilitiesHTTP.get(`/${pokemon}`)
    return pokemonAbility
}

const getPokemonCharacteristics = async(id:number)=> {
    let pokemonCharacteristics = await Request.CharacteristicsHTTP.get(`/${id}`)
    return pokemonCharacteristics
}

const Pokemon = {
    getPokemonByName,
    getRandomPokemon,
    getPokemonAbilities,
    getPokemonCharacteristics
}

export default Pokemon