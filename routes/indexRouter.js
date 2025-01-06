const { Router } = require('express');

const messages = [
  {
    text: 'Hi there!',
    user: 'Amanda',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

const indexRouter = () => {
  const router = Router();

  router.get('/', (req, res) => res.render('index', { messages: messages }));

  return router;
};

module.exports = indexRouter;
