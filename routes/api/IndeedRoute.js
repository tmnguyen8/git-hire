const axios = require("axios");
const router = require("express").Router();
const cheerio = require('cheerio');

router.get("/indeed", (req, res) => {
  // console.log(req.query)
  axios
    .get(`https://www.indeed.com/jobs?q=${req.query.title}&l=${req.query.location}&sort=date`)
    .then((response) => {
      var $ = cheerio.load(response.data);
      var scrapeData = [];

      $(".jobsearch-SerpJobCard").each(function() {
        var result = {}
   
        // result.id = $(this);
        result.title = $(this).children(".title").children('a').attr('title');
        // result.company = $(this);
        // result.url = $(this);
        // result.location = $(this);
        // result.description = $(this);
        // result.salary = $(this);
        // result.imageURL = $(this);

        scrapeData.push(result)
        console.log(result.title)
      })
      // console.log(scrapeData)
      res.json(scrapeData)
    })
    .catch(err => res.json(err));
});

module.exports = router;
