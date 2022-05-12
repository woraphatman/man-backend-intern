import mongoose, { Mongoose } from "mongoose";

const adminSchema = new mongoose.Schema({
    name: String,
    password: String

  });
  const AdminModel = mongoose.model("admin", adminSchema);

  export default AdminModel;