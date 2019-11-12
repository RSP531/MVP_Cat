
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Rob:q25MKt@A^d4f@cluster0-6qxdh.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  collection.insertOne({_id: 1, item: "https://cdn2.thecatapi.com/images/2m5.jpg"});
  client.close();
});
