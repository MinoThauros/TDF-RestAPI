import { NextFunction, Request, Response } from "express";

const Authenticator = (req: Request, res: Response, next: NextFunction) => {
    //authflow: autenticated users have a token in their header
    //if they do, we identify them to make sure they exist and pass to next middleware
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1]
        //verify token
        //if token is valid, we pass to next middleware
        //else we send a 401 unauthorized
    }
    //if no token, we send a 401 unauthorized
    //we dont handle here the creation of a new token nor new account s

}