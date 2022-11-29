const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true
  },
}, { timestamps: true });

const Blog = mongoose.model('blog', blogSchema);
module.exports = Blog;