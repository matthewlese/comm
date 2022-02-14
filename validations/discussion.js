const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateDiscussionInput(data) {
  let errors = {};

  data.headline = validText(data.headline) ? data.headline : '';

  if (Validator.isEmpty(data.headline)) {
    errors.headline = 'Headline field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};