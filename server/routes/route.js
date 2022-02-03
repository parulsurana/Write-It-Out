import express from "express";

import {
	createPost,
	deletePost,
	getAllPost,
	getPost,
	updatePost,
} from "../controller/post-controller.js";

const router = express.Router();

router.post("/create", createPost);

router.get("/posts", getAllPost);
router.get("/post:id", getPost);
router.post("/update:id", updatePost);
router.delete("/delete:id", deletePost);

export default router;
