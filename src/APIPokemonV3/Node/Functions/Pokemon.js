const mongoose = require('mongoose');
const { PokemonsSchema } = require('./JSONs/pokedex.json');

const PokemonsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    pokemonId: {
        type: Number,
        required: true
    }

})

mongoose.model('Pokemons', PokemonsSchema)