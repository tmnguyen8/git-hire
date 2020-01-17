const router = require("express").Router();
const GitHubRoute = require("./GithubRoute");
const IndeedRoute = require("./IndeedRoute");
const ZiprecruiterRoute = require("./ZiprecruiterRoute")

router.use(GitHubRoute);
router.use(IndeedRoute);
router.use(ZiprecruiterRoute);

module.exports = router;
