const express = require('express');
const articleRouter = express.Router();

const articlesController = require('../controllers/articles-controller');

articleRouter.get('/add', articlesController.new);
articleRouter.post('/add', articlesController.create);
articleRouter.get('/:id', articlesController.show);
articleRouter.get('/edit/:id', articlesController.edit);
articleRouter.post('/edit/:id', articlesController.update);

module.exports = articleRouter;