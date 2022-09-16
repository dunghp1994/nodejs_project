const Blog = require('../models/Blog');
const { mongooseToObject } = require('../../util/mongoose');

class BlogController {

  // [GET] /blogs/:slug
  show(req, res, next) {
     Blog.findOne({slug: req.params.slug})
     .then((blog) => {
        res.render("blogs/show.hbs", { blog: mongooseToObject(blog) });
     })
     .catch(next);
  }

  //[GET] blog/create
  create(req, res, next) {
      res.render("blogs/create.hbs")
   }

   //[GET] blog/store
  store(req, res, next) {
   const formData = req.body;
   formData.image = `https://i.ytimg.com/vi/${req.body.video}/hqdefault.jpg`
   const blog = new Blog(formData);
   blog.save()
     .then(() => res.redirect('/'))
     .catch(error => {
      
     })
   }

}

module.exports = new BlogController;
