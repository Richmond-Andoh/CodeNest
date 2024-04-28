import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import path from "path"

import "./passport/githubAuth.js";

import dbConnection from "./db_connection/mongodb_connection.js";
import userRoute from "./routes/userRoute.js";
import exploreRoute from "./routes/exploreRoute.js";
import authRoutes from "./routes/authRoute.js";

// configure dotenv
dotenv.config();

const app = express();

//middlewares 
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());  // enable all CORS requests
app.use(express.json()); // to support JSON-encoded bodies

const __dirname = path.resolve();

const PORT = process.env.PORT || 5500

app.use("/api/auth", authRoutes)
app.use("/api/users",  userRoute);
app.use("/api/explore", exploreRoute)
app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
})

const  startServer = async () =>{
   await dbConnection();
   
   app.listen(PORT, () => {
    console.log(`Server is listening on Port http://localhost:${PORT}`)
   });
};

startServer();