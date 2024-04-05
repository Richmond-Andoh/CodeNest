import express from "express";
import { getUserProfileAndRepos } from "../controllers/userController.js";

const userRoute = express.Router();

// @route   GET api/users
userRoute.route("/userProfile/:username", getUserProfileAndRepos)


export default userRoute;
