const Blog = require('../models/Blog');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
  // [GET] / search
  // để là home thay index cũng được.
  index(req, res, next) {
     
        
      Blog.find({})
        .then(blogs => {
          res.render('home', {
            blogs: mutipleMongooseToObject(blogs)
          });
        })
        .catch(next);
      
      // res.render('home');
  }

  // [GET] /search/:slug
  search(req, res) {
      res.render('search');
  }
}

module.exports = new SiteController;
