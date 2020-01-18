const axios = require("axios");
const router = require("express").Router();
require("dotenv");

var host = 'data.usajobs.gov';  
var userAgent = 'tmnguyen8@gmail.com';  
var authKey = 'uyWJI+jIRS4qNiG/VuhUyIFK3brITqFqgmRAS3XmQDg='; 

router.get("/usajobs", (req, res) => {
  // console.log(req.query)

  axios
    .get(    
        `https://data.usajobs.gov/api/search?JobCategoryCode=2210&Keyword=${req.query.title}&LocationName=${req.query.location}`,      
        {headers: {          
            "Host": host,          
            "User-Agent": userAgent,          
            "Authorization-Key": authKey      
            }
        }
    )
    .then((results) => {
        var resultData = [];
        results.data.SearchResult.SearchResultItems.map(item=>{
                var result = {};

                result.id = item.MatchedObjectId;
                result.title = item.MatchedObjectDescriptor.PositionTitle;
                result.company = item.MatchedObjectDescriptor.OrganizationName;
                result.url = item.MatchedObjectDescriptor.PositionURI;
                result.location = item.MatchedObjectDescriptor.PositionLocationDisplay;
                result.description = item.MatchedObjectDescriptor.QualificationSummary;

                resultData.push(result)
        })
        // console.log(resultData);
        res.send(resultData)
    })
    .catch(err => res.json(err));
});

module.exports = router;


