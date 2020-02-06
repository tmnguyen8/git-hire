const router = require("express").Router();
const GitHubRoute = require("./GithubRoute");
const IndeedRoute = require("./IndeedRoute");
const USAJobsRoute = require('./USAJobsRoute');
const MonsterRoute = require('./MonsterRoute');
const GlassdoorRoute = require('./GlassdoorRoute');
const SimplyhiredRoute = require('./SimplyhiredRoute')
const savedJobRoute = require('./savedJobRoute');


router.use(GitHubRoute);
router.use(IndeedRoute);
router.use(USAJobsRoute);
router.use(MonsterRoute);
router.use(GlassdoorRoute);
router.use(SimplyhiredRoute);
router.use(savedJobRoute);


module.exports = router;
