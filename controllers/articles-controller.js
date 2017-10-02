const Article = require('../models/article.js');
const articleController = {};

// show all Articles - action
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
// show one Article - action
articleController.show = (req, res) => {
  Article.findById(req.params.id, (err, article) => {
    res.render('article', {
      title: `Article ${req.params.id}`,
      article: article,
    });
  });
}
// show New form - view
articleController.new = (req, res) => {
  res.render('add-article', {
    title: 'Add Articles',
  });
}
// create new Article - action
articleController.create = (req, res) => {
  let article = new Article();
  article.title = req.body.title;
  article.author = req.body.author;
  article.body = req.body.body;
  
  article.save(err => {
    err ? console.log(err) : res.redirect('/');
  });
}
// show Edit form - view
articleController.edit = (req, res) => {
  Article.findById(req.params.id, (err, article) => {
    res.render('edit-article', {
      title: 'Edit Title',
      article: article,
    });
  });
}
// edit Article - action
articleController.update = (req, res) => {
  let article = {};
  article.title = req.body.title;
  article.author = req.body.author;
  article.body = req.body.body;

  let query = {_id:req.params.id} // where _id matches req.params.id
  // updating the model so capital Article not lowercase
  Article.update(query, article, (err) => {
    err ? console.log(err) : res.redirect('/');
  });
}
// delete Article - action
articleController.delete = (req, res) => {
  let query = {_id:req.params.id}

  Article.remove(query, (err) => {
    err ? console.log(err) : res.send('Success');
  });
}

module.exports = articleController;