import express from "express";
import { handleExploreLanguages } from "../controllers/exploreController.js";

const exploreRoute = express.Router();

exploreRoute.get("/repos/:language", handleExploreLanguages)


export default exploreRoute;