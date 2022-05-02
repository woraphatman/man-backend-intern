require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const Router = require("./routes/movie.router");
const app = express();
const port = 3001;
const multer =require("multer");
//app.use(multer());
app.use(express.json());
app.use(Router);
app.use(express.urlencoded({ extended: true }));

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => {
  console.error("MongoDB error", err);
});
db.once("open", (log) => {
  
});
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

module.exports = app;
