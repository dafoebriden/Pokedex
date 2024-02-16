import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { setHTML } from "../utils/Writer.js"
import { api, pokemonAPI } from "./AxiosService.js"


class PokemonService {
    async getPokemon(pokemonIndex) {
        let randomNum = Math.floor(Math.random() * 1303)
        const response = await pokemonAPI.get(`api/v2/pokemon/${randomNum}/`)
        const newPokemon = response.data.results.map(pokemonPOJO => new Pokemon(pokemonPOJO))
        AppState.pokemons = newPokemon
    }
    async getMyPokemon() {
        const response = await api.get('api/pokemon')
        const myNewPokemon = response.data.results.map(pokemonPOJO => new Pokemon(pokemonPOJO))
        AppState.myPokemons = myNewPokemon
    }
}



export const pokemonService = new PokemonService()