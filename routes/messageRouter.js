const { Router } = require('express');
const CustomNotFoundError = require('../errors/CustomNotFoundError');

const messageRouter = (messages) => {
  const router = Router();

  router.get('/:messageId', (req, res, next) => {
    const messageId = parseInt(req.params.messageId);
    const message = messages[messageId];

    if (!message) {
      return next(
        new CustomNotFoundError(`Message with ID ${messageId} not found.`)
      );
    }

    res.render('message', { message: message });
  });

  return router;
};

module.exports = messageRouter;
