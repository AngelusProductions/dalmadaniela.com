const { sendJson } = require('../handlers/util');
const { createBlogPost } = require('../data/blog');

exports.createBlogPost = (req, res, next) => {
  const { 
    name,
    introHtml,
    youtubeLink,
    bodyHtml,
    photoUrl,
    conclusionHtml
    } = req.body;

  console.log(
    name,
    introHtml,
    youtubeLink,
    bodyHtml,
    photoUrl,
    conclusionHtml
  )

  const blogPost = createBlogPost(req.body)

  sendJson(res, 201, { blogPost });
};
