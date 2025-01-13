require('dotenv').config();
const express = require('express');
const path = require('node:path');
const indexRouter = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');
const messageRouter = require('./routes/messageRouter');
const CustomNotFoundError = require('./errors/CustomNotFoundError');
const { error } = require('node:console');

const app = express();

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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/new', newRouter(messages));
app.use('/message', messageRouter(messages));
app.use('/', indexRouter(messages));

// Catch-all route
app.use((req, res, next) => {
  next(new CustomNotFoundError(`Page not found for ${req.path}`));
});

// Error-handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || 'Internal server error';

  res.status(statusCode).render('error', {
    message: errorMessage,
    statusCode,
  });
});

app.listen(process.env.PORT, () => {
  console.log(
    `Express app - listening on ${process.env.HOST}:${process.env.PORT}`
  );
});
