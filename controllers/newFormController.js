const db = require('../db/queries');

const getNewForm = (req, res) => {
  res.render('form', {});
};

const postNewMessage = async (req, res) => {
  const { username, message } = req.body;

  if (username && message) {
    await db.insertMessage(message, username);

    res.redirect('/');
  }
};

module.exports = {
  getNewForm,
  postNewMessage,
};
