const CustomNotFoundError = require('../errors/CustomNotFoundError');

const getMessageView = (req, res, next, messages) => {
  const messageId = parseInt(req.params.messageId);
  const message = messages[messageId];

  if (!message) {
    return next(
      new CustomNotFoundError(`Message with ID ${messageId} not found.`)
    );
  }

  res.render('message', { message: message });
};

module.exports = {
  getMessageView,
};
