const { Router } = require('express');

const indexRouter = (messages) => {
  const router = Router();

  router.get('/', (req, res) => res.render('index', { messages: messages }));

  return router;
};

module.exports = indexRouter;
