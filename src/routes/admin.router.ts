import express, { Express } from "express";
const router = express.Router();
const adminController = require("../controllers/admin.controller");
router.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
  })
  
  router.use('/admin', (req, res, next) => {
    console.log('Request URL:', req.originalUrl)
    next()
  }, (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
  })
router.get("/admin", adminController.findAll);
router.get("/admin", adminController.findById);
router.post("/admin", adminController.add);
router.put("/admin", adminController.edit);
router.delete("/admin", adminController.delete);

module.exports = router;

