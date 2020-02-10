const axios = require("axios");
const router = require("express").Router();
const cheerio = require('cheerio');
router.get("/monster", (req, res) => {
  axios
    .get(`https://www.monster.com/jobs/search/?q=${req.query.title}&where=${req.query.location}`)
    .then((response) => {
      var $ = cheerio.load(response.data);
      var scrapeData = [];
      // console.log($);
      
      $(".card-content").each(function(){
        var result = {}
        result.id = $(this).data('jobid');
        result.title = $(this).children('.flex-row').children('.summary').children('.card-header').children('.title').children('a').text();
        result.company = $(this).children('.flex-row').children('.summary').children('.company').children('.name').text();
        result.url = $(this).children('.flex-row').children('.summary').children('.card-header').children('.title').children('a').attr('href');
        result.location = $(this).children('.flex-row').children('.summary').children('.location').children('.name').text();
        result.description = "";
        result.salary = "";
        result.company_logo = $(this).children('.flex-row').children('.mux-company-logo').children('img').attr('src');
        result.provider = "Monster";

        if (result.title) {
          scrapeData.push(result)
        }
      })
      // console.log(scrapeData)
      res.json(scrapeData)
    })
    .catch(err => res.status(422).json(err));
});
module.exports = router;
