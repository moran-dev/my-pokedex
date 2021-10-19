const mongoose = require('mongoose');
const { SearchCadastroSchema } = require('./JSONs/pokedex.json');
const { SearchCadastroSchema } = require('./JSONs/Treinador.json');
const { SearchCadastroSchema } = require('./JSONs/especialidades.json');
const { SearchCadastroSchema } = require('./JSONs/Cidade.json');

const SearchCadastroSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    treinadorId: {
        type: Number,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    pokemonId: {
        type: Number,
        required: true
    },
    especialidade: {
        type: String,
        required: true
    },
})

mongoose.model('SearchCadastro', SearchCadastroSchema)