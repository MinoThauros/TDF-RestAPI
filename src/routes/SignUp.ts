import { Router } from "express";
import Signup from "../controllers/SignupController.js";

const SignUpRouter= Router();

SignUpRouter.route('/').post(Signup)

export default SignUpRouter