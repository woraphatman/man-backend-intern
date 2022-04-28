import mongoose, { Mongoose } from "mongoose";

const movieSchema = new mongoose.Schema({
    name: String,
    description: String,
    images: String,
    genres: String
  });
  const MovieModel = mongoose.model("Movie", movieSchema);

  module.exports = MovieModel;