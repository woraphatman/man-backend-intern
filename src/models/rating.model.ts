import mongoose, { Mongoose } from "mongoose";

const ratingSchema = new mongoose.Schema({
    rate: String,
    details: String

  });
  const RatingModel = mongoose.model("rating", ratingSchema);

  export default RatingModel;