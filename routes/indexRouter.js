const { Router } = require('express');
const indexController = require('../controllers/indexController');

const indexRouter = (messages) => {
  const router = Router();

  router.get('/', (req, res) => indexController.getIndex(req, res, messages));

  return router;
};

module.exports = indexRouter;
