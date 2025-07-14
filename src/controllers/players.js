import player from "../models/player.js"

const PlayersController = {
    create: async (req, res)=>{
        try {
            const {NombreCompleto, Correo, Cedula, Genero, Categoria} = req.body
            const newPlayer = new player({
                NombreCompleto,
                Cedula,
                Genero,
                Categoria
            })
            const PlayerAdded = await newPlayer.save()
            res.status(201).json({allOk: true, message: "Tu registro fue exitoso", data: PlayerAdded})
        } catch (error) {
            res.status(500)
            .json({
                allOk: false,
                data: error.message,
                message: "Tu registro fallo"
            })
        }
},
    readAll: async (req, res)=>{
    try {
            const players = await player.find()
            res.status(200)
            .json({
                allOk: true,
                data: players,
                message: "players loaded"
            })
        } catch (error) {
            res.status(500)
            .json({
                allOk: false,
                data: error.message,
                message: "players not loaded"
            })
        }
},
    readOne: async (req, res)=>{
    try {
        const {id}= req.params
        const players = await player.findById(id)
            res.status(200)
            .json({
                allOk: true,
                data: players,
                message: "One player loaded"
            })
    } catch (error) {
        res.status(500)
            .json({
                allOk: false,
                data: error.message,
                message: "Unable to load player"
            })
    }
},
    update: async (req, res)=>{
    try {
        const {id}=req.params
        const players = await player.findByIdAndUpdate(id,req.body)
            res.status(200)
            .json({
                allOk: true,
                data: players,
                message: "player Updated"
            })
        } catch (error) {
            res.status(500)
            .json({
                allOk: false,
                data: error.message,
                message: "player not updated"
            })
        }
},
    delete: async (req, res)=>{
    try {
        const {id}=req.params
        const players = await player.findByIdAndDelete(id)
            res.status(200)
            .json({
                allOk: true,
                data: players,
                message: "player deleted"
            })
        } catch (error) {
            res.status(500)
            .json({
                allOk: false,
                data: error.message,
                message: "player not deleted"
            })
        }
}
}

export default PlayersController