import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  deleteUser,
  getAllUsers,
} from "../controllers/user.controller.js";

const router = Router();

//can also be written as router.post('/register', registerUser);
router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").post(logoutUser);

router.route("/getAllUsers").get(getAllUsers);

router.route("/delete").delete(deleteUser);

export default router;
