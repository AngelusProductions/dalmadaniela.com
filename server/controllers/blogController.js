const { sendJson } = require('../handlers/util');
const { getAllBlogPosts, createBlogPost } = require('../data/blog');
const { v4 } = require('uuid');

exports.getAllBlogPosts = async (_, res, __) => {
  const blogPosts = await getAllBlogPosts()
  sendJson(res, 200, { blogPosts });
};

exports.createBlogPost = async (req, res, _) => {
  const newBlogPost = {
    id: v4(),
    createdAt: new Date(),
    updatedAt: new Date(),
    ...req.body
  }

  const blogPost = await createBlogPost(newBlogPost)

  sendJson(res, 201, { blogPost });
};
