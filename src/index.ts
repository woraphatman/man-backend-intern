require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const Router = require("./routes/movie.router");
const app = express();
const port = 3001;
app.use(express.json());
app.use(Router);

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("20scoops").collection("movie");
 
  client.close();
});
mongoose.connection.on('error', err => {
  console.error('MongoDB error', err)
  })
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});


module.exports = app;