const getNewForm = (req, res) => {
  res.render('form', {});
};

const postNewMessage = (req, res, messages) => {
  const { author, message } = req.body;

  if (author && message) {
    messages.push({
      text: message,
      user: author,
      added: new Date(),
    });
    res.redirect('/');
  }
};

module.exports = {
  getNewForm,
  postNewMessage,
};
