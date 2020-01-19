const axios = require("axios");
// const request = require('request')
const router = require("express").Router();
const cheerio = require('cheerio');

// request('https://www.ziprecruiter.com/candidate/search?search=${req.query.title}&location=${req.query.location}', (error, response, html) => {
//   if (!error && response.statusCode == 200) {
//     const $ = cheerio.load(html);
    
//     $('.job_content').each((i, el) => {
//       const title = $(el)
//       .find('.job_title')
//       .text();
//       console.log(title)
//     })
//   }
// });
router.get("/ziprecruiter", (req, res) => {
  // console.log(req.query)
  axios
    .get(`https://www.ziprecruiter.com/candidate/search?search=${req.query.title}&location=${req.query.location}`)
    .then((response) => {
      const $ = cheerio.load(response.data);
      var scrapeData = [];

      $(".job_content").each(()=>{
        var result = {}
        
        // result.id = $(this);
        result.title = $(this)
        .find('h2')
        .text();
        console.log(result.title)
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
