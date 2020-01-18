const axios = require("axios");
const router = require("express").Router();
const cheerio = require('cheerio');

router.get("/glassdoor", (req, res) => {
  console.log(req.query)
  axios
    .get(`https://www.glassdoor.com/Job/jobs.htm?suggestCount=0&suggestChosen=false&clickSource=searchBtn&typedKeyword=Software+Developer&sc.keyword=${req.query.title}&locT=&locId=&jobType=`)
    .then((response) => {
      var $ = cheerio.load(response.data);
      console.log($)
      var scrapeData = [];

      $("li").each(()=>{
        var result = {}
        
        result.id = $(this);
        result.title = $(this);
        result.company = $(this);
        result.url = $(this);
        result.location = $(this);
        result.description = $(this);
        result.salary = $(this);
        result.imageURL = $(this).children(".logoWrap").children("a").children("span").children("img").attr("src");
        console.log($(this))
        console.log("this is the title:" + result.title)
        console.log("this is the company:" + result.company)
        console.log("this is the url:" + result.url)
        console.log("this is the location:" + result.location)
        console.log("this is the desc:" + result.description)
        console.log("this is the salary:" + result.salary)
        console.log("this is the image:" + result.imageURL)
        console.log("this is the id:" + result.id)
        console.log("===========================================================================")
        

        scrapeData.push(result)
      })
      // console.log(scrapeData)
      res.json(scrapeData)
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;
