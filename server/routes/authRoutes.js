import express from "express";
import { signupUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);

router.post("/register", (req, res) => {
    console.log("Received register request:", req.body);
    res.send("Register route hit");
  });

export default router;