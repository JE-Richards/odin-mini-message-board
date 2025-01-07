const express = require('express');
const path = require('node:path');
const indexRouter = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');

const app = express();
const PORT = 3000;

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
app.use('/', indexRouter(messages));

app.listen(PORT, () => {
  console.log(`Express app - listening on http://localhost:3000`);
});
