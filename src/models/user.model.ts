
import mongoose, { Mongoose } from "mongoose";
const userSchema = new mongoose.Schema({
    name: String,
    password: String

  });


  const UserModel = mongoose.model("user", userSchema);

  export default  UserModel;