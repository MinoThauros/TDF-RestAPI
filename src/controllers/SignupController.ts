import { SignUpResponsePayload } from "../AuthTypes.js";
import { connectDB } from "../db/db.js";
import { AuthInterface } from "../utils/authUtils.js";
import { NextFunction, Request, Response } from "express";

const {signup} = new AuthInterface()
const clientDB=await connectDB()

const Signup = async (req: Request, res: Response) => {
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
    }catch(err){
        console.log(err)
        res.status(401).json({...err as any})
    }
}