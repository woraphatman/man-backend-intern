import express, { Express } from "express";
const router = express.Router();
const ratingController = require("../controllers/rating.controller");
router.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

router.use('/rating', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})
router.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send(' ERROR !')
  })
router.get("/rating", ratingController.findAll);
router.get("/rating", ratingController.findById);
router.post("/rating", ratingController.add);
router.put("/rating", ratingController.edit);
router.delete("/rating", ratingController.delete);



module.exports = router;

