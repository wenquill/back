const { TODO_VALIDATION_SCHEMA } = require('../utils/validationSchemas');

module.exports.validateTask = async (req, res, next) => {
  const { body } = req;
  let validatedTask = null;

  try {
    validatedTask = await TODO_VALIDATION_SCHEMA.validate(body);
  } catch (err) {
    next(err);
  }

  req.body = validatedTask;
  next();
};
