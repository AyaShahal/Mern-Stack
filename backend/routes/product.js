import express from "express";
const router = express.Router();
import Model from "../models/product.js";
import controller from "../controllers/productcontrollers.js";
import { deleteOne } from "../controllers/productcontrollers.js";
// import {updateProduct} from "../../controllers/productcontrollers.js";
import image from "../middleware/image.js";
import path from 'path';

// import searchController from "../controllers/searchcontrollers.js";

// router.get("/", verifyToken, controller.getAll);
router.get("/", controller.getAll);

// router.get("/:id", verifyToken, controller.get);
router.get("/:id", controller.get);
router.post("/",  image.uploadImage, controller.post);
router.put("/:id", controller.updateProduct);
// router.put("/image/:id", image.editImage, controller.put);
router.delete("/:id", deleteOne);


export default router;
