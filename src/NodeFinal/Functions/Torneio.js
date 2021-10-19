const mongoose = require('mongoose');

const TorneioSchema = new mongoose.Schema({

    Rodadas:{
        type: Number,
        required: true
    },
    Partida:{
        type: Number,
        required: true
    },
    Campos:{
        type: Array(String),
        required: true
    }

})

mongoose.model('Torneio', TorneioSchema)