const express = require("express");
const router = express.Router();
const passport = require('passport');

const Relationship = require("../../models/Relationship");
const User = require("../../models/User");
const Invitation = require("../../models/Invitation");

router.post('',
  passport.authenticate('jwt', { session: false }), 
  (req, res) => {
    const relData = {
      members: [req.user],
      ...req.body
    };
    const newRelationship = new Relationship(relData)
    let currUser = req.user
    newRelationship.save()
      .then(relationship => {
        currUser.relationships = [...currUser.relationships, relationship._id]
        currUser.save()
          .then(user => {
            res.json(relationship)
          })
      })
      .catch(err => res.status(400).json(err));
})

// router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
//   Relationship.find({ _id: { $in: [...req.user.relationships] } })
//     .then(relationships => res.json(relationships))
//     .catch(err => res.status(404).json({ noRelationshipsFound: 'No relationships found.'}))
// })

router.get('/:relationshipId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { relationshipId } = req.params
    Relationship.findById(relationshipId)
      .populate('members')
      .then(relationship => res.json(relationship))
      .catch(err => res.status(404).json({ noRelationshipFound: 'No relationship found.'}))
})
  
router.delete('/:relationshipId/delete',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { relationshipId } = req.params
    Relationship.findByIdAndDelete(relationshipId)
      .then(relationship => res.json(relationship))
      .catch(err => res.status(404).json({ noRelationshipFound: 'No relationship found.'}))
})

router.get('/:relationshipId/discussions',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { relationshipId } = req.params
    Discussion.find({ relationshipId })
      .then(discussions => res.json(discussions))
      .catch(err => res.status(404).json({ noRelationshipFound: 'No relationship found.'}))
})

router.post('/:relationshipId/invitations',
  passport.authenticate('jwt', { session: false }), 
  (req, res) => {
    const { inviteeUsername, relationshipId , message } = req.body
    User.findOne({ username: inviteeUsername })
      .then(user => {
        const newInvitation = new Invitation({
          message,
          relationshipId,
          invitee: user._id,
          inviter: req.user._id,
          accepted: false
        })
        newInvitation.save()
          .then(invitation => res.json(invitation))
          .catch(err => res.status(400).json(err));
      })
      .catch(err => res.status(400).json({ noUserFound: "No user found with that username"}))
})

module.exports = router;