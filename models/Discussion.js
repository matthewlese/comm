const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiscussionSchema = new Schema({
  relationshipId: {
    type: Schema.Types.ObjectId,
    ref: 'relationships'
  },
  headline: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = Discussion = mongoose.model('Discussion', DiscussionSchema);