const axios = require("axios");
const router = require("express").Router();

const db = require("../../models")

router.post("/savedJob", (req, res) => {
    // console.log("this is req.body of saved jobs: "+ req.body.id);
    db.SavedJobs
        .create(req.body)
        .then((data) => {
        // console.log(data)
        res.json(data)
        })
        .catch(err => console.log(err))
});

router.get("/savedJobByUser", (req, res)=>{
    var username = req.query.username
    db.SavedJobs
        .find({ username: username })
        .then((resDB)=>{
            res.json(resDB)
        })
        .catch(err=>console.log(err))
});
router.delete("/savedJob", (req, res)=>{
    var username = req.query.username
    // console.log("testing",req.query.favJobID)
    db.SavedJobs
        .findById({_id: req.query.favJobID})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
});

router.put("/updatejob", (req,res)=>{
    // console.log("testing", req.body.params.favJobID)
    // console.log("testing", req.body.params.status)
    db.SavedJobs
        .update(
            {_id: req.body.params.favJobID},
            {$set: {"status": req.body.params.status}}
        )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
});

router.get("/savedJob", (req,res)=>{
    db.SavedJobs
        .findOne({ 
            username: req.query.username, 
            id: req.query.jobID
        })
        .then((resDB)=>{
            console.log(resDB)
            res.send(resDB)
        })
        .catch(err=>console.log(err))
})



module.exports = router;