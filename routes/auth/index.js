const router = require("express").Router();
const FacebookAuth = require("./FacebookAuth");


router.use(FacebookAuth);


module.exports = router;