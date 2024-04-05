import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
const app = express();

// configure dotenv
dotenv.config();


app.get( "/", ( req, res ) => {
    res.send("Hello, Server is ready")
});

app.use("api/users",  userRoute);

app.listen(5050, () => {
    console.log("Server started perfectly and ready to go");
})