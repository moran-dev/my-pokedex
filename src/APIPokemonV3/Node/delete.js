const mongo = require("mongodb");
const { MongoClient } = mongo;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    const dbo = client.db("MoranDB");
    db.collection("pokemons").deleteOne({ nome: 'Bulbasaur' }, (err, item) => {
        console.log(item);
    });
    client.close();
});

MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    const dbo = client.db("MoranDB");
    db.collection("pokemons").deleteOne({ nome: 'Bulbasaur' }, (err, item) => {
        console.log(item);
    });
    client.close();
});