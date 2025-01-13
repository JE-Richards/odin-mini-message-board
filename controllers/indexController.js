const getIndex = (req, res, messages) => {
  res.render('index', { messages: messages });
};

module.exports = {
  getIndex,
};
