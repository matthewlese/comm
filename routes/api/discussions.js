const express = require("express");
const router = express.Router();
const passport = require('passport');

const Discussion = require("../../models/Discussion");
const validateDiscussionInput = require('../../validations/discussion');

router.post('/create', passport.authenticate('jwt', { session: false }), 
  (req, res) => {
    const { errors, isValid } = validateDiscussionInput(req.body)
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const newDiscussion = new Discussion(req.body)
    newDiscussion.save()
      .then(discussion => res.json(discussion))
      .catch(err => res.status(400).json(err));
})

router.get('/', (req, res) => {
  Discussion.find()
    .then(discussions => res.json(discussions))
    .catch(err => res.status(404).json({ noDiscussionsFound: 'No discussions found.'}))
})

router.get('/:discussionId', (req, res) => {
  const { discussionId } = req.params
  Discussion.findById(discussionId)
    .then(Discussion => res.json(Discussion))
    .catch(err => res.status(404).json({ noDiscussionFound: 'No Discussion found.'}))
  })
  
router.delete('/:discussionId/delete', (req, res) => {
  const { discussionId } = req.params
  Discussion.findByIdAndDelete(discussionId)
    .catch(err => res.status(404).json({ noDiscussionFound: 'No Discussion found.'}))
})

module.exports = router