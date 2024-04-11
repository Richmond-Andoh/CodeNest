import express from "express";
import { getUserProfileAndRepos } from "../controllers/userController.js";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated.js";
import { getLikes, likeProfile } from "../controllers/userController.js";

const userRoute = express.Router();

// @route   GET api/users
userRoute.get("/profile/:username", getUserProfileAndRepos);
userRoute.get("/likes", ensureAuthenticated, getLikes);
userRoute.get("/like/:username", ensureAuthenticated, likeProfile)


export default userRoute;
