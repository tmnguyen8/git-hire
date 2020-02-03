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
   
        result.id = $(this).data("jk");
        result.title = $(this).children(".title").children('a').attr('title');
        result.company = $(this).children('.sjcl').children('div').children('.company').text();
        result.url = "https://www.indeed.com/" + $(this).children(".title").children('a').attr('href')
        result.location = $(this).children('.sjcl').children('.location').text();
        result.description = $(this).children('.summary').children('ul').children('li').text();
        result.salary = $(this).children('.salarySnippet').children('.salary').children('.salaryText').text();
        result.imageURL = "";
        result.provider = "Indeed"

        scrapeData.push(result)
        // console.log(result)
      })
      // console.log(scrapeData)
      res.json(scrapeData)
    })
    .catch(err => res.json(err));
});

module.exports = router;
