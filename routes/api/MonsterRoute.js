const axios = require("axios");
const router = require("express").Router();
const cheerio = require('cheerio');

router.get("/monster", (req, res) => {
  console.log(req.query)
  axios
    .get(`https://www.monster.com/jobs/search/?q=${req.query.title}&where=${req.query.location}`)
    .then((response) => {
      // console.log(response);
      var $ = cheerio.load(response.data);
      console.log($)
      
      var scrapeData = [];

      $("SearchResults").each(function(){
        var result = {}
        
        result.id = $(this);
        result.title = $(this);
        result.company = $(this);
        result.url = $(this);
        result.location = $(this);
        result.description = $(this);
      
        console.log("This is the id" + result.id)
        console.log("This is the title" + result.title)
        console.log("This is the company" + result.company)
        console.log("This is the link" + result.url)
        console.log("This is the location" + result.location)
        console.log("This is the summary" + result.description)
        console.log("===========================================================================")


        scrapeData.push(result)
      })
      // console.log(scrapeData)
      res.json(scrapeData)
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;
