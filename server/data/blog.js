const mongoose = require('mongoose');
require('dotenv').config({ path: __dirname + '/../.env' });

mongoose.connect(process.env.DEV_DATABASE);

const BlogPost = require('../models/BlogPost');


async function getAllBlogPosts() {
  try {
    const blogPosts = await BlogPost.collection.find();
    
    console.log(blogPosts)
    console.log('Finished fetching all blog posts.');
    
    return blogPosts
  } catch (e) {
    console.log(e);
    return e
  }
}

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

module.exports.getAllBlogPosts = getAllBlogPosts;
module.exports.createBlogPost = createBlogPost;