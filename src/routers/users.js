import { Router } from "express";
import UserController from "../controllers/users.js";

const UserRouter = Router()

UserRouter.post("/create", UserController.Create)
UserRouter.get("/readAll", UserController.readAll)
UserRouter.get("/readOne/:id", UserController.readOne)
UserRouter.put("/update/:id", UserController.update)
UserRouter.delete("/delete/:id", UserController.delete)


export default UserRouter