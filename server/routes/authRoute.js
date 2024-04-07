import express from "express";

const authRoutes = express.Router();

authRoutes.get("/github")
authRoutes.get("/github/callback")

export default authRoutes;
