import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnection from "./db_connection/mongodb_connection.js";
import userRoute from "./routes/userRoute.js";
import exploreRoute from "./routes/exploreRoute.js";

// configure dotenv
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // to support JSON-encoded bodies

const PORT = process.env.PORT || 5500

app.get( "/", ( req, res ) => {
    res.send("Hello, Server is ready")
});

app.use("/api/users",  userRoute);
app.use("/api/explore", exploreRoute)

const  startServer = async () =>{
   await dbConnection() ;
   
   app.listen(PORT, () => {
    console.log(`Server is listening on Port http://localhost:${PORT}`)
   });
};

startServer();