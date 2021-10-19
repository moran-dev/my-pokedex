const mongoose = require('mongoose');
const { TreinadorSchema } = require('./JSONs/Treinador.json');
const { TreinadorSchema } = require('./JSONs/pokedex.json');

const TreinadorSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    treinadorId:{
        type: Number,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    especialidade:{
        type: String,
        required: true
    },
    idade:{
        type: Number,
        required: true
    },
    pokemons:{
        type: Array(String),
        required: true
    }

})

mongoose.model('Treinador', TreinadorSchema)