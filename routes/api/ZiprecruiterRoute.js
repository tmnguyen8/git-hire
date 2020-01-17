const axios = require("axios");
const router = require("express").Router();
const cheerio = require('cheerio');

router.get("/ziprecruiter", (req, res) => {
  // console.log(req.query)
  axios
    .get(`https://www.ziprecruiter.com/candidate/search?search=${req.query.title}&location=${req.query.location}`)
    .then((response) => {
      var $ = cheerio.load(response.data);
      var scrapeData = [];

      $("article").each(()=>{
        var result = {}
        
        result.title = $(this)
          .children(".job_content")
          .children("a")
          .children("h2")
          .children("span")
          .text()

        scrapeData.push(result)
      })
      // console.log(scrapeData)
      res.json(scrapeData)
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;
