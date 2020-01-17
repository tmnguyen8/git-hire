const axios = require("axios");
const router = require("express").Router();

router.get("/github", (req, res) => {
  // console.log(req.query)
  axios
    .get(`https://jobs.github.com/positions.json?description=${req.query.title}&location=${req.query.location}`)
    .then((results) => {
      // console.log(results.data)
      res.json(results.data)
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;
