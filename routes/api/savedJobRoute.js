const axios = require("axios");
const router = require("express").Router();

const db = require("../../models")

router.post("/savedJob", (req, res) => {
    console.log("this is req.body of saved jobs: "+ req.body.id);
    db.SavedJobs.create(req.body).then((data) => {
        console.log(data)
        res.json(data)
    })
    .catch(err => {
        console.log(err);
    })
});



module.exports = router;