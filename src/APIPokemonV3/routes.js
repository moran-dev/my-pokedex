const express = require('express')
const routes = express.Router();

const searchPokemon = require('./Functions/Search');
const searchTreinador = require('./Functions/Search');
const createRegistro = require('./Functions/Cadastro');
const deletedRegistro = require('./Functions/Cadastro');
const updateRegistro = require('./Functions/Cadastro');

routes.get('/Pokemon', searchPokemon.All);
routes.get('/Pokemon/id', searchPokemon.OnlyOne);
routes.get('/Treinador', searchTreinador.All);
routes.get('/Treinador/treinadorId', searchTreinador.OnlyOne);
routes.post('/Cadastro', createRegistro.index);
routes.put('/Cadastro', updateRegistro.index);
routes.delete('/Cadastro', deletedRegistro.index);

module.exports = routes;
