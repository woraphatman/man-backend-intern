import express from "express"
const router = express.Router();
import ratingController from "../controllers/rating.controller"


import common, { redate, retype ,requrl} from "../middlewares/middleware.common";

router.use([requrl,retype,redate])
router.get("/rating", ratingController.findAll);
router.get("/rating", ratingController.findById);
router.post("/rating", ratingController.add);
router.put("/rating", ratingController.edit);
router.delete("/rating", ratingController.delete);



export default  router;
