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
const FacebookStrategy = require("passport-facebook").Strategy;
const chalk = require("chalk");

var user = {};

// Facebook Strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: "/auth/facebook/callback"
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

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// app.get("/facebook", passport.authenticate("facebook"));
// app.get("/facebook", (req,res)=>{
//     console.log("facebook auth testing")
//     passport.authenticate("facebook")
//     }
// )
app.get("/facebook", 
    passport.authenticate("facebook")
);

app.get(
  "/facebook/callback",
  passport.authenticate("facebook"),
  (req, res) => {
    console.log('user after callback', user);
    res.redirect("/auth/profile")
  }
);

app.get("/profile", (req, res) => {
    console.log('user:', user);
    console.log("getting user data!");
    res.json(user);
});

app.get("/logout", (req, res) => {
  console.log("logging out!");
  user = {};
  res.redirect("/");
});

module.exports = app