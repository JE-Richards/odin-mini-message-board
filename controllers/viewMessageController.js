const CustomNotFoundError = require('../errors/CustomNotFoundError');
const db = require('../db/queries');

const getMessageView = async (req, res, next) => {
  const messageId = parseInt(req.params.messageId);
  const message = await db.getMessage(messageId);

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
