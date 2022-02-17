const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InvitationSchema = new Schema({
  message: {
    type: String,
    required: true
  },
  _relationship: {
    type: Schema.Types.ObjectId,
    ref: 'Relationship',
    required: true
  },
  _invitee: {
    type: Schema.Types.ObjectId,
    required: true
  },
  _inviter: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  accepted: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: true
});

InvitationSchema.index({ relationshipId: 1, invitee: 1 }, { unique: true })

module.exports = Invitation = mongoose.model('Invitation', InvitationSchema)