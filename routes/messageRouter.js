const { Router } = require('express');

const messageRouter = (messages) => {
  const router = Router();

  router.get('/:messageId', (req, res) =>
    res.render('message', { message: messages[req.params.messageId] })
  );

  return router;
};

module.exports = messageRouter;
