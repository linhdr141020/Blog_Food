import express from "express";
import postController from "../controllers/postController";
const router = express.Router();

//CREATE A post
router.post("/", postController.createPost);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);
router.get("/:id", postController.getPost);
router.get("/", postController.getAllPost);

export default router;
