import { Router, Response, Request } from "express";

const UserRouter = Router();


UserRouter.route("/")
.get((req: Request, res: Response) => {
    res.send("Retrieve a list of all users");
})
.post((req: Request, res: Response) => {
    res.send("Register a new user");
    //keep in mind that mongoose will create the id for us
})

/* 
.delete((req: Request, res: Response) => {
    res.send("Delete all Users");
});
=> Why would I need this
 */

//user specific routes/actions
//route is now /users/:id
UserRouter.route("/:id")
.get((req: Request, res: Response) => {
    res.send(`Retrieving data of user with id ${req.params.id}`);//getting the id from the url
})

.put((req: Request, res: Response) => {
    res.send(`Editing user with id ${req.params.id}`);//getting the id from the url
})
.delete((req: Request, res: Response) => {
    res.send(`Deleting user with id ${req.params.id}`);
})

UserRouter.route("/:id/borrow/:bookId")
.put((req: Request, res: Response) => {
    res.send(`User with id ${req.params.id} is borrowing book with id ${req.params.bookId}`);
})

UserRouter.route("/:id/return/:bookId")
.put((req: Request, res: Response) => {
    res.send(`User with id ${req.params.id} is returning book with id ${req.params.bookId}`);
})



export default UserRouter;