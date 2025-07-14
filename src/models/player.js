import { Schema, model } from "mongoose";

const PlayerSchema = new Schema ({
    NombreCompleto: {
        type: String
    },
    Correo: {
        type: String
    },
    Cedula: {
        type: Number
    },
    Genero: {
        type: String
    },
    Categoria: {
        type: String
    }
},{versionKey: false})

export default model("player", PlayerSchema)