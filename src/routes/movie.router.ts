import express, { Express, Router } from "express";
const router = express.Router();
const movieController = require("../controllers/movie.controller");
const multer = require("multer");
const path = require('path')
const cookieParser = require('cookie-parser')


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
router.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})
router.use((req, res, next) => {
  if (!req.headers['x-auth'])
  return res.json({ error:"You must be Admin"})
  next()
})
router.use(cookieParser())
router.use('/movie', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})
router.get("/movie", movieController.findAll);
router.get("/movie", movieController.findById);
router.post("/movie", movieController.add);
router.put("/movie", movieController.edit);
router.delete("/movie", movieController.delete);
router.post("/uploads",upload.array("files"), movieController.upload);

module.exports = router;

