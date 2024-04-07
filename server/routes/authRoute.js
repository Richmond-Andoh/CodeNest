import express from "express";
import passport from "passport";

const authRoutes = express.Router();

authRoutes.get("/github", passport.authenticate("github", { scope: [ "user:email" ] }), );

authRoutes.get("/github/callback", passport.authenticate("github", { failureRedirect: process.env.CLIENT_BASE_URL + "/login" }), (req, res) => {
    res.redirect(process.env.CLIENT_BASE_URL);
});

authRoutes.get("/check", (req, res) =>{
    if(req.isAuthenticated){
        res.send({ user: req.user })
    } else {
        res.send({ user: null })
    }
})
authRoutes.get("/logout", (req, res) => {
    req.session.destroy((error) => {
        res.send({error: "Logout"})
    })

    // or 
    // req.destroy();
    // res.redirect("/");
})
export default authRoutes;
