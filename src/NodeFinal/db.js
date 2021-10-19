const mongo = require('mongodb');
const { MongoClient } = mongo;
const url = "mongodb://localhost:27017/MoranDB";
const { pokemons } = require('./JSONs/pokedex.json');
const { especialidades } = require('./JSONs/especialidades.json');
const { cidades } = require('./JSONs/Cidade.json');
const { campos } = require('./JSONs/Campos.json');
const { tipos } = require('./JSONs/TiposPokemons.json');
const { partidas } = require('./JSONs/Partida.json');
const { rodadas } = require('./JSONs/Rodada.json');

//Banco de Dados Criado
MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    console.log("Banco de Dados Criado");
    client.close();
});

// Coleções
MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    const dbo = client.db("MoranDB");
    dbo.createCollection("pokemons", (err, res) => {
        if (err) throw err;
        console.log("Coleção de Pokemons Criada");
        client.close();
    });
});

MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    const dbo = client.db("MoranDB");
    dbo.createCollection("especialidades", (err, res) => {
        if (err) throw err;
        console.log("Coleção de Especialidades Criadas");
        client.close();
    });
});

MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    const dbo = client.db("MoranDB");
    dbo.createCollection("cidades", (err, res) => {
        if (err) throw err;
        console.log("Coleção de Cidades Criadas");
        client.close();
    });
});

MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    const dbo = client.db("MoranDB");
    dbo.createCollection("campos", (err, res) => {
        if (err) throw err;
        console.log("Coleção de Campos Criados");
        client.close();
    });
});

MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    const dbo = client.db("MoranDB");
    dbo.createCollection("tipos", (err, res) => {
        if (err) throw err;
        console.log("Coleção de Tipos de Pokemons");
        client.close();
    });
});

MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    const dbo = client.db("MoranDB");
    dbo.createCollection("partidas", (err, res) => {
        if (err) throw err;
        console.log("Coleção de Partidas");
        client.close();
    });
});

MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    const dbo = client.db("MoranDB");
    dbo.createCollection("rodadas", (err, res) => {
        if (err) throw err;
        console.log("Coleção de Rodadas Criada");
        client.close();
    });
});


// Inserindo Elementos
MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    const dbo = client.db("MoranDB");
    console.log("Banco de dados criado");
    dbo.collection("pokemons").insertMany(pokemons, (err, res) => {
        if (err) throw err;
        console.log("Numero de pokemons inseridos: " + res.insertedCount);
        client.close();
    });
});

MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    const dbo = client.db("MoranDB");
    console.log("Banco de dados criado");

    dbo.collection("especialidades").insertMany(especialidades, (err, res) => {
        if (err) throw err;
        console.log("Especialidades Inseridas: " + res.insertedCount);
        client.close();
    });
});

MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    const dbo = client.db("MoranDB");
    console.log("Banco de dados criado");
    dbo.collection("cidades").insertMany(cidades, (err, res) => {
        if (err) throw err;
        console.log("Cidades Inseridas: " + res.insertedCount);
        client.close();
    });
});

MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    const dbo = client.db("MoranDB");
    console.log("Banco de dados criado");

    dbo.collection("campos").insertMany(campos, (err, res) => {
        if (err) throw err;
        console.log("Campos Inseridas: " + res.insertedCount);
        client.close();
    });
});

MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    const dbo = client.db("MoranDB");
    console.log("Banco de dados criado");
    dbo.collection("tipos").insertMany(tipos, (err, res) => {
        if (err) throw err;
        console.log("Tipos de Pokemons: " + res.insertedCount);
        client.close();
    });
});

MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    const dbo = client.db("MoranDB");
    console.log("Banco de dados criado");
    dbo.collection("partidas").insertMany(partidas, (err, res) => {
        if (err) throw err;
        console.log("Partidas Criadas: " + res.insertedCount);
        client.close();
    });
});

MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    const dbo = client.db("MoranDB");
    console.log("Banco de dados criado");
    dbo.collection("rodadas").insertMany(rodadas, (err, res) => {
        if (err) throw err;
        console.log("Rodadas Criadas: " + res.insertedCount);
        client.close();
    });
});


