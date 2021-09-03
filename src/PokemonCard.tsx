import React, { useState } from 'react'
import { Card } from "react-bootstrap";
import { PokemonCardProps } from './types/Pokemon';

const PokemonCard:React.FC<PokemonCardProps> = ({pokemonName, pokemonFrontSprite, pokemonBackSprite, pokemonAbility}) => {
    const [toggleSprite, setToggleSprite] = useState<boolean>(false)
    //place backSprite on conditional

    const toggleFrontBack = () => {
        setToggleSprite((toggle) => !toggle)
    }

    const pokemonAbilities = 
        <Card.Text key='1'>
            {pokemonAbility.map((pokemon:any) => <div>{pokemon.ability.name}</div>)}
        </Card.Text>
    

    return (
        <div>
            <div className="d-flex justify-content-center m-5">
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <div className="d-flex justify-content-center">
                    <img onClick={toggleFrontBack} src={!toggleSprite ? pokemonFrontSprite : pokemonBackSprite} alt="Pokemon Sprite"/>
                </div>
                <Card.Title className="first-letter text-center">{pokemonName}</Card.Title>
                <Card.Subtitle>Abilities:</Card.Subtitle>
                {pokemonAbilities}
            </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default PokemonCard