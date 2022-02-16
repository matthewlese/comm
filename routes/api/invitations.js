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
      .then(invitation => res.json(invitation))
      .catch(err => res.status(400).json({ noInvitationFound: "No invitation found"}))
})

module.exports = router;