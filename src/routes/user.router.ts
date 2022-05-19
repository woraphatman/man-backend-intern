import express, { Express } from "express";
import authheader, { authenticateJWT, postlogin } from "../middlewares/middleware.auth";
const router = express.Router();
const userController = require("../controllers/user.controller");
import common, { redate, retype ,requrl} from "../middlewares/middleware.common";

router.use([requrl,retype,redate])
router.get("/user", userController.findAll);
router.get("/user", userController.findById);
router.post("/user",[authheader,retype], userController.add);
router.put("/user", userController.edit);
router.delete("/user", userController.delete);
router.post('/login',[postlogin]);
router.post('/users',userController.postjwt);
router.get('/users',[authenticateJWT],userController.get);
export default  router;

