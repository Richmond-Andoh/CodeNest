import express from "express";
import userRoute from "./routes/userRoute.js";
const app = express();


app.get( "/", ( req, res ) => {
    res.send("Hello, Server is ready")
});

app.use("api/userss",  userRoute);

app.listen(5050, () => {
    console.log("Server started perfectly and ready to go");
})