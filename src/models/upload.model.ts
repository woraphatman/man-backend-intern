import mongoose, { Mongoose } from "mongoose";
const imageSchema = new mongoose.Schema({
   
        sfieldname: String,
        originalname: String,
        encoding: String,
        mimetype: String,
        destination: String,
        filename: String,
        path: String,
        size:  Number
   
    
});
const ImageSchema = mongoose.model("image",imageSchema);
export default ImageSchema;