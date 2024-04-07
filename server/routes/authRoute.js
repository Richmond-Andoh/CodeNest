import express from "express";
import passport from "passport";

const authRoutes = express.Router();

authRoutes.get("/github", passport.authenticate("github", { scope: [ "user:email" ] }), );

authRoutes.get("/github/callback", passport.authenticate("github", { failureRedirect: process.env.CLIENT_BASE_URL + "/login" }), (req, res) => {
    res.redirect(process.env.CLIENT_BASE_URL);
});

export default authRoutes;
