const express = require("express");
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(cors());

// Use apiRoutes
app.use(routes);


// -------------------------------------------
// APP AUTHENTICATION
// -------------------------------------------
// const cors = require("cors");
// const fs = require("fs");
// const http = require("http");
// const https = require("https");
// require("dotenv").config();

// const passport = require("passport");
// const FacebookStrategy = require("passport-facebook").Strategy;
// const chalk = require("chalk");

// let user = {};

// passport.serializeUser((user, cb) => {
//   cb(null, user);
// });

// passport.deserializeUser((user, cb) => {
//   cb(null, user);
// });

// // Facebook Strategy
// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: process.env.FACEBOOK_CLIENT_ID,
//       clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
//       callbackURL: "/auth/facebook/callback"
//     },
//     (accessToken, refreshToken, profile, cb) => {
//       console.log(chalk.blue(JSON.stringify(profile)));
//       user = { ...profile };
//       return cb(null, profile);
//     }
//   )
// );

// app.use(cors());
// app.use(passport.initialize());

// app.get("/auth/facebook", passport.authenticate("facebook"));

// app.get(
//   "/auth/facebook/callback",
//   passport.authenticate("facebook"),
//   (req, res) => {
//     res.redirect("/profile");
//   }
// );

// app.get("/auth/user", (req, res) => {
//   console.log("getting user data!");
//   res.send(user);
// });

// app.get("/auth/logout", (req, res) => {
//   console.log("logging out!");
//   user = {};
//   res.redirect("/");
// });

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, '../client/build')));
//     app.get('/', function(req, res) {
//         res.sendFile(path.join(__dirname, 'build', 'index.html'));
//     });
// }


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});