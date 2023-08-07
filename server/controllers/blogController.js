const { sendJson } = require('../handlers/util');
const { getAllBlogPosts, createBlogPost } = require('../data/blog');
const { v4 } = require('uuid');

exports.getAllBlogPosts = (req, res, next) => {
  const blogPosts = getAllBlogPosts()
  sendJson(res, 200, { blogPosts });
};

exports.createBlogPost = (req, res, next) => {
  const newBlogPost = {
    id: v4(),
    createdAt: new Date(),
    updatedAt: new Date(),
    ...req.body
  }

  const blogPost = createBlogPost(newBlogPost)

  sendJson(res, 201, { blogPost });
};
