const axios = require("axios");
const router = require("express").Router();
const cheerio = require('cheerio');

router.get("/glassdoor", (req, res) => {
  axios
    .get(`https://www.glassdoor.com/Job/jobs.htm?suggestCount=0&suggestChosen=false&clickSource=searchBtn&typedKeyword=Software+Developer&sc.keyword=${req.query.title}&locT=&locId=&jobType=`)
    .then((response) => {
      var $ = cheerio.load(response.data);
      console.log($)
      var scrapeData = [];

      $("li").each(function () {
        var result = {}

        nonURL = $(this).children(".jobContainer").children(".jobHeader").children("a").attr("href");

        result.id = $(this).attr("data-id");
        result.title = $(this).children(".jobContainer").children(".jobHeader").siblings(".jobTitle").text();
        result.company = $(this).children(".jobContainer").children(".jobHeader").children(".jobTitle").text();
        result.url = `https://www.glassdoor.com${nonURL}`
        result.location = $(this).children(".jobContainer").children(".empLoc").children("span").text();
        result.description = null;
        result.salary = $(this).children(".jobContainer").children(".jobFooter").children(".salaryEstimate ").children(".jobSalaryRange").text();
        result.imageURL = "";
        result.company_logo = $(this).children(".logoWrap").children("a").children(".sqLogo").children("img").data("original");
        result.provider = "Glassdoor";

        
        if (result.title) {
          scrapeData.push(result)
        }
      })
      // console.log(scrapeData)
      res.json(scrapeData)
    })
    .catch(err => res.status(422).json(err));
  });
  
  // testing and debugging
  // console.log("this is the id:" + result.id);
  // console.log("this is the title:" + result.title);
  // console.log("this is the company:" + result.company);
  // console.log("this is the url:" + result.url);
  // console.log("this is the location:" + result.location);
  // console.log("this is the desc:" + result.description);
  // console.log("this is the salary:" + result.salary);
  // console.log("this is the image:" + result.company_logo);
  // console.log("===========================================================================");


module.exports = router;
