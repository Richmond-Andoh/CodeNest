// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.

export const ensureAuthenticated = async(req, res, next) => {
    if(req.isAuthenticated()) {
        return next();
    }
    
    res.redirect(process.env.CLIENT_BASE_URL + "/login");
}