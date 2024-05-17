import express from "express";
import { login, logout, signUp } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", login);
router.post("/logout", logout);
router.post("/signup", signUp);

export default router;