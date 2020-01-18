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

      $(".job_content").each( function() {
        var result = {}
        
        // result.id = $(this);
        result.title = $(this)
        .children('a')
        .children('h2')
        .children('span')
        .text();
        // result.company = $(this);
        // result.url = $(this);
        // result.location = $(this);
        // result.description = $(this);
        // result.salary = $(this);
        // result.imageURL = $(this);
        console.log(result.title)
        scrapeData.push(result)
      })
      // console.log(scrapeData)
      res.json(scrapeData)
    })
    .catch(err => res.json(err));
});

module.exports = router;