/*
Login flow:
1. take in email and password
2. verify with firebase auth if email and passwords are correct
3. If correct, we create a token and send it back to the user
4. If not, we send a 401 unauthorized - with the firebase error message

*/

import { NextFunction, Request, Response } from "express";

const Login = async (req: Request, res: Response, next: NextFunction) => {
    
}