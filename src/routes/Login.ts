//simply calls the login middleware

import { Router } from "express";
import { Login } from "../controllers/LoginController.js";

const LoginRouter = Router();

LoginRouter.route("/").post(Login);

// other routes here
export default LoginRouter;

