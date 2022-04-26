import express, { Express } from "express";
import {
  get,
  create,
  put,
  deleteid,
} from "../controllers/movie.controller";

const router = express.Router();
router.get("/movie", get);
router.post("/movie", create);
router.put("/movie/:id", put);
router.delete("/movie/:id", deleteid);

export default router;
