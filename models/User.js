// const mongoose = require('mongoose');
// // Schema constructor
// const Schema = mongoose.Schema;
// const DealSchema = new Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     link: {
//         type: String,
//         required: true
//     },
//     imageURL: {
//         type: String,
//         required: true
//     },
//     // note is an object that storage a NOTE id
//     // it reference the ObjectID of Note model
//     note: {
//         type: Schema.Types.ObjectId,
//         ref: "Note"
//     }
// });
// const Deal = mongoose.model('Deal', DealSchema);

// module.exports = Deal;

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    
});

module.exports = mongoose.model('User', UserSchema);
