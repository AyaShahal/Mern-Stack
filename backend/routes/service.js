import express from "express";
const router = express.Router();
import controller from "../controllers/serviceController.js";
import verifyToken from "../middleware/admin.js";
import image from "../middleware/image.js";

// router.get("/", verifyToken, controller.getAll);
router.get("/", controller.getAll);

// router.get("/:id", verifyToken, controller.get);
router.get("/:id", controller.get);

router.post("/", verifyToken, image.uploadImage, controller.post);
router.put("/:id",  controller.updateService);
router.put("/image/:id", verifyToken, image.editImage, controller.put);
router.delete("/:id", verifyToken, controller.delete);

export default router;
