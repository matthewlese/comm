const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RelationshipSchema = new Schema({
  _discussions: {
    type: [Schema.Types.ObjectId],
    required: true
  },
  _members: [{ type: Schema.Types.ObjectId, ref: 'User'}]
}, {
  timestamps: true
})

module.exports = Relationship = mongoose.model('Relationship', RelationshipSchema);