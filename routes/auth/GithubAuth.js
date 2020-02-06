const axios = require('axios');
const router = require("express").Router();
const express = require('express');

const cors = require("cors");
const fs = require("fs");
const http = require("http");
const https = require("https");
const app = express();
require("dotenv").config();

const passport = require("passport");
const GithubStrategy = require("passport-github").Strategy;
const chalk = require("chalk");

var user = {};

// Facebook Strategy
passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback"
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(chalk.blue(JSON.stringify(profile)));
      user = { ...profile };
      return cb(null, profile);
    }
  )
);

passport.serializeUser((user, cb) => {
    cb(null, user);
});
  
passport.deserializeUser((user, cb) => {
    cb(null, user);
});

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());


// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.get("/github", passport.authenticate("github"))

app.get("/github/callback",
  passport.authenticate("github"),
  (req, res) => {
    // console.log('user after callback', user);
    res.redirect('/login')
  }
);

app.get("/github/profile", (req, res) => {
    // console.log('user:', user);
    // console.log("getting user data!");
    res.send(user)
})


app.get("/logout", (req, res) => {
  // console.log("logging out!");
  user = {};
  res.redirect("/");
});

module.exports = app