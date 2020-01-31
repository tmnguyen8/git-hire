 const mongoose = require('mongoose');
// Schema constructor
 const Schema = mongoose.Schema;
 const UserSchema = new Schema({
     id: {
         type: String,
         required: "User ID is not present"
     },
     username: {
         type: String,
         required: "Username is not present"
     },
     profileURL: {
         type: String,
         required: "profile link is not present"
     },
     photos: {
         type: String
     },
     // note is an object that storage a NOTE id
//     // it reference the ObjectID of Note model
savedJob: {
    type: UserSchema.Types.ObjectId,
    ref: "Note"
}
});

 const Deal = mongoose.model('User', UserSchema);

 module.exports = savedJob;

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    
});

module.exports = mongoose.model('User', UserSchema);
