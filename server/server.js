import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import exploreRoute from "./routes/exploreRoute.js";

// configure dotenv
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); // to support JSON-encoded bodies



app.get( "/", ( req, res ) => {
    res.send("Hello, Server is ready")
});

app.use("/api/users",  userRoute);
app.use("/api/explore", exploreRoute)

app.listen(5050, () => {
    console.log("Server started perfectly and ready to go");
})