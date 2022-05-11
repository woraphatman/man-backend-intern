import express, { Express } from "express";
const router = express.Router();
const userController = require("../controllers/user.controller");
router.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
  })
  
  router.use('/movie', (req, res, next) => {
    console.log('Request URL:', req.originalUrl)
    next()
  }, (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
  })
router.get("/user", userController.findAll);
router.get("/user", userController.findById);
router.post("/user", userController.add);
router.put("/user", userController.edit);
router.delete("/user", userController.delete);

module.exports = router;

