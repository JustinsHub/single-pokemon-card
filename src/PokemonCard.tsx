import React, { ChangeEvent, useState } from "react";
import { Card } from "react-bootstrap";
import Pokemon from "./pokemon-service/PokemonAPI";
import PokemonInterface from "./types/Pokemon";
import './styles/PokemonCard.css'

const PokemonCard:React.FC = () => {
    const INITIAL_POKEMON:PokemonInterface = {
        pokemonName: ''
    }

    const [pokemonInput, setPokemonInput] = useState<PokemonInterface>(INITIAL_POKEMON)
    const [pokemonName, setPokemonName] = useState<string | null>('')
    const [pokemonSprite, setPokemonSprite] = useState<string>('')
    const [pokemonAbilities, setPokemonAbilities] = useState<string>('')
    const [pokemonCharacteristics, setPokemonCharacteristics] = useState<string>('')
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
            const getAbilities = await Pokemon.getPokemonAbilities(getPokemon.data.id)
            const getCharactersitics = await Pokemon.getPokemonCharacteristics(getPokemon.data.id)
            console.log({Pokemon: getPokemon.data, Abilities: getAbilities.data, Characteristics: getCharactersitics.data})
            setPokemonName(getPokemon.data.name)
            setPokemonSprite(getPokemon.data.sprites.front_default)
            // setPokemonAbilities(getAbilities.data)
            // setPokemonCharacteristics(getCharactersitics.data)
            setIsLoaded(() => true)
        } catch (error) {
            return error
        }
    }

    return (
        <section className="container">
            {isLoaded ?
            <div className="d-flex justify-content-center m-5">
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <div className="d-flex justify-content-center">
                    <img src={pokemonSprite} alt="Pokemon Sprite"/>
                </div>
                <Card.Title className="first-letter text-center">{pokemonName}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            </Card>
            </div>
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

export default PokemonCard