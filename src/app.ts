import express, { Express, Response } from 'express';
import DBConnect from './db.js';
import 'dotenv/config'

const port = 3000;
const app: Express = express();


app.use(express.json())
app.use(express.urlencoded({extended:false}))
DBConnect();

app.listen(port, ()=>console.log(`server started on port ${port}`))