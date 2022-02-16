const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RelationshipSchema = new Schema({
  discussions: {
    type: [Schema.Types.ObjectId],
    required: true
  }
}, {
  timestamps: true
})

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  relationships: {
    type: [RelationshipSchema],
    required: true
  }
}, {
  timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);