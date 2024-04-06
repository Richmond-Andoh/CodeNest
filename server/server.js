import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";

// configure dotenv
dotenv.config();

const app = express();

app.use(express.json()); // to support JSON-encoded bodies



app.get( "/", ( req, res ) => {
    res.send("Hello, Server is ready")
});

app.use("/api/users",  userRoute);

app.listen(5050, () => {
    console.log("Server started perfectly and ready to go");
})