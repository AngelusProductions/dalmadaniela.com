const mongoose = require('mongoose');
require('dotenv').config({ path: __dirname + '/../.env' });

mongoose.connect(process.env.DEV_DATABASE);

const BlogPost = require('../models/BlogPost');

async function getBlogPost(name) {
  try {
    const blogPost = await BlogPost.findOne({ name })

    console.log(blogPost, 'Finished fetching blog post.');
    
    return blogPost
  } catch (e) {
    console.log(e);
    return e
  }
}

async function getAllBlogPosts() {
  try {
    let blogPosts = []

    for await (const doc of BlogPost.find()) {
      doc.set('field', 'value')
      blogPosts.push(await doc.save())
    }

    console.log(blogPosts, 'Finished fetching all blog posts.');
    
    return blogPosts
  } catch (e) {
    console.log(e);
    return e
  }
}

async function createBlogPost(blogPostData) {
  try {
    const blogPost = await BlogPost.collection.insertOne(blogPostData);
    
    console.log(blogPost, 'Finished creating blog post.');
    
    return blogPost
  } catch (e) {
    console.log(e);
    return e
  }
}

module.exports.getBlogPost = getBlogPost;
module.exports.getAllBlogPosts = getAllBlogPosts;
module.exports.createBlogPost = createBlogPost;