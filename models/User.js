const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Relationship = require('./Relationship')

// const RelationshipSchema = new Schema({
//   discussions: {
//     type: [Schema.Types.ObjectId],
//     required: true
//   }
// }, {
//   timestamps: true
// })

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  _relationships: [{ type: Schema.Types.ObjectId, ref: 'Relationship'}]
}, {
  timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);