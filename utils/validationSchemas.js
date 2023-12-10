const yup = require('yup');

module.exports.TODO_VALIDATION_CREATE_SCHEMA = yup.object({
  name: yup.string().max(32).required(),
  isDone: yup.boolean().oneOf([true, false]),
});

module.exports.TODO_VALIDATION_UPDATE_SCHEMA = yup.object({
  name: yup.string().max(32),
  isDone: yup.boolean(),
});
