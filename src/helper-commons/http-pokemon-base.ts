import axios, { AxiosInstance } from "axios";

const PokemonHTTP:AxiosInstance = 
    axios.create({
        baseURL: "https://pokeapi.co/api/v2/pokemon",
        headers: {
            "Content-type": "application/json"
        }
    })


const AbilitiesHTTP:AxiosInstance = 
    axios.create({
        baseURL: "https://pokeapi.co/api/v2/ability",
        headers: {
            "Content-type": "application/json"
        }
    })

const CharacteristicsHTTP:AxiosInstance = 
    axios.create({
        baseURL: "https://pokeapi.co/api/v2/characteristic",
        headers: {
            "Content-type": "application/json"
        }
    })


const Request = {
    PokemonHTTP,
    AbilitiesHTTP,
    CharacteristicsHTTP
}

export default Request