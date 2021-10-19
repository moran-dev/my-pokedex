const express = require('express')
const routes = express.Router();

const searchPokemon = require('./Functions/Search.js');
const searchTreinador = require('./Functions/Search.js');
const createRegistro = require('./Functions/Cadastro.js');
const deletedRegistro = require('./Functions/Cadastro.js');
const updateRegistro = require('./Functions/Cadastro.js');

routes.get('/Pokemon', searchPokemon.All);
routes.get('/Pokemon/id', searchPokemon.OnlyOne);
routes.get('/Treinador', searchTreinador.All);
routes.get('/Treinador/treinadorId', searchTreinador.OnlyOne);
routes.post('/Cadastro', createRegistro.index);
routes.put('/CadastroUpdate', updateRegistro.index);
routes.delete('/CadastroDelete', deletedRegistro.index);

module.exports = routes;
