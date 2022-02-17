const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  // relationships: {
  //   type: [RelationshipSchema],
  //   required: true
  // }
}, {
  timestamps: true
})

const RelationshipSchema = new Schema({
  discussions: {
    type: [Schema.Types.ObjectId],
    required: true
  },
  members: [{ type: Schema.Types.ObjectId, ref: 'User'}]
}, {
  timestamps: true
})

module.exports = Relationship = mongoose.model('Relationship', RelationshipSchema);