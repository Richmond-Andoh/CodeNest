import mongoose from "mongoose";


const dbConnection = async() => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        if(connection) console.log("MongoDB connected successfully");
    } catch(error){
        console.log(`Erro: ${error.message}`);
        process.exit(1);
    };
};

export default dbConnection;