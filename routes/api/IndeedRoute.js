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

      $(".jobsearch-SerpJobCard").each(()=>{
        var result = {}
        
        result.title = $(this)
          .children("div")
          .children("a")

        scrapeData.push(result)
      })
      console.log(scrapeData)
      res.json(scrapeData)
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;
