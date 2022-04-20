import express, { Express } from "express";
import { get,getID,create,put,deleteid} from"../src/controllers/movie.controller";
import validate from "../src/middleware/validate";
import Schema from "../src/dto/movie.schema";
const router = express.Router();


    router.get("/movie", get);
    router.post("/movie",validate(Schema),create);
    router.get("/movie/:id",getID);
    router.put("/movie/:id",put);
    router.delete("/movie/:id",deleteid);



export default router