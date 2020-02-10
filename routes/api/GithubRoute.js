const axios = require("axios");
const router = require("express").Router();

router.get("/github", (req, res) => {
  // console.log("github",req.query)
  axios
    .get(`https://jobs.github.com/positions.json?description=${req.query.title}&location=${req.query.location}`)
    .then((response) => {
      // console.log("github response", response.data[0])

      var responseData = [];

      response.data.map(element => {
        // console.log("element", element.id)
        var result = {}
        result.id = element.id;
        result.title = element.title;
        result.company = element.company;
        result.url = element.url;
        result.location = element.location;
        // Convert element.description to html object

        // --------------------------------
        result.description = element.description;
        result.salary="N/A";
        result.company_logo = element.company_logo;
        result.provider = "Github" ;

        // console.log("this is result", result.description)
        responseData.push(result)
      });

      // console.log("github", responseData)

      res.send(responseData)
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;
