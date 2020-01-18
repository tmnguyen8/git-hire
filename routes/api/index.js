const router = require("express").Router();
const GitHubRoute = require("./GithubRoute");
const IndeedRoute = require("./IndeedRoute");
const ZiprecruiterRoute = require("./ZiprecruiterRoute");
const USAJobsRoute = require('./USAJobsRoute');
const MonsterRoute = require('./MonsterRoute');
const GlassdoorRoute = require('./GlassdoorRoute');


router.use(GitHubRoute);
router.use(IndeedRoute);
router.use(ZiprecruiterRoute);
router.use(USAJobsRoute);
router.use(MonsterRoute);
router.use(GlassdoorRoute);

module.exports = router;
