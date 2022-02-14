const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken'); 
const passport = require('passport');

const Relationship = require("../../models/Relationship");
const validateRelationshipInput = require('../../validations/relationship');

router.post('/create', passport.authenticate('jwt', { session: false }), 
  (req, res) => {
    const { errors, isValid } = validateRelationshipInput(req.body)

    if (!isValid) {
      return res.status(400).json(errors);
    }
    let { members } = req.body
    const newRelationship = new Relationship(req.body)
    newRelationship.save()
      .then(relationship => res.json(relationship))
      .catch(err => res.status(400).json(err));
})

router.get('/', (req, res) => {
  Relationship.find()
    .then(relationships => res.json(relationships))
    .catch(err => res.status(404).json({ noRelationshipsFound: 'No relationships found.'}))
})

router.get('/:relationshipId', (req, res) => {
  const { relationshipId } = req.params
  Relationship.findById(relationshipId)
    .then(relationship => res.json(relationship))
    .catch(err => res.status(404).json({ noRelationshipFound: 'No relationship found.'}))
  })
  
  router.delete('/:relationshipId/delete', (req, res) => {
    const { relationshipId } = req.params
    Relationship.findByIdAndDelete(relationshipId)
    .catch(err => res.status(404).json({ noRelationshipFound: 'No relationship found.'}))
})

module.exports = router