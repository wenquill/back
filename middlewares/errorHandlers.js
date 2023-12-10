const { ValidationError } = require('yup');

module.exports.validationErrorHandler = (err, res, req, next) => {
  if (err instanceof ValidationError) {
    return res.status(422).send(err.errors[0]);
  }

  next(err);
};

module.exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return;
  }

  const status = err.status || 500;
  const message = err.message || 'Server error';

  console.log(err);

  res.status(status).send(message);
};
