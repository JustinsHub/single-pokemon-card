import React, { useState } from 'react'
import { Card } from "react-bootstrap";
import { PokemonCardProps } from './types/Pokemon';

const PokemonCard:React.FC<PokemonCardProps> = ({pokemonName, pokemonFrontSprite, pokemonBackSprite}) => {
    const [toggleSprite, setToggleSprite] = useState<boolean>(false)
    //place backSprite on conditional

    const toggleFrontBack = () => {
        setToggleSprite((toggle) => !toggle)
    }

    return (
        <div>
            <div className="d-flex justify-content-center m-5">
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <div className="d-flex justify-content-center">
                    <img onClick={toggleFrontBack} src={toggleSprite ? pokemonFrontSprite : pokemonBackSprite} alt="Pokemon Sprite"/>
                </div>
                <Card.Title className="first-letter text-center">{pokemonName}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default PokemonCard