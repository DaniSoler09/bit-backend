import { Schema,model } from "mongoose"

const UserSchema = new Schema ({
    NombreCompleto: {
        type: String
    },
    Correo: {
        type: String
    },
    Telefono: {
        type: Number
    },
    Edad: {
        type: Number
    },
    Contraseña: {
        type: String
    }
},{versionKey: false})

export default model("User", UserSchema)