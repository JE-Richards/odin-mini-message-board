const { Router } = require('express');
const newFormController = require('../controllers/newFormController');

const newRouter = (messages) => {
  const router = Router();

  router.get('/', newFormController.getNewForm);
  router.post('/', (req, res) =>
    newFormController.postNewMessage(req, res, messages)
  );

  return router;
};

module.exports = newRouter;
