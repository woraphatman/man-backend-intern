import express, { Express } from "express";
const router = express.Router();
const userController = require("../controllers/user.controller");

router.get("/user", userController.findAll);
router.get("/user", userController.findById);
router.post("/user", userController.add);
router.put("/user", userController.edit);
router.delete("/user", userController.delete);

module.exports = router;

