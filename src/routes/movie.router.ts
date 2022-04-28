import express, { Express } from "express";
const router = express.Router();
const movieController = require("../controllers/movie.controller");

router.get("/movie", movieController.findAll);
router.get("/movie", movieController.findById);
router.post("/movie", movieController.add);
router.put("/movie", movieController.edit);
router.delete("/movie", movieController.delete);
// router.post("/upload", movieController.postfile);

module.exports = router;

