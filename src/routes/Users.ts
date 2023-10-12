import { create } from "domain";
import { Router, Response, Request } from "express";
import { borrowBook, createUser, deleteUser, getUserById, getUsers, returnBook, updateUser } from "../controllers/UsersController.js";

const UserRouter = Router();


UserRouter.route("/")
.get(getUsers)
.post(createUser)

/* 
.delete((req: Request, res: Response) => {
    res.send("Delete all Users");
});
=> Why would I need this
 */

//user specific routes/actions
//route is now /users/:id
UserRouter.route("/:id")
.get(getUserById)

.put(updateUser)
.delete(deleteUser)

UserRouter.route("/:id/borrow/:bookId")
.put(borrowBook)

UserRouter.route("/:id/return/:bookId")
.put(returnBook)



export default UserRouter;