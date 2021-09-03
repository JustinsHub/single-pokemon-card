import React, { ChangeEvent, useState } from "react";
import Pokemon from "./pokemon-service/PokemonAPI";
import PokemonCard from "./PokemonCard";
import {PokemonInterface} from "./types/Pokemon";
import './styles/PokemonCard.css'
const PokemonComponent:React.FC = () => {
    const INITIAL_POKEMON:PokemonInterface = {
        pokemonName: ''
    }

    const [pokemonInput, setPokemonInput] = useState<PokemonInterface>(INITIAL_POKEMON)
    const [pokemonName, setPokemonName] = useState<string | null>('')
    const [pokemonFrontSprite, setPokemonFrontSprite] = useState<string>('')
    const [pokemonBackSprite, setPokemonBackSprite] = useState<string>('')
    const [pokemonAbility, setPokemonAbility] = useState<string[]>([])
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
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
            setPokemonFrontSprite(getPokemon.data.sprites.front_default)
            setPokemonBackSprite(getPokemon.data.sprites.back_default)
            setIsLoaded(() => true)
            setPokemonAbility(getPokemon.data.abilities)
            
        } catch (error) {
            return error
        }
    }

    return (
        <section className="container">
            {isLoaded ? 
            <PokemonCard 
            pokemonName={pokemonName}
            pokemonFrontSprite={pokemonFrontSprite} 
            pokemonBackSprite={pokemonBackSprite}
            pokemonAbility={pokemonAbility}
            />
            :
            null
            }

            <div className="pokemon-card">
            <form onSubmit={handleSubmit}>
                <input
                id="get-pokemon"
                name="pokemonName"
                value={pokemonInput.pokemonName}
                placeholder="Pokemon Name"
                onChange={handleChange}
                />
                <div className="d-flex justify-content-center mt-2">
                    <button className="btn btn-primary">Get Pokemon</button>
                </div>
            </form>
            </div>
        </section>
    )
}

export default PokemonComponent