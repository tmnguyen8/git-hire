const axios = require("axios");
const router = require("express").Router();
const cheerio = require('cheerio');

router.get("/monster", (req, res) => {
  console.log(req.query)
  axios
    .get(`https://www.monster.com/jobs/search/?q=${req.query.title}&where=${req.query.location}`)
    .then((response) => {
      var $ = cheerio.load(response.data);
      var scrapeData = [];

      $("#SearchResults").each(()=>{
        var result = {}
        
        result.title = $(this)
          .children(".card-content")
          .children(".flex-row")
          .children(".summary")
          .children(".card-header")
          .children("h2")
          .children("a")
          .text()

        scrapeData.push(result)
      })
      // console.log(scrapeData)
      res.json(scrapeData)
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;
