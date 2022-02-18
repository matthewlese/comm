const express = require("express");
const router = express.Router();
const passport = require('passport');

const User = require("../../models/User");
const Invitation = require("../../models/Invitation");

router.get('/:invitationId',
  passport.authenticate('jwt', { session: false }), 
  (req, res) => {
    const { invitationId } = req.body
    Invitation.findOne({ id: invitationId })
      .populate('_inviter')
      .then(invitation => {
        res.json(invitation)})
      .catch(err => res.status(400).json({ noInvitationFound: "No invitation found"}))
})

router.patch('/:invitationId/accept',
  passport.authenticate('jwt', { session: false }), 
  async (req, res) => {
    const { invitationId } = req.params;
    Invitation.findOneAndUpdate({ id: invitationId }, { accepted: true })
      .populate('_relationship')
      .then(async invitation => {
        let relationship = invitation._relationship
        relationship._members.push(invitation._invitee)
        await relationship.save()
        let invitee = await User.findOne({ id: invitation._invitee })
        console.log(invitee)
        console.log(invitation._inviter)
        invitee._relationships.push(relationship._id)
        invitee.save()
          .then(invitee => res.json(relationship))
      })
      .catch(err => res.status(400).json({ noInvitationFound: "No invitation found"}))
})

module.exports = router;