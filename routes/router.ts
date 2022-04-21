import express, { Express } from "express";
import {
  get,
  getID,
  create,
  put,
  deleteid,
} from "../src/controllers/movie.controller";

const router = express.Router();
router.get("/movie", get);
router.post("/movie",  create);
router.get("/movie/:id", getID);
router.put("/movie/:id", put);
router.delete("/movie/:id", deleteid);

export default router;
