import { Router } from "express";
import { Login } from "../controllers/LoginController.js";

const LoginRouter = Router();

LoginRouter.route("/").post(Login);
//at first, no middlware
//now we put middleware which adds additional requirement to the API request

// other routes here
export default LoginRouter;

