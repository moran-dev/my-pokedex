const mongoose = require('mongoose');
const { CadastroSchema } = require('./JSONs/pokedex.json');
const { CadastroSchema } = require('./JSONs/Treinador.json');
const { CadastroSchema } = require('./JSONs/especialidades.json');

const CadastroSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    Pokemons: {
        type: Array,
        required: true
    },
    especialidade: {
        type: String,
        required: true
    },
})

mongoose.model('Cadastro', CadastroSchema)