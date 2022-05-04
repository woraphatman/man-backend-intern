import express, { Express } from "express";
const router = express.Router();
const movieController = require("../controllers/movie.controller");
const multer = require("multer");
const path = require('path')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      console.log("test")
    cb(null, 'src/uploads/')
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
router.post("/uploads",upload.array("files"), movieController.upload);

module.exports = router;

