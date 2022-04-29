import express, { Express } from "express";
const router = express.Router();
const adminController = require("../controllers/admin.controller");

router.get("/admin", adminController.findAll);
router.get("/admin", adminController.findById);
router.post("/admin", adminController.add);
router.put("/admin", adminController.edit);
router.delete("/admin", adminController.delete);

module.exports = router;

