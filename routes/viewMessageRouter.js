const { Router } = require('express');
const viewMessageController = require('../controllers/viewMessageController');

const messageRouter = (messages) => {
  const router = Router();

  router.get('/:messageId', (req, res, next) => {
    viewMessageController.getMessageView(req, res, next, messages);
  });

  return router;
};

module.exports = messageRouter;
