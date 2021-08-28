import axios from "axios";

export default axios.create({
    baseURL: "pokemonapi", //<--put pokemon API
    headers: {
        "Content-type": "application/json"
    }
})