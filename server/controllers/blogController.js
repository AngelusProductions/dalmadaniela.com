const { sendJson } = require('../handlers/util');
const { createBlogPost } = require('../data/blog');
const { v4 } = require('uuid');

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
