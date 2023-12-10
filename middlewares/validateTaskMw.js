const {
  TODO_VALIDATION_CREATE_SCHEMA,
  TODO_VALIDATION_UPDATE_SCHEMA,
} = require('../utils/validationSchemas');

module.exports.validateCreateTask = async (req, res, next) => {
  const { body } = req;
  let validatedTask = null;

  try {
    validatedTask = await TODO_VALIDATION_CREATE_SCHEMA.validate(body);
  } catch (err) {
    next(err);
  }

  req.body = validatedTask;
  next();
};

module.exports.validateUpdateTask = async (req, res, next) => {
  const { body } = req;
  let validatedTask = null;

  try {
    validatedTask = await TODO_VALIDATION_UPDATE_SCHEMA.validate(body);
  } catch (err) {
    next(err);
  }

  req.body = validatedTask;
  next();
};

