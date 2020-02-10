const axios = require("axios");
const router = require("express").Router();
const cheerio = require('cheerio');
router.get("/simplyhired", (req, res) => {
  axios
  .get(`https://www.simplyhired.com/search?q=${req.query.title}r&l=${req.query.location}`)
  .then(function(response) {
    var $ = cheerio.load(response.data);
    var scrapeData = [];
    $(".SerpJob").each(function() {
      var result = {}
      result.id = $(this).children(".SerpJob-jobCard").data('jobkey');

      result.title = $(this).children(".SerpJob-jobCard").children('.jobposting-title-container').children('.jobposting-title').children('a').text();

      result.company = $(this).children(".SerpJob-jobCard").children('.jobposting-subtitle').children('.jobposting-company')      .text();

      result.url = "https://www.simplyhired.com" + $(this).children(".SerpJob-jobCard").children('.jobposting-title-container').children('.jobposting-title').children('a').attr('href');

      result.location = $(this).children(".SerpJob-jobCard").children('.jobposting-subtitle').children('.jobposting-location').children('span').children('span').text();

      result.description = $(this).children(".SerpJob-jobCard").children('.jobposting-snippet').text();

      result.salary = $(this).children(".SerpJob-jobCard").children('.SerpJob-metaInfo').children('div').children('span').text();

      result.imageURL = $(this).find("rpContent").children("viewjob-header-bar").last("div").children("viewjob-compnay-logo").attr("src");
      
      result.provider = "SimplyHired";
      
      scrapeData.push(result)
      // console.log(result)
    })
    // .get(`https://www.simplyhired.com/search?q=${req.query.title}r&l=${req.query.location}`)
    // .then(function(response) {
    //   var $ = cheerio.load(response.data);
    //   var companyLogo = [];
    //   $(".rpContent").each(function() {
    //     var logoResult {}
    //     logoResult.imageURL= $(this).children("viewjob-header-container").children("viewjob-header-bar").children("viewjob-header").children("viewjob-company-logo")
    //     console.log(logoResult)
    //   })
    // console.log(scrapeData)
    res.send(scrapeData)
  })
  .catch(err => res.json(err));
});
module.exports = router;