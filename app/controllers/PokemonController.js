import { AppState } from "../AppState.js"
import { pokemonService } from "../services/PokemonService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


function _drawMyPokemon() {
    const pokemons = AppState.myPokemons
    let htmlString = ''
    pokemons.forEach(pokemon => htmlString += pokemon.MyPokemonsHTMLTemplate);
    setHTML('myPokemons', htmlString)
}
function _drawPokemon(randomNum) {
    const pokemons = AppState.pokemons
    let htmlString = ''
    pokemons.find(pokemon => pokemon.id = randomNum)
    setHTML('pokemon', pokemons.PokemonHTMLTemplate)
}

export class PokemonController {
    constructor() {
        console.log('loaded Pokemon controller')
        AppState.on('account', this.getPokemon)
        AppState.on('pokemons', _drawPokemon)
        AppState.on('myPokemons', _drawMyPokemon)
    }

    async getPokemon(pokemonIndex) {
        try {
            await pokemonService.getPokemon(pokemonIndex)
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }
    async getMyPokemon(pokemonIndex) {
        try {
            await pokemonService.getMyPokemon()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }
}