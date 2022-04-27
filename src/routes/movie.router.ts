import express, { Express } from "express";
const router = express.Router();
const movieController = require("../controllers/movie.controller");

router.get("/movies", movieController.findAll);
router.get("/movie", movieController.findById);
router.post("/movie", movieController.add);
router.put("/movie/:id", movieController.edit);
router.delete("/movie/:id", movieController.delete);

module.exports = router;

