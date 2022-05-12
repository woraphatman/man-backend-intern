import express, { Express } from "express";

const router = express.Router();
const adminController = require("../controllers/admin.controller");
import common, { redate, retype ,requrl} from "../middlewares/middleware.common";

router.use([requrl,retype,redate])
router.get("/admin", adminController.findAll);
router.get("/admin", adminController.findById);
router.post("/admin", adminController.add);
router.put("/admin", adminController.edit);
router.delete("/admin", adminController.delete);

export default  router;
