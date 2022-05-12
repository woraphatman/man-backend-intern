import express, { Express, Router } from "express";
const router = express.Router();
import uploads from "../middlewares/middleware.upload"
import auth from "../middlewares/middleware.auth"
import movieController from "../controllers/movie.controller"
import common, { redate, retype ,requrl} from "../middlewares/middleware.common";

router.use([requrl,retype,redate])
router.get("/movie", movieController.findAll);
router.get("/movie", movieController.findById);
router.post("/movie", movieController.add);
router.put("/movie", movieController.edit);
router.delete("/movie", movieController.delete);
router.post("/upload",uploads.array("files"), movieController.upload);

export default  router;

