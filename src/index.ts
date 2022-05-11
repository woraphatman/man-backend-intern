require("dotenv").config();
const path = require('path');

const mongoose = require("mongoose");
const express = require("express");
const movie = require("./routes/movie.router");
const user = require("./user/movie.router");
const rating = require("./routes/rating.router");
const admin = require("./routes/admin.router");
const app = express();
const port = 3001;
const multer =require("multer");
//app.use(multer());
app.use(express.json());
app.use(movie);
app.use(user);
app.use(rating);
app.use(admin);
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static('public'));
const uri = process.env.MONGODB_URI;

app.get('/images/:id', function(req, res) {
  res.sendFile(path.join(__dirname, '/uploads/'+req.params.id));
});
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
