import 'dotenv/config'
import path from "path"
import mongoose from "mongoose"
import express from "express"
import movie from "./routes/movie.router"
import user from "./routes/user.router"
import rating from "./routes/rating.router"
import admin from "./routes/admin.router"
const app = express();
const port = 3001;
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
mongoose.connect(uri
);
const db = mongoose.connection;
db.on("error", (err) => {
  console.error("MongoDB error", err);
});
db.once("open", (log) => {
  
});
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

export default  app;
