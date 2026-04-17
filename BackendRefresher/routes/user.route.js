import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

//can also be written as router.post('/register', registerUser);
router.route("/register").post(registerUser);

export default router;
