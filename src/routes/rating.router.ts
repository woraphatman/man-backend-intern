import express, { Express } from "express";
const router = express.Router();
const ratingController = require("../controllers/rating.controller");

router.get("/rating", ratingController.findAll);
router.get("/rating", ratingController.findById);
router.post("/rating", ratingController.add);
router.put("/rating", ratingController.edit);
router.delete("/rating", ratingController.delete);



module.exports = router;

