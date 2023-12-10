const yup = require('yup');

module.exports.TODO_VALIDATION_SCHEMA = yup.object({
  name: yup.string().max(32).required(),
});
