import { SignInResponsePayload } from "../AuthTypes.js";
import { connectDB } from "../db/db.js";
import { AuthInterface } from "../utils/authUtils.js";

import { NextFunction, Request, Response } from "express";
const clientDB=await connectDB()
export const Login = async (req: Request, res: Response) => {
    const {login}=new AuthInterface()
    //authflow: autenticated users have a token in their header
    //if they do, we identify them to make sure they exist and pass to next middleware
    const {email, password} = req.body
    try{
        const {data} = await login({email, password})
        //once user exists, we wanna make sure that user also exists in our database
        const user = await clientDB.db("BookBorrowing").collection("Users").findOne({idToken:req.query.auth} as any)
        if(!user){
            clientDB.db("BookBorrowing").collection("Users").insertOne({
                idToken:data.idToken,
                uid:data.localId,
                email:data.email,
            })
        }
        res.status(200).json({...data as SignInResponsePayload})
    }catch(err){
        console.log(err)
        res.status(401).json({...err as any})
    }
    //if no token, we send a 401 unauthorized
    //we dont handle here the creation of a new token nor new account
}