const boom = require('@hapi/boom');

function dtoHandler(dto, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = dto.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}

module.exports = dtoHandler;
