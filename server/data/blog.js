const mongoose = require('mongoose');
require('dotenv').config({ path: __dirname + '/../.env' });

mongoose.connect(process.env.DEV_DATABASE);

const BlogPost = require('../models/BlogPost');

async function createBlogPost(blogPostData) {
  try {
    console.log(blogPostData)

    const blogPost = await BlogPost.collection.insertOne(blogPostData);
    
    console.log('Finished inserting blog post.');
    
    return blogPost
  } catch (e) {
    console.log(e);
    return e
  }
}

module.exports.createBlogPost = createBlogPost;