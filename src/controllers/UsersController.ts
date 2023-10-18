import { Router, Response, Request, NextFunction } from "express";
import {MongoDBClient, connectDB} from './../db/db.js'

//no op if already connected
const clientDB=await connectDB()
export const createUser= async (req: Request, res: Response, next:NextFunction) => {
    console.log(req.body)
    try{
        const newUser = await clientDB.db("BookBorrowing").collection("Users").insertOne(req.body)
        res.status(201).json(newUser)
    }catch(err){
        console.log(err)
        res.status(500).json({...err as any})
    }
    //think of proper error handling

}

/**
 * Fetches all users (profiles) from the database
 */
export const getUsers= async (req: Request, res: Response, next:NextFunction) => {
    try{
        const users = await clientDB.db("BookBorrowing").collection("Users").find().toArray()
        res.status(200).json(users)
    }catch(err){
        console.log(err)
        next(err)
    }
}

/**
 * Fetches a user from the database by id
 */
export const getUserById= async (req: Request, res: Response,  next:NextFunction) => {
    try{
        const user = await clientDB.db("BookBorrowing").collection("Users").findOne({_id:req.params.id} as any)
        res.status(200).json(user)
    }catch(err){
        console.log(err)
        res.status(401).json({...err as any})
    }
}

/**
 * Updates a user in the database by id
 */
export const updateUser= async (req: Request, res: Response,next:NextFunction) => {
    try{
        const updatedUser = await clientDB.db("BookBorrowing").collection("Users").updateOne({_id:req.params.id} as any, {$set:req.body})
        res.status(200).json(updatedUser)
    }catch(err){
        console.log(err)
        res.status(401).json({...err as any})
    }
}

/**
 * Deletes a user from the database by id
 */
export const deleteUser= async (req: Request, res: Response,next:NextFunction) => {
    try{
        const deletedUser = await clientDB.db("BookBorrowing").collection("Users").deleteOne({_id:req.params.id} as any)
        //in the collection, find the user with the id in the url and delete it (_id:req.params.id is the condition)
        res.status(200).json(deletedUser)
    }catch(err){
        console.log(err)
        res.status(401).json({...err as any})
    }
}

/**
 * Borrow a book from the database by id
 */
export const borrowBook= async (req: Request, res: Response,next:NextFunction) => {
    try{
        const borrowedBook = await clientDB.db("BookBorrowing").collection("Users").updateOne({_id:req.params.id} as any, {$push:{books:req.params.bookId}})
        //in the collection, find the user with the id in the url and update it (_id:req.params.id is the condition; 
        //if it matches, update the books array by pushing the bookId in the url to it)
        //we are pushing the oncoming element to the books property of the user which is an array
        res.status(200).json(borrowedBook)
    }catch(err){
        console.log(err)
        res.status(401).json({...err as any})
    }
}

/**
 * Return a book from the database by id
 */
export const returnBook= async (req: Request, res: Response, next:NextFunction) => {
    try{
        const returnedBook = await clientDB.db("BookBorrowing").collection("Users").updateOne({_id:req.params.id} as any, {$pull:{books:req.params.bookId}})
        //in the collection, find the user with the id in the url and update it (_id:req.params.id is the condition;
        //if it matches, update the books array by pulling the bookId in the url from it)
        res.status(200).json(returnedBook)
    }catch(err){
        console.log(err)
        res.status(401).json({...err as any})
    }
}