import { SignUpResponsePayload } from "../AuthTypes.js";
import { connectDB } from "../db/db.js";
import { AuthInterface } from "../utils/authUtils.js";
import { NextFunction, Request, Response } from "express";
import { AuthError } from "./LoginController.js";

const {signup} = new AuthInterface()
const clientDB=await connectDB()

const Signup = async (req: Request, res: Response, next:NextFunction) => {
    const {email, password} = req.body
    try{
        const {data}:{data:SignUpResponsePayload} = await signup({email, password})
        await clientDB.db("BookBorrowing").collection("Users").insertOne({
            idToken:data.idToken,
            uid:data.localId,
            email:data.email,
        })
        //forward the response from firebase to the client (the token)
        res.status(201).json({...data as SignUpResponsePayload})
    }catch(err:any){
        const {code, message} = err.response.data.error
        console.log(err.response.data.error)
        res.status(code).send(message)
    }
}

export default Signup