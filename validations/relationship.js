const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRelationshipInput(data) {
  let errors = {};

  if (data.members.length === 0) {
    errors.members = "Something went wrong and the relationship is empty.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};