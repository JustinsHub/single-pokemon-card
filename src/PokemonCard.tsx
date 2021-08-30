import React, { ChangeEvent, useState } from "react";
import Pokemon from "./pokemon-service/PokemonAPI";
import PokemonInterface from "./types/Pokemon";

const PokemonCard:React.FC = () => {
    const INITIAL_POKEMON:PokemonInterface = {
        pokemonName: ''
    }

    const [pokemonInput, setPokemonInput] = useState<PokemonInterface>(INITIAL_POKEMON)
    const [pokemonName, setPokemonName] = useState<string | null>(null)
    const [pokemonSprite, setPokemonSprite] = useState<string>('')
    //make a button for randomizing pokemon for getRandomPokemon

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setPokemonInput((pokemonName => ({...pokemonName, [name]:value}))
        )}

    const handleSubmit = async(e: React.SyntheticEvent) => {
        e.preventDefault()
        try {
            const getPokemon = await Pokemon.getPokemonByName(pokemonInput.pokemonName)
            console.log(getPokemon.data)
            setPokemonName(getPokemon.data.name)
            setPokemonSprite(getPokemon.data.sprites.front_default)
        } catch (error) {
            return error
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                id="get-pokemon"
                name="pokemonName"
                value={pokemonInput.pokemonName}
                placeholder="Pokemon Name"
                onChange={handleChange}
                />
                <div>
                    <button>Get Pokemon</button>
                </div>
            </form>
            {/* put this in a card */}
            <div>
                {pokemonName}
            </div>
            <div>
                <img src={pokemonSprite} alt="Pokemon Sprite"/>
            </div>
        </div>
    )
}

export default PokemonCard