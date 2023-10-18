import express, { Express, Response, Request, NextFunction, ErrorRequestHandler  } from 'express';
import {MongoDBClient, connectDB} from './db/db.js'
import 'dotenv/config'
import UsersRouter from './routes/Users.js'//instead of using require we use import
import LoginRouter from './routes/Login.js';
import SignUpRouter from './routes/SignUp.js';



const port = 3000;
const app: Express = express();

connectDB()

//app.use(connectDB)
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get('/', (req:Request, res: Response) => {
    res.send('Welcome to your first API')
})
//we could keep adding routes here but we will use a router instead

app.use('/users',UsersRouter)//pass route instance to app.use

app.use('/login',LoginRouter)

app.use('/signup',SignUpRouter)

app.use((err:ErrorRequestHandler, req:Request, res:Response, next:NextFunction):any => {
    console.log(err)
    res.status(500).json({...err})
})

app.listen(port, ()=>console.log(`server started on port ${port}`))


