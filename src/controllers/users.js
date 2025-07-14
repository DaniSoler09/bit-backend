import player from "../models/player.js";
import user from "../models/user.js";
import User from "../models/user.js";

const UserController = {
    Create: async (req, res)=>{
        try {
            const {NombreCompleto, Correo, Telefono, Edad, Contraseña} = req.body
            const NewUser = new User({
                NombreCompleto,
                Correo,
                Telefono,
                Edad,
                Contraseña
            })
            const UserAdded = await NewUser.save()
            res.status(201).json({allOk: true, message: "Tu registro fue exitoso", data: UserAdded})
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
        const users = await User.find()
            res.status(200)
            .json({
                allOk: true,
                data: users,
                message: "All users"
            })
        } catch (error) {
            res.status(500)
            .json({
                allOk: false,
                data: error.message,
                message: "players not added"
            })
        }
},
    readOne: async (req, res)=>{
        try {
            const {id}= req.params
            const user = await User.findById(id)
                res.status(200)
                .json({
                    allOk: true,
                    data: user,
                    message: "One user loaded"
                })
            } catch (error) {
                res.status(500)
                .json({
                    allOk: false,
                    data: error.message,
                    message: "Unable to load user"
                })
            }
    },
    update: async (req, res)=>{
        try {
            const {id}=req.params
            const user = await User.findByIdAndUpdate(id,req.body)
                res.status(200)
                .json({
                    allOk: true,
                    data: user,
                    message: "One user Updated"
                })
            } catch (error) {
                res.status(500)
                .json({
                    allOk: false,
                    data: error.message,
                    message: "Unable to update "
                })
            }
    },
    delete: async (req, res)=>{
        try {
            const {id}=req.params
            const users = await user.findByIdAndDelete(id)
                res.status(200)
                .json({
                    allOk: true,
                    data: users,
                    message: "Player deleted"
                })
            } catch (error) {
                res.status(500)
                .json({
                    allOk: false,
                    data: error.message,
                    message: "Unable to detele user"
                })
            }
    },
}

export default UserController