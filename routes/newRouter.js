const { Router } = require('express');

const newRouter = (messages) => {
  const router = Router();

  router.get('/', (req, res) => res.render('form', {}));
  router.post('/', (req, res) => {
    const { author, message } = req.body;

    if (author && message) {
      messages.push({
        text: message,
        user: author,
        added: new Date(),
      });
      res.redirect('/');
    }
  });

  return router;
};

module.exports = newRouter;
