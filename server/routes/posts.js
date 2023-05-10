import express from "express";
import {
  getPosts,
  getPost,
  deletePost,
  updatePost,
  createPost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.get("/:id", getPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
// router.get("/", getPosts);

export default router;
