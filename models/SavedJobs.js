 const mongoose = require('mongoose');

 const Schema = mongoose.Schema;

 const SavedJobsSchema = new Schema({
     savedJobTitle: {
        type: String,
         required: "saved job is required"
     },
     savedJobBody: {
         type: String,
         required: "saved job data is required"
     }
 })

 var Note = mongoose.model('SavedJobs', SavedJobsSchema);

 module.exports = Note;