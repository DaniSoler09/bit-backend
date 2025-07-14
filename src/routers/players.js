import { Router } from "express";
import PlayersController from "../controllers/players.js";

const playersRouter = Router()

playersRouter.post("/create", PlayersController.create)
playersRouter.get("/readAll", PlayersController.readAll)
playersRouter.get("/readOne/:id", PlayersController.readOne)
playersRouter.put("/update/:id", PlayersController.update)
playersRouter.delete("/delete/:id", PlayersController.delete)


export default playersRouter

