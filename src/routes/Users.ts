import { create } from "domain";
import { Router, Response, Request } from "express";
import { borrowBook, createUser, deleteUser, getUserById, getUsers, returnBook, updateUser } from "../controllers/UsersController.js";
import { Guard } from "../middlewares/AuthMiddleware.js";

const UserRouter = Router();


UserRouter.route("/")
.get(Guard,getUsers)
.post(Guard,createUser)

/* 
.delete((req: Request, res: Response) => {
    res.send("Delete all Users");
});
=> Why would I need this
 */

//user specific routes/actions
//route is now /users/:id
UserRouter.route("/:id")
.get(Guard,getUserById)

.put(Guard,updateUser)
.delete(Guard,deleteUser)

UserRouter.route("/:id/borrow/:bookId")
.put(Guard,borrowBook)

UserRouter.route("/:id/return/:bookId")
.put(Guard,returnBook)



export default UserRouter;