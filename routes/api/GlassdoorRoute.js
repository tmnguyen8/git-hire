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

      $("li").each(function(){
        var result = {}
        
        result.id = $(this).attr("data-id");
        result.title = $(this).children(".jobContainer").children(".jobHeader").siblings(".jobTitle").text();
        result.company = $(this).children(".jobContainer").children(".jobHeader").children(".jobTitle").text();
        result.url = $(this).children(".jobContainer").children(".jobHeader").children("a").attr("href");
        result.location = $(this).children(".jobContainer").children(".empLoc").text();
        result.description = "Not available.";
        result.salary = $(this).children(".jobContainer").children(".jobFooter").children(".salaryEstimate ").children(".jobSalaryRange").text();
        result.imageURL = $(this).children(".logoWrap").children(".sgLogo").find("img").attr("data-original");

        
        console.log("this is the id:" + result.id)
        console.log("this is the title:" + result.title)
        console.log("this is the company:" + result.company)
        console.log("this is the url:" + result.url)
        console.log("this is the location:" + result.location)
        console.log("this is the desc:" + result.description)
        console.log("this is the salary:" + result.salary)
        console.log("this is the image:" + result.imageURL)
        console.log("===========================================================================")
        
        scrapeData.push(result)

      })
      // console.log(scrapeData)
      res.json(scrapeData)
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;
