import "dotenv/config"
import connectDB from "./config/db.js"
import morgan from "morgan"
import playersRouter from "./routers/players.js"
import express from "express"
import UserRouter from "./routers/users.js"
import cors from "cors"

const server = express();
server.use(cors())
const host = process.env.HOST
const port = process.env.PORT

connectDB()

server.use(express.json())
server.use(morgan('dev'))
server.use("/players", playersRouter)
server.use("/users", UserRouter)

server.get("/", (request, response)=>{
    response.status(204).send()
    
})

server.listen(3000, ()=>{
    console.log(`Server is running at ${host} on port ${port}`)
})

