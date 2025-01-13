const db = require('../db/queries');

const getIndex = async (req, res) => {
  const messages = await db.getAllMessages();

  res.render('index', { messages: messages });
};

module.exports = {
  getIndex,
};
