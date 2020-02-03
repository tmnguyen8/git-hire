 const mongoose = require('mongoose');
// Schema constructor
 const Schema = mongoose.Schema;
 const UserSchema = new Schema({
     id: {
         type: String
     },
     username: {
         type: String
     },
     profileURL: {
         type: String
     },
     photos: {
         type: String
     },
     // note is an object that storage a NOTE id
//     // it reference the ObjectID of Note model
// SavedJob: {
//     type: UserSchema.Types.ObjectId,
//     ref: "SavedJob"
// }
});

 const User = mongoose.model('User', UserSchema);

 module.exports = User;
