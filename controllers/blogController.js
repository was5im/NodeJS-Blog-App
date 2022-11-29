const Blog = require("../models/blog");

module.exports.blogs_get = async (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('home', { blogs: result });
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports.user_get = (req, res) => {
  const username = req.params.username;
  Blog.find({user_name: username})
    .then(result => {
      res.render('user', { blogs: result });
    })
    .catch(err => {
      console.log(err);
      res.render('404', { title: 'user not found' });
    });
}

module.exports.blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then(result => {
      res.render('blog', { blog: result });
    })
    .catch(err => {
      console.log(err);
      res.render('404', { title: 'Blog not found' });
    });
}

module.exports.newBlog_get = async (req, res) => {
  res.render('newBlog');
}

module.exports.newBlog_post = async (req, res) => {
  const { user_name, title, body } = req.body;

  try{
    const blog = await Blog.create({ user_name, title, body });
    res.status(201).json({ blog: blog._id});
  }
  catch(err){
    res.status(400).json({});
    console.log(user_name);
    console.log(title);
    console.log(body);
  }
}

module.exports.update_get = async (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then(result => {
      res.render('update', { blog: result });
    })
    .catch(err => {
      console.log(err);
      res.render('404', { title: 'Blog not found' });
    });
}

module.exports.update_patch = async (req, res) => {
  const update = req.body;
  const _id = req.params.id;

  try{
    const blog = await Blog.findByIdAndUpdate(_id, update);
    res.status(201).json({ redirect: '/home', blog });
  }
  catch(err){
    res.status(400).json({});
    console.log(err);
  }
}

module.exports.blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/home' });
    })
    .catch(err => {
      console.log(err);
    });
}
