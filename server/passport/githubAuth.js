import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import dotenv from "dotenv";
import User from "../modules/User.js";



dotenv.config();


// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete GitHub profile is serialized
//   and deserialized.
passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(obj, done) {
    done(null, obj);
});


// Use the GitHubStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and GitHub
//   profile), and invoke a callback with a user object.
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "/api/auth/github/callback"
  },
  async function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    const user =  await User.findOne({ username: profile.username });
    
    if(!user) {
        const newUser = new User({
            name: profile.displayName,
            username: profile.username,
            profileUrl: profile.profileUrl,
            avatarUrl: profile.photos[0].value,
            likedProfile: [],
            likedBy: []
        })

        await newUser.save();
        done(null, newUser);
    }  else {
        done(null, user);
    }

    // process.nextTick(function () {
      
    //   To keep the example simple, the user's GitHub profile is returned to
    //   represent the logged-in user.  In a typical application, you would want
    //   to associate the GitHub account with a user record in your database,
    //   and return that user instead.
    //   return done(null, profile);
    // });
  }
));