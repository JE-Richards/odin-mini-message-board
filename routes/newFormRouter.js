const { Router } = require('express');
const newFormController = require('../controllers/newFormController');

const newRouter = () => {
  const router = Router();

  router.get('/', newFormController.getNewForm);
  router.post('/', (req, res) => newFormController.postNewMessage(req, res));

  return router;
};

module.exports = newRouter;
