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

      $("li").each(()=>{
        var result = {}
        
        // result.id = $(this);
        // result.title = $(this);
        // result.company = $(this);
        // result.url = $(this);
        // result.location = $(this);
        // result.description = $(this);
        // result.salary = $(this);
        // result.imageURL = $(this);

        scrapeData.push(result)
      })
      // console.log(scrapeData)
      res.json(scrapeData)
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;
