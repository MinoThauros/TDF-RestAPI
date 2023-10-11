import { MongoClient, ServerApiVersion } from "mongodb";
import express, { Express, Response, Request, NextFunction, ErrorRequestHandler  } from 'express';
import 'dotenv/config'

const uri = `mongodb+srv://TDFMongoDB:${process.env.DB_PASSWORD}@cluster0.eqxokmp.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const MongoDBClient = new MongoClient(uri, {//this used to be Mongoose
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

export const connectDB=async()=>{
    try{
      console.log('connected to db')
      return await MongoDBClient.connect();
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}