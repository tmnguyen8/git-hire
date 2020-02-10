 const mongoose = require('mongoose');

 const Schema = mongoose.Schema;

 const SavedJobsSchema = new Schema({
     id: {
        type: String
     },
     title: {
         type: String
     },
     company: {
         type: String
     },
     url: {
         type: String
     },
     location: {
         type: String
     },
     description: {
         type: String
     },
     salary: {
         type: String
     },
     company_logo: {
         type: String
     },
     username: {
         type: String
     },
     provider: {
         type: String
     },
     status: {
         type: String
     }

 })

 var SavedJob = mongoose.model('SavedJobs', SavedJobsSchema);

 module.exports = SavedJob;

