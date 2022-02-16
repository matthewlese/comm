const express = require("express");
const router = express.Router();
const passport = require('passport');

const User = require("../../models/User");
const Invitation = require("../../models/Invitation");

router.post('',
  passport.authenticate('jwt', { session: false }), 
  (req, res) => {
    const { inviteeUsername, inviterId, relationshipId } = req.body
    User.findOne({ username: inviteeUsername })
      .then(user => {
        const newInvitation = new Invitation({
          
        })
      })
      .catch(err => res.status(400).json({ noUserFound: "No user found with that username"}))

    let currUser = req.user
    newInvitation.save()
      .then(relationship => {
        // currUser.relationships = [...currUser.relationships, relationship]
        // currUser.save()
        //   .then(user => {
            res.json(relationship)
          // })
      })
      .catch(err => res.status(400).json(err));
})