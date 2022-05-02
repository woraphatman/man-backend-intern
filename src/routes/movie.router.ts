import express, { Express } from "express";
const router = express.Router();
const movieController = require("../controllers/movie.controller");
const multer = require("multer");
var path = require('path')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      console.log("test")
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) 
  }
})
const upload = multer({ storage: storage });

router.get("/movie", movieController.findAll);
router.get("/movie", movieController.findById);
router.post("/movie", movieController.add);
router.put("/movie", movieController.edit);
router.delete("/movie", movieController.delete);
router.post("/upload",upload.array("files"), movieController.upload);

module.exports = router;

