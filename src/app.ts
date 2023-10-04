import express, { Express, Response, Request } from 'express';
import DBConnect from './db/db.js'
import 'dotenv/config'
import UsersRouter from './routes/Users.js'

const port = 3000;
const app: Express = express();


app.use(express.json())
app.use(express.urlencoded({extended:false}))
DBConnect();

app.get('/', (req:Request, res: Response) => {
    res.send('Welcome to your first API')
})
//we could keep adding routes here but we will use a router instead

app.use('/users', UsersRouter)


app.listen(port, ()=>console.log(`server started on port ${port}`))