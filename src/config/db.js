import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://soler092811:1234@cluster0.9ms44tb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('Atlas connected')
    } catch (error) {
        console.log("Atlas connecttion failed")
    }
}

export default connectDB

// mongodb+srv://soler092811:<db_password>@cluster0.9ms44tb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0