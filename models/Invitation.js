const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InvitationSchema = new Schema({
  relationshipId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  invitee: {
    type: Schema.Types.ObjectId,
    required: true
  },
  inviter: {
    type: Schema.Types.ObjectId,
    required: true
  },
  accepted: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: true
});

module.exports = Invitation = mongoose.model('Invitation', InvitationSchema)