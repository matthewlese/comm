const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken'); 
const passport = require('passport');

const User = require('../../models/User');
const Invitation = require('../../models/Invitation');
const Relationship = require('../../models/Relationship');

const validateSignupInput = require('../../validations/signup');
const validateSigninInput = require('../../validations/signin');
const isRelatedTo = require('../../util/is_related_to')

// router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

// private auth route
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username
  });
})

router.post("/signup", (req, res) => {
  const { errors, isValid } = validateSignupInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ username: req.body.username }).then(user => {
    if (user) {
      errors.username = "Username already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        _relationships: []
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => res.status(400).json(err));
        });
      });
    }
  });
});

router.post('/signin', (req, res) => {
  const { errors, isValid } = validateSigninInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ username })
    .then(user => {
      if (!user) {
        return res.status(404).json({ username: 'This user does not exist' });
      }
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = { id: user.id, username: user.username };
            jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                });
              });
          } else {
            return res.status(400).json({ password: 'Incorrect password' });
          }
        })
    })
})

router.delete('/delete', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username })
      .then(user => {
        if (!user) {
          return res.status(404).json({ username: 'This user does not exist' })
        }
        bcrypt.compare(password, user.password)
          .then(isMatch => {
            if (isMatch) {
              User.deleteOne({ username }, err => {
                if (err) { 
                  return res.status(400).json('Something went wrong.')
                } else {
                  return res.json(`${username} deleted.`)
                }
              })
            } else {
              return res.status(400).json({ password: 'Incorrect password' });
            }
          })
      })
})

router.get('/:userId', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const userId = req.params.userId
    const currentUser = req.user
    if (isRelatedTo(userId, currentUser)) {
      User.findOne({ id: userId })
        .then(user => {
          if (!user) {
            return res.status(400).json({userId: 'This user does not exist'})
          }
          res.json(user)
        })
    } else {
      return res.status(401).json({userId: 'You do not have access to this user'})
    }
})

router.get('/:userId/relationships',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const userId = req.params.userId
    User.findOne({ _id: userId })
      .populate({
        path: '_relationships',
        populate: {
          path: '_members',
          model: 'User'
        }
      })
      .then(user => res.json(user._relationships))
      .catch(err => res.status(404).json({ noRelationshipsFound: 'No relationships found.'}))
})

router.get('/:userId/invitations',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const userId = req.params.userId
    const currentUserId = req.user.id
    if (userId !== currentUserId) { return res.status(401).json('You can only view your own invitations')}
    Invitation.find({ _invitee: userId, accepted: false })
      .populate('_inviter')
      .then(invitations => res.json(invitations))
      .catch(err => res.status(404).json({ noRelationshipsFound: 'No invitations found.'}))
})

module.exports = router;