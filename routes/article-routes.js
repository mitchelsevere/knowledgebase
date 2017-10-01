const express = require('express');
const articleRouter = express.Router();

const articlesController = require('../controllers/articles-controller');

articleRouter.get('/add', (req, res) => {
  res.render('add-article', {
    title: 'Add Articles',
  });
});

articleRouter.post('/add', articlesController.create);

module.exports = articleRouter;