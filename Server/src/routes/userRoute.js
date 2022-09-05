import express from "express";
import userController from "../controllers/userController";
const router = express.Router();

//CREATE A USER
router.put("/:id", userController.Edit);
router.delete("/:id", userController.Delete);
router.get("/:id", userController.getUsers);

export default router;
