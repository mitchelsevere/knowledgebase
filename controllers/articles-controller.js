const Article = require('../models/article.js');
const articleController = {};

articleController.index = (req, res) => {
  Article.find({}, (err, articles) => {
    err ? 
      console.log(err) : 
      res.render('index', {
        title: 'Articles',
        articles: articles,
      });
  });
}

articleController.create = (req, res) => {
  let article = new Article();
  article.title = req.body.title;
  article.author = req.body.author;
  article.body = req.body.body;
  
  article.save(err => {
    err ? console.log(err) : res.redirect('/');
  });
}

module.exports = articleController;