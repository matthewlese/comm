const express = require("express");
const router = express.Router();
const passport = require('passport');

const Relationship = require("../../models/Relationship");

router.post('/create',
  passport.authenticate('jwt', { session: false }), 
  (req, res) => {
    const relData = {
      members: [req.user._id],
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

module.exports = router;