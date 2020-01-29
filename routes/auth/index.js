const router = require("express").Router();
const GithubAuth = require("./GithubAuth");


router.use(GithubAuth);


module.exports = router;