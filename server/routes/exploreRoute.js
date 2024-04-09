import express from "express";
import { handleExploreLanguages } from "../controllers/exploreController.js";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated.js";

const exploreRoute = express.Router();

exploreRoute.get("/repos/:language", ensureAuthenticated, handleExploreLanguages)

export default exploreRoute;