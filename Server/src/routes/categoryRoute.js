import express from "express";
import categoryController from "../controllers/categoryController";
const router = express.Router();

//CREATE A category
router.post("/", categoryController.createCategory);
router.get("/", categoryController.getCategory);

export default router;
