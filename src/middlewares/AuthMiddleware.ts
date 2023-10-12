import { NextFunction, Request, Response } from "express";
import { AuthInterface } from "../utils/authUtils.js";
import { connectDB } from "../db/db.js";
const clientDB=await connectDB()

export const Guard = async (req: Request, res: Response, next: NextFunction) => {
    const { verifyToken } = new AuthInterface();
    const idToken = req.query.auth as string;

    try {
        // Check if idToken is present
        if (!idToken) {
            throw new Error('ID Token is missing');
        }

        // Verify the token
        const { data } = await verifyToken({ idToken });

        // Check if the data exists
        if (!data) {
            throw new Error('Token verification failed');
        }

        // Fetch user details and attach to the request body
        req.body.user = clientDB.db("BookBorrowing").collection("Users").findOne({ email: data.email } as any);

        // Move to next middleware or route
        next();
    } catch (err) {
        console.error(err);
        next(err);
        //pass error to error handler
        //wouldnt need to do this if we had a global error handler (expess asYNC HANDLER)
    }
}

/*
+ Manage identity with firebase
+ Manage user profile data with MongoDB
//reference system design document on excallidraw
*/