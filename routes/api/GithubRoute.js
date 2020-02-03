const axios = require("axios");
const router = require("express").Router();

router.get("/github", (req, res) => {
  // console.log(req.query)
  axios
    .get(`https://jobs.github.com/positions.json?description=${req.query.title}&location=${req.query.location}`)
    .then((response) => {
      // console.log(response.data)

      var responseData = [];

      response.data.forEach(element => {
        var result = {}
        result.id = element.id;
        result.title = element.title;
        result.company = element.company;
        result.url = element.url;
        result.location = element.location;
        result.description = element.description;
        result.salary;
        result.company_logo = element.company_logo;
        result.created_at = element.created_at;
        result.provider = "Github" ;

        responseData.push(result)
      });
      // console.log(responseData)

      res.json(responseData)
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;
