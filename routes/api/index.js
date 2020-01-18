const router = require("express").Router();
const GitHubRoute = require("./GithubRoute");
const IndeedRoute = require("./IndeedRoute");
const ZiprecruiterRoute = require("./ZiprecruiterRoute");
const USAJobsRoute = require('./USAJobsRoute');

router.use(GitHubRoute);
router.use(IndeedRoute);
router.use(ZiprecruiterRoute);
router.use(USAJobsRoute)

module.exports = router;
