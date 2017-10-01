const express = require('express');
// initialize app
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
// set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// start server
app.listen(port, () => {
  console.log('Server started on port', port);
});
// get home route
app.get('/', (req, res) => {
  let articles = [
    {
      id: 1,
      title: 'Article One',
      author: 'Brad Traversy',
      body: 'This is article one',
    },
    {
      id: 2,
      title: 'Article Two',
      author: 'Mitchel Severe',
      body: 'This is article two',
    },
    {
      id: 3,
      title: 'Article One',
      author: 'Winston Churchill',
      body: 'This is article three',
    },
  ];
  res.render('index', {
    title: 'Articles',
    articles: articles,
  });
});

app.get('/articles/add', (req, res) => {
  res.render('add_article', {
    title: 'Add Articles',
  });
});

