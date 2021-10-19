const mongo = require("mongodb");
const { MongoClient } = mongo;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    const dbo = client.db("MoranDB");
    db.collection("students").findOne({ nome: "Vitor" }, (err, item) => {
        console.log(item);
    });
    collection.students.find({ name: "Vitor" }).toArray((err, items) => {
        console.log(items);
        client.close();
    });
});
