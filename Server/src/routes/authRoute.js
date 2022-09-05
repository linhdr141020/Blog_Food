import express from "express";
import authController from "../controllers/authController";
const router = express.Router();

//CREATE A USER
router.post("/register", authController.Signup);
router.post("/login", authController.Signin);

export default router;
