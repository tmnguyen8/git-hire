const axios = require("axios");
const router = require("express").Router();
require("dotenv").config();

var host = 'data.usajobs.gov';  
var userAgent = process.env.USA_Email;  
var authKey = process.env.USAJOB_Key; 


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
                result.salary = "";
                result.imageURL = "";
                result.provider = "USAJobs";

                resultData.push(result)
        })
        // console.log(resultData);
        res.send(resultData)
    })
    .catch(err => res.json(err));
});

module.exports = router;


