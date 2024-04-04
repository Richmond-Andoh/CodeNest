import express from "express";

const app = express();


app.get( "/", ( req, res ) => {
    res.send("Hello, Server is ready")
});

app.listen(5050, () => {
    console.log("Server started perfectly and ready to go");
})