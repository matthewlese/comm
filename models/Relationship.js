const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RelationshipSchema = new Schema({
  members: {
    type: [Schema.Types.ObjectId],
    required: true
  }
}, {
  timestamps: true
})

module.exports = Relationship = mongoose.model('Relationship', RelationshipSchema);