const express = require("express");
const router = express.Router();
const passport = require('passport');

const Relationship = require("../../models/Relationship");
const Discussion = require("../../models/Discussion");
const validateDiscussionInput = require('../../validations/discussion');

router.post('/create',
  passport.authenticate('jwt', { session: false }), 
  async (req, res) => {
    const { errors, isValid } = validateDiscussionInput(req.body)
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const newDiscussion = new Discussion(req.body)
    let relationship = await Relationship.findOne({ _id: req.body.relationshipId })
    newDiscussion.save()
      .then(discussion => {
        relationship.discussions = [
          ...relationship.discussions,
          discussion._id
        ]
        relationship.save()
          .then(rel => res.json(discussion))
      })
      .catch(err => res.status(400).json(err));
})

router.get('/',
  passport.authenticate('jwt', { session: false }),   
  (req, res) => {
    Discussion.find()
      .then(discussions => res.json(discussions))
      .catch(err => res.status(404).json({ noDiscussionsFound: 'No discussions found.'}))
})

router.get('/:discussionId',
  passport.authenticate('jwt', { session: false }), 
  (req, res) => {
    const { discussionId } = req.params
    Discussion.findById(discussionId)
      .then(Discussion => res.json(Discussion))
      .catch(err => res.status(404).json({ noDiscussionFound: 'No Discussion found.'}))
  })
  
router.delete('/:discussionId/delete',
  passport.authenticate('jwt', { session: false }), 
  (req, res) => {
    const { discussionId } = req.params
    Discussion.findByIdAndDelete(discussionId)
      .catch(err => res.status(404).json({ noDiscussionFound: 'No Discussion found.'}))
})

module.exports = router